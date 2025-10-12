import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Circle from './Circle/Circle';

export const CaseStudy = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 30 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Circle />
        {/* <EffectComposer>
        <Bloom
          // mipmapBlur={false}
          intensity={7.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer> */}
      </Canvas>
    </div>
  );
};
