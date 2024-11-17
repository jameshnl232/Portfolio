"use client";

import * as THREE from "three";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Shapes() {


  return (
    <>
      <group className="">
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={20}
            blur={1}
            far={5}
          />
          <Environment preset="studio" />
        </Suspense>
      </group>
    </>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [-1, -1, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(0.5), // Gem
    },
    {
      position: [-3, -0.75, -2],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
    },
    {
      position: [-3, 1.5, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(0.6), // Soccer ball
    },
    {
      position: [4, -1.4, -5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    },
    {
      position: [4, 1.8, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1), // Diamond
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef} className="">
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}
