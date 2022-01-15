import * as THREE from 'three';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import WakDoo from '../../public/images/wakdoo.png';
import { MotionValue, useSpring } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, WakDoo.src);

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial attach='material' map={texture} />
    </mesh>
  );
};

interface CameraProps {
  progress: MotionValue<number>
}

const Camera = ({ progress }: CameraProps) => {
  useFrame(({ camera }) => {
    camera.rotation.set(90 * progress.get() * (Math.PI / 180), 0, 0);
  });

  return <></>;
};

interface Gomem3DProps {
  sceneActive: boolean
}

export const Gomem3D = ({
  sceneActive,
  ...props
}: Gomem3DProps & React.RefAttributes<HTMLCanvasElement>) => {
  const progress = useSpring(1, {
    duration: 1000,
  });

  useEffect(() => {
    progress.set(sceneActive ? 0 : 1);
  }, [sceneActive]);

  return (
    <Canvas {...props}>
      <Camera progress={progress}></Camera>
      <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
      <ambientLight intensity={0.05} />
      <pointLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Globe position={[0, 0, 0]} />
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default Gomem3D;
