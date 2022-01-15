import * as THREE from 'three';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';

import WakDoo from '../../public/images/wakdoo.png';

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, WakDoo.src);

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial attach="material" map={texture} />
    </mesh>
  );
};

export const Gomem3D = ({
  ...props
}: React.RefAttributes<HTMLCanvasElement>) => {
  return (
    <Canvas {...props}>
      <ambientLight />
      <pointLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Globe position={[0, 0, 0]} />
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
      </EffectComposer>
    </Canvas>
  );
};

export default Gomem3D;
