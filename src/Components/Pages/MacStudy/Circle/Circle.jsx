import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Circle = () => {
  const textUrl = useTexture('./image.png');
  const cly = useRef(null);
  useFrame((state, delta) => {
    cly.current.rotation.y += delta;
  });
  return (
    <mesh ref={cly} rotation={[0, 1.4, 0.4]}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={textUrl} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Circle;
