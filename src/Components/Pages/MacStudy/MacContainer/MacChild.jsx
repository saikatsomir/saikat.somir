import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useCursor } from '@react-three/drei';

// Import images
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';

// Links for each image
const links = [
  'https://www.facebook.com',
  'https://www.linkedin.com',
  'https://www.instagram.com',
  'https://www.youtube.com',
];

const MacContainer = () => {
  const model = useGLTF('./mac.glb');
  const data = useScroll();
  const { gl, scene, camera } = useThree();

  // Refs for interaction
  const screenRef = useRef();
  const matteRef = useRef();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Load textures
  const textures = [
    useTexture(image1),
    useTexture(image2),
    useTexture(image3),
    useTexture(image4),
  ];

  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  useEffect(() => {
    if (meshes.matte) {
      matteRef.current = meshes.matte;
      matteRef.current.material.map = textures[0]; // Default image
      matteRef.current.material.emissiveIntensity = 0;
      matteRef.current.material.metalness = 0;
      matteRef.current.material.roughness = 1;
      matteRef.current.userData.clickable = true; // Mark it as clickable
    }

    if (meshes.screen) {
      screenRef.current = meshes.screen;
    }
  }, []);
  const handleClick = (event) => {
    event.preventDefault(); // Prevent any default behavior
    event.stopPropagation(); // Ensure event is not blocked by other elements

    console.log('🖱 Click detected!');

    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    console.log(
      '📡 Intersected objects:',
      intersects.map((obj) => obj.object.name)
    );

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      console.log('Clicked object:', clickedObject.name);

      if (clickedObject === matteRef.current) {
        console.log('✅ Clicked on matte! Opening:', links[currentIndex]);

        if (currentIndex >= 0 && currentIndex < links.length) {
          window.open(links[currentIndex], '_blank');
        } else {
          console.log('❌ Invalid index:', currentIndex);
        }
      } else {
        console.log('❌ Clicked something else:', clickedObject.name);
      }
    } else {
      console.log('❌ No intersections detected!');
    }
  };
  useEffect(() => {
    const handlePointerDown = (event) => {
      console.log('🖱 Canvas Click Event Fired!'); // Debugging log
      handleClick(event);
    };

    gl.domElement.addEventListener('pointerdown', handlePointerDown, true);
    console.log('✅ Event listener added for clicks!');

    return () => {
      gl.domElement.removeEventListener('pointerdown', handlePointerDown, true);
      console.log('❌ Event listener removed for clicks!');
    };
  }, []);

  useFrame(() => {
    const scrollProgress = data.offset;

    // **1️⃣ Handle Laptop Opening & Closing**
    if (screenRef.current) {
      const rotation = THREE.MathUtils.lerp(
        THREE.MathUtils.degToRad(180), // Fully closed
        THREE.MathUtils.degToRad(80), // Fully open
        Math.min(scrollProgress * 2, 1) // First 50% for opening
      );
      screenRef.current.rotation.x = rotation;
    }

    // **2️⃣ Change Image AFTER Laptop is Fully Open**
    if (scrollProgress > 0.5 && matteRef.current) {
      const index = Math.min(
        Math.floor((scrollProgress - 0.5) * textures.length * 2),
        textures.length - 1
      );
      matteRef.current.material.map = textures[index];
      matteRef.current.material.needsUpdate = true;
      setCurrentIndex(index);
    }
  });

  useCursor(hovered); // Show pointer cursor on hover

  return (
    <group position={[0, -10, 20]}>
      <primitive
        object={model.scene}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
};

export default MacContainer;
