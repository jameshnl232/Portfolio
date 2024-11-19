"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";

import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  },
);

export default function ViewCanvas({}: Props) {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          zIndex: 1,
          pointerEvents: "auto",
        }}
        camera={{
          position: [0, 0, 10],
          fov: 30,
        }}
        shadows={true}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[1, 1, 1]} />

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
