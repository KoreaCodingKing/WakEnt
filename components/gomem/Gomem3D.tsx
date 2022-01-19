import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Canvas,
  ThreeEvent,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import WakDooImage from '../../public/images/wakdoo.png';
import EarthImage from '../../public/images/earth-day-compressed.jpg';
import CloudImage from '../../public/images/clouds.png';
import IsedolImage from '../../public/images/logo_isedol.png';

import { MotionValue, useSpring } from 'framer-motion';
import {
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';

import { motion } from 'framer-motion/three';
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
  const globeMesh = useRef<THREE.Mesh>(null!);
  const cloudsMesh = useRef<THREE.Mesh>(null!);

  const texture = useLoader(THREE.TextureLoader, EarthImage.src);
  const clouds = useLoader(THREE.TextureLoader, CloudImage.src);

  useFrame(() => {
    globeMesh.current.rotation.y += 0.0003;
    cloudsMesh.current.rotation.y += 0.0005;
  });

  return (
    <mesh {...props} ref={globeMesh} castShadow>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhysicalMaterial attach='material' map={texture} />
      <mesh {...props} ref={cloudsMesh} castShadow>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshPhysicalMaterial attach='material' map={clouds} transparent />
      </mesh>
    </mesh>
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
  planet: GomemPlanetKeys
  progress: MotionValue<number>
}

const springOptions = {
  duration: 280,
};

const Camera = ({ planet }: CameraProps) => {
  const { scene, camera } = useThree();

  const s = (scene as unknown) as THREE.Scene & {
    orbitControls: OrbitControlsProps
  };

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);
  const z = useSpring(0, springOptions);

  const targetSizeX = useSpring(0, springOptions);
  const targetSizeY = useSpring(0, springOptions);
  const targetSizeZ = useSpring(0, springOptions);

  const [onTransition, setOnTransition] = useState<boolean>(false);
  // const [targetSizeVector, setTargetSizeVector] = useState<THREE.Vector3>(
  //   new THREE.Vector3()
  // );

  useEffect(() => {
    const object = scene.getObjectByName(planet);

    if (!object) {
      return;
    }

    // Object를 감싸는 Box를 만들어 Box의 가로를 측정합니다.
    const box = new THREE.Box3().setFromObject(object);
    const sizeVec = new THREE.Vector3();
    box.getSize(sizeVec);

    // setTargetSizeVector(sizeVec);

    targetSizeX.set(sizeVec.x);
    targetSizeY.set(sizeVec.y);
    targetSizeZ.set(sizeVec.z);

    // Object의 절대 위치를 구해 x, y, z Animation을 구현합니다.
    const vec = new THREE.Vector3();
    object.getWorldPosition(vec);

    x.set(vec.x);
    y.set(vec.y);
    z.set(vec.z);

    setOnTransition(true);

    const timeout = setTimeout(() => {
      setOnTransition(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [planet]);

  useFrame(({ camera }) => {
    if (onTransition) {
      camera.position.copy(
        new THREE.Vector3(
          x.get() + targetSizeX.get(),
          y.get() + targetSizeY.get() / 2,
          z.get() + targetSizeZ.get() / 2
        )
      );
      s.orbitControls.target = new THREE.Vector3(x.get(), y.get(), z.get());
    }

    s.orbitControls.update!();
  });

  return (
    <>
      <OrbitControls
        attach='orbitControls'
        camera={camera}
        enableDamping
        enableZoom={false}
        enablePan={false}
      ></OrbitControls>
    </>
  );
};

export type GomemPlanetKeys = 'isedol' | 'gomem' | 'wakgood'

export type PointerUpdateHandler = (
  scope: GomemPlanetKeys | undefined,
  active: boolean,
  x: number,
  y: number,
  d: number
) => void

interface Gomem3DProps {
  sceneActive: boolean
  planet: GomemPlanetKeys
  mainPointerUpdate: PointerUpdateHandler
  otherPointerUpdate: PointerUpdateHandler
}

const usePointer = (onUpdate: PointerUpdateHandler) => {
  const pointerEnter = (
    ev: ThreeEvent<PointerEvent>,
    scope?: GomemPlanetKeys
  ) => {
    ev.stopPropagation();

    const objectDistance = ev.camera.position.distanceTo(ev.object.position);

    onUpdate(
      scope,
      true,
      ev.nativeEvent.x,
      ev.nativeEvent.y,
      objectDistance - ev.distance
    );
  };

  const pointerMove = (
    ev: ThreeEvent<PointerEvent>,
    scope?: GomemPlanetKeys
  ) => {
    ev.stopPropagation();

    const objectDistance = ev.camera.position.distanceTo(ev.object.position);

    onUpdate(
      scope,
      true,
      ev.nativeEvent.x,
      ev.nativeEvent.y,
      objectDistance - ev.distance
    );
  };

  const pointerOut = (
    ev: ThreeEvent<PointerEvent>,
    scope?: GomemPlanetKeys
  ) => {
    ev.stopPropagation();

    const objectDistance = ev.camera.position.distanceTo(ev.object.position);

    onUpdate(
      scope,
      false,
      ev.nativeEvent.x,
      ev.nativeEvent.y,
      objectDistance - ev.distance
    );
  };

  return [pointerEnter, pointerMove, pointerOut];
};

export const Gomem3D = ({
  sceneActive,
  planet,
  mainPointerUpdate,
  otherPointerUpdate,
  ...props
}: Gomem3DProps & React.RefAttributes<HTMLCanvasElement>) => {
  const progress = useSpring(1, {
    duration: 1000,
  });

  const router = useRouter();

  useEffect(() => {
    progress.set(sceneActive ? 0 : 1);
  }, [sceneActive]);

  const [planetPointerEnter, planetPointerMove, planetPointerOut] = usePointer(
    otherPointerUpdate
  );
  const [pointerEnter, pointerMove, pointerOut] = usePointer(mainPointerUpdate);

  return (
    <Canvas {...props}>
      <Camera progress={progress} planet={planet}></Camera>
      <ambientLight intensity={0.05} />
      <pointLight position={[0, 0, 300]} />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <Suspense fallback={null}>
        <EarthGlobe
          name='gomem'
          position={[0, 0, 0]}
          onPointerEnter={pointerEnter}
          onPointerMove={pointerMove}
          onPointerOut={pointerOut}
        />
        <IsedolGlobe
          name='isedol'
          position={[0, 0, -30]}
          onPointerEnter={ev => planetPointerEnter(ev, 'isedol')}
          onPointerMove={ev => planetPointerMove(ev, 'isedol')}
          onPointerOut={ev => planetPointerOut(ev, 'isedol')}
          onClick={ev => {
            ev.stopPropagation();
            router.push('/isedol/');
          }}
        />
        <Sun
          name='wakgood'
          position={[0, 0, 100]}
          onPointerEnter={ev => planetPointerEnter(ev, 'wakgood')}
          onPointerMove={ev => planetPointerMove(ev, 'wakgood')}
          onPointerOut={ev => planetPointerOut(ev, 'wakgood')}
          onClick={ev => {
            ev.stopPropagation();
            router.push('https://cafe.naver.com/steamindiegame');
          }}
        ></Sun>
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.4}
          height={300}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Gomem3D;
