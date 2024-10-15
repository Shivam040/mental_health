import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
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
  const scroll = useScroll(); // Scroll hook to manage scroll-based animation

  useEffect(() => {
    // Make sure "Experiment" action plays and remains paused initially
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
      actions["Experiment"].paused = true; // Paused by default
    }
  }, [actions]);

  useFrame(() => {
    // Update the animation based on the scroll offset
    if (actions && actions["Experiment"]) {
      actions["Experiment"].time =
        actions["Experiment"].getClip().duration * scroll.offset; // Control animation time
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} /> {/* Render the loaded 3D model */}
    </group>
  );
}
