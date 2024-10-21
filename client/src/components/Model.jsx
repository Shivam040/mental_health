import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

// Preload the GLB model
useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef(null); // Keep the reference for the group
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  ); // Load GLB file
  const { actions } = useAnimations(animations, scene); // Handle animations

  useEffect(() => {
    // Make sure "Experiment" action plays and is paused initially
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
      actions["Experiment"].paused = false; // Start the animation
    }
  }, [actions]);

  useFrame(() => {
    // Continuously move the animation forward
    if (actions && actions["Experiment"]) {
      actions["Experiment"].time += 0.01; // Increment the animation time for continuous movement
    }
  });

  return (
    <>
      <group ref={group}>
        <primitive object={scene} scale={[1.5, 1.5, 2]} position={[0, -1, 0]} />{" "}
        {/* Render the loaded 3D model */}
      </group>
      {/* Disable zooming */}
    </>
  );
}
