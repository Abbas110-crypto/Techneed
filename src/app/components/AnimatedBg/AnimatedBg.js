"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedBg = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef(new THREE.Vector2());
  const targetMousePosition = useRef(new THREE.Vector2());

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: false }); // Set alpha to false for the static background to be visible
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1';
    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    // Static background plane
    const staticBgColor = new THREE.Color(0x111111); // Dark color for static background
    const staticMaterial = new THREE.MeshBasicMaterial({ color: staticBgColor });
    const staticBgPlane = new THREE.Mesh(geometry, staticMaterial);
    staticBgPlane.position.set(0, 0, 0);
    scene.add(staticBgPlane);

    const fragmentShaderPink = `
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      
      float wavePattern(float y, float time) {
          return 0.2 * sin(4.0 * (y + time * 0.5));
      }
      
      void main() {
          vec2 st = gl_FragCoord.xy / u_resolution;
      
          // Flip the x-axis
          st.x = 1.0 - st.x;
      
          float dist = length(st - u_mouse) * 0.8;  // Increase to increase the spread
          float size = 0.7; // Decrease to increase the spread
          float waveEffect = wavePattern(st.y, u_time);
      
          float intensity = smoothstep(size + waveEffect, size - 0.3, dist);
      
          vec3 pink = vec3(228.0/255.0, 69.0/255.0, 215.0/255.0);
          vec3 lightPink = mix(vec3(228.0/255.0, 69.0/255.0, 215.0/255.0), vec3(1.0), 0.5);
          vec3 slightlyDarkerPurple = vec3(0.6, 0.4, 0.8); // Adjusted to be slightly darker
      
          vec3 gradient;
          if (st.y < 0.5) {
              gradient = mix(pink, lightPink, st.y * 2.0);
          } else {
              gradient = mix(lightPink, slightlyDarkerPurple, (st.y - 0.5) * 2.0);
          }
      
          float edgeFactor = smoothstep(0.0, 1.0, intensity);
          vec3 finalColor = mix(vec3(1.0), gradient, edgeFactor);
      
          float vignette = smoothstep(0.95, 1.15, length(st - vec2(0.5, 0.5)));
          finalColor = mix(finalColor, vec3(1.0), vignette * 0.4);
      
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const shaderMaterialPink = new THREE.ShaderMaterial({
      uniforms: {
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_mouse: { value: mousePosition.current },
        u_time: { value: 0.0 },
      },
      fragmentShader: fragmentShaderPink,
      transparent: true, 
    });

    const animatedPlane = new THREE.Mesh(geometry, shaderMaterialPink);
    animatedPlane.position.set(0, 0, 0.1);
    scene.add(animatedPlane);

    const setInitialMousePosition = () => {
      mousePosition.current.x = (window.innerWidth - 1) / window.innerWidth * 2 - 1;
      mousePosition.current.y = -(1 / window.innerHeight * 2 - 1);
      targetMousePosition.current.copy(mousePosition.current);
    };

    setInitialMousePosition();

    const animate = () => {
      shaderMaterialPink.uniforms.u_time.value += 0.01;

      mousePosition.current.lerp(targetMousePosition.current, 0.05);
      shaderMaterialPink.uniforms.u_mouse.value.copy(mousePosition.current);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event) => {
      let xPos = -(event.clientX / window.innerWidth) * 2 + 1;

      // Restrict x-position to only move within the right half of the screen
      if (xPos > 0) {
        xPos = 0;
      }

      // Prevent animation from exceeding the left side of the screen
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set mouse position only when x is within the restricted area
      if (xPos <= 0) {
        targetMousePosition.current.x = xPos;
        targetMousePosition.current.y = THREE.MathUtils.clamp(normalizedY, -1, 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.left = -1;
      camera.right = 1;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      shaderMaterialPink.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);

      setInitialMousePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
};

export default AnimatedBg;
