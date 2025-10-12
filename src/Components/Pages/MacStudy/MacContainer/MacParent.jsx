import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacChild';

const MacParent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 12, position: [0, -10, 150] }}>
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
          ]}
        />
        <ScrollControls pages={10}>
          {' '}
          {/* Increased pages to 6 */}
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default MacParent;
