// components/AnimatedBackground.js
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedBackground() {
  const mesh = useRef();

  useFrame(({ mouse }) => {
    mesh.current.material.uniforms.uMouse.value = new THREE.Vector2(mouse.x, mouse.y);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[5, 5, 32, 32]} />
      <shaderMaterial
        attach="material"
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uColorA: { value: new THREE.Color('#ff9a9e') },
          uColorB: { value: new THREE.Color('#fecfef') },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

const vertexShader = `
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 newPosition = position + vec3(uMouse.x * 0.05, uMouse.y * 0.05, 0.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    vec3 color = mix(uColorA, uColorB, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Home() {
  return (
    <Canvas>
      <AnimatedBackground />
    </Canvas>
  );
}
