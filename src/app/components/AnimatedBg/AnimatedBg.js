"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedBg = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef(new THREE.Vector2(0, 0));
  const targetMousePosition = useRef(new THREE.Vector2(0.8, 0.8));

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'fixed'; 
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1';
    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    // Peach background shader for the right side
    const fragmentShaderPeach = `
    uniform vec2 u_resolution;
    uniform float u_time;

    float verticalWave(float y, float time) {
        return 0.05 * sin(10.0 * (y + time * 0.5));
    }

    void main() {
        vec2 st = gl_FragCoord.xy / u_resolution;

        if (st.x > 0.5) {
            float waveEffect = verticalWave(st.y, u_time);
            vec3 peachColor = vec3(1.0, 0.8 + waveEffect, 0.7);
            gl_FragColor = vec4(peachColor, 0.5);
        } else {
            discard;
        }
    }
    `;

    const peachShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_time: { value: 0.0 },
      },
      fragmentShader: fragmentShaderPeach,
      transparent: true,
    });

    const peachPlane = new THREE.Mesh(geometry, peachShaderMaterial);
    peachPlane.position.set(0, 0, 0);
    scene.add(peachPlane);

    // Main pink animation shader with expanded area
    const fragmentShaderPink = `
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

    float wavePattern(float x, float time) {
        return 0.1 * sin(5.0 * (x + time * 0.5));
    }

    void main() {
        vec2 st = gl_FragCoord.xy / u_resolution;
        float middleFade = smoothstep(0.35, 0.65, st.x);

        float dist = length(st - u_mouse);
        float size = 0.5;
        float startDistance = length(st - vec2(0.0, 1.0));
        float waveEffect = wavePattern(st.y, u_time);

        float intensity = smoothstep(startDistance + waveEffect, startDistance - size, dist);

        // vec3 lightPink = vec3(1.0, 0.8, 0.9);
        vec3 lightPurple = vec3(0.95, 0.75, 1.0);
        vec3 darkPurple = vec3(0.7, 0.5, 0.9);
        vec3 purpleGradient = mix(lightPurple, darkPurple, st.y);

        vec3 lightPink = vec3(0.8, 0.6, 0.7);
        float edgeFactor = smoothstep(0.0, 0.5, intensity);
        vec3 color = mix(lightPink, purpleGradient, edgeFactor);

        vec3 baseColor = vec3(1.0, 0.98, 1.0);
        color = mix(baseColor, color, intensity);

        float vignette = smoothstep(0.9, 1.0, length(st - vec2(0.5, 0.5)));
        color = mix(color, vec3(1.0), vignette);

        gl_FragColor = vec4(color, 1.0);
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

    const mainPlanePink = new THREE.Mesh(geometry, shaderMaterialPink);
    mainPlanePink.position.set(0, 0, 0.1);
    scene.add(mainPlanePink);

    targetMousePosition.current.set(0, 0);
    mousePosition.current.copy(targetMousePosition.current);

    const animate = () => {
      shaderMaterialPink.uniforms.u_time.value += 0.01;
      peachShaderMaterial.uniforms.u_time.value += 0.01;

      mousePosition.current.lerp(targetMousePosition.current, 0.1);
      shaderMaterialPink.uniforms.u_mouse.value.copy(mousePosition.current);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event) => {
      targetMousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.left = -1;
      camera.right = 1;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      peachShaderMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      shaderMaterialPink.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
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
