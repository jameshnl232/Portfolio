/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import {

  useGLTF,
  useAnimations,
  ContactShadows,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Group, PointLight } from "three";
import * as THREE from "three";
import dynamic from "next/dynamic";

useGLTF.preload("/crystal_spinner.glb");

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  },
);

export default function CrystalSpinner() {
  return (
    <div className="relative z-[-1] h-full w-full">
      <Canvas
        className="z-[10]"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 18], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

function Lighting() {
  return (
    <>
      {/* Main ambient light for overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Key light - main illumination from the front-right */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
      />

      {/* Fill light - softer light from the left */}
      <spotLight
        position={[-10, 5, -10]}
        angle={0.25}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Rim light - highlights from behind */}
      <spotLight
        position={[0, 8, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />

      {/* Additional point lights for crystal sparkle effect */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#e1e1ff" />

      {/* Environment lighting */}
      <Environment preset="studio" background={false}>
        <Lightformer
          position={[10, 5, 0]}
          scale={[10, 10, 1]}
          intensity={4}
          color="#ffffff"
        />
        <Lightformer
          position={[-10, 5, 0]}
          scale={[10, 10, 1]}
          intensity={2}
          color="#e1e1ff"
        />
      </Environment>
    </>
  );
}

function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/crystal_spinner.glb",
  );
  const { actions, clips } = useAnimations(animations, scene);
  

  // Animation parameters
  const rotationSpeed = 0.005;
  const floatAmplitude = 0.5;
  const floatFrequency = 0.5;

  // Enable shadows for the model
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Continuous rotation
    group.current.rotation.y += rotationSpeed;

    // Floating motion using sin wave
    const time = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(time * floatFrequency) * floatAmplitude;

    // Tilt based on mouse position
    const { mouse } = state;
    group.current.rotation.x = mouse.y * 0.5;
    group.current.rotation.z = -mouse.x * 0.5;
  });

  // Play any animations from the GLB file if they exist
  useEffect(() => {
    if (clips.length) {
      const action = actions[clips[0].name];
      if (action) {
        action.play();
      }
    }
  }, [actions, clips]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <Lighting />
      <Model />

      {/* Contact shadows for grounding */}
      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.65}
        scale={40}
        blur={2}
        far={9}
      />
    </>
  );
}
