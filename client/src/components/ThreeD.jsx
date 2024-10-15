import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Sphere component with glow effect and rotation
const GlowingSphere = () => {
  const meshRef = useRef();

  // Use frame hook to rotate the sphere on every frame
  useFrame(() => {
    if (meshRef.current) {
      // Rotate the sphere diagonally and horizontally

      meshRef.current.rotation.x += 0.01; // Diagonal rotation
      meshRef.current.rotation.y += 0.01; // Horizontal rotation
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 3]} castShadow>
      {/* Create a sphere with geometry */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* Glowing material */}
      <meshStandardMaterial
        emissive={"#028090"}
        emissiveIntensity={1.5}
        color="#F0F3BD"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

const ThreeD = () => {
  return (
    <Canvas style={{ height: "600px", width: "600px" }} shadows>
      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Glowing rotating sphere */}
      <GlowingSphere />

      {/* Postprocessing effects */}
      <EffectComposer>
        {/* Bloom effect */}
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={1.5}
        />
      </EffectComposer>

      {/* Orbit Controls to move the camera */}
      <OrbitControls enableZoom={true} enablePan={true} />
    </Canvas>
  );
};

export default ThreeD;
