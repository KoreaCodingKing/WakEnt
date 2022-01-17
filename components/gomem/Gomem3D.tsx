import * as THREE from 'three';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import WakDooImage from '../../public/images/wakdoo.png';
import EarthImage from '../../public/images/earth-day.jpg';
import IsedolImage from '../../public/images/logo_isedol.png';

import { MotionValue, useSpring } from 'framer-motion';
import { OrbitControls, Stars } from '@react-three/drei';

import { motion } from "framer-motion/three";
import GomemLoading from './GomemLoading';
import { useRouter } from 'next/router';

const IsedolGlobe = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, IsedolImage.src);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    // @ts-expect-error 타입 찾기 귀찮
    <motion.mesh {...props} ref={mesh} castShadow whileHover={{ scale: 1.1 }}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshToonMaterial attach='material' map={texture} />
    </motion.mesh>
  );
};

const EarthGlobe = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, EarthImage.src);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    // @ts-expect-error 타입 찾기 귀찮
    <motion.mesh {...props} ref={mesh} castShadow whileHover={{ scale: 1.1 }}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshToonMaterial attach='material' map={texture} />
    </motion.mesh>
  );
};

const Sun = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const texture = useLoader(THREE.TextureLoader, WakDooImage.src);

  useFrame(() => {
    mesh.current.rotation.y += 0.0005;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[30, 32, 32]} />
      <meshToonMaterial attach='material' map={texture} />
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

  const router = useRouter();

  useEffect(() => {
    progress.set(sceneActive ? 0 : 1);
  }, [sceneActive]);

  return (
    <Canvas {...props}>
      <Camera progress={progress}></Camera>
      <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
      {/* <ambientLight intensity={0.05} /> */}
      <pointLight position={[0, 0, 300]} />
      <Stars radius={250} depth={50} count={5000} factor={4} saturation={0} fade />
      <Suspense fallback={<GomemLoading></GomemLoading>}>
        <EarthGlobe position={[0, 0, 0]} />
        <IsedolGlobe position={[0, 0, -30]} onClick={() => router.push('/isedol/')}/>
        <Sun position={[0, 0, 100]}></Sun>
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0} intensity={0.2} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default Gomem3D;
