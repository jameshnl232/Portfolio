"use client";

import * as THREE from "three";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Shapes() {
  return (
    <>
      <group className="">
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.65}
            scale={10}
            blur={1}
            far={10}
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
      position: [-4, 1, 0],
      r: 0.8,
      geometry: new THREE.IcosahedronGeometry(0.5), // Gem
    },
    {
      position: [-8, -3, -8],
      r: 0.7,
      geometry: new THREE.CapsuleGeometry(0.5, 2, 2, 16), // Pill
    },
    {
      position: [0, 1.5, -10],
      r: 0.8,
      geometry: new THREE.DodecahedronGeometry(0.6), // Soccer ball
    },
    {
      position: [6, -3, -5],
      r: 0.8,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    },
    {
      position: [5, 1.8, -4],
      r: 0.6,
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

  // Create refs properly
  const groupRef = useRef(null);
  const object1 = useRef(null);
  const object2 = useRef(null);
  const object3 = useRef(null);
  const object4 = useRef(null);
  const object5 = useRef(null);

  useGSAP(() => {
    if (
      !groupRef.current ||
      !object1.current ||
      !object2.current ||
      !object3.current ||
      !object4.current ||
      !object5.current
    )
      return;

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      pin: true, // pin the trigger element while active

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    scrollTl
      //rotate cans group
      .to(groupRef.current.rotation, { y: Math.PI * 2, ease: "none" }, 0)

      .to(object1.current.position, { y: -14, ease: "none" }, 0);
  });

  return (
    <group ref={groupRef}>
      <group ref={object1}>
        <Geometry {...geometries[0]} materials={materials} />
      </group>
      <group ref={object2}>
        <Geometry {...geometries[1]} materials={materials} />
      </group>
      <group ref={object3}>
        <Geometry {...geometries[2]} materials={materials} />
      </group>
      <group ref={object4}>
        <Geometry {...geometries[3]} materials={materials} />
      </group>
      <group ref={object5}>
        <Geometry {...geometries[4]} materials={materials} />
      </group>
    </group>
  );
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
