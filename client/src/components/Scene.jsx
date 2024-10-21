import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  useProgress,
  Html,
  ScrollControls,
  OrbitControls,
} from "@react-three/drei";
import Model from "./Model";

// Loader component for loading progress
function Loader() {
  const { progress } = useProgress(); // Use progress for the loading percentage
  return <Html center>{progress.toFixed(1)} % loaded</Html>; // Display loading progress
}

// Main Scene component with OrbitControls
export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]} // Dynamic pixel ratio for better quality
      className="relative"
      style={{ height: "100vh", width: "  100vw" }} // Ensure the canvas takes full screen space
    >
      {/* Add a directional light to the scene */}
      <directionalLight position={[-5, -5, 5]} intensity={4} />

      {/* Add OrbitControls for camera interaction */}
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />

      {/* Suspense for lazy loading the 3D model, with a fallback loader */}
      <Suspense fallback={<Loader />}>
        {/* ScrollControls for 3D scene interaction with scroll-based control */}
        <ScrollControls damping={0.1} pages={3}>
          <Model /> {/* Render the 3D model inside the canvas */}
          <OrbitControls enableZoom={false} /> {/* Disable zooming */}
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
