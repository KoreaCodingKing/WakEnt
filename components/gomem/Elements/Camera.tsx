import * as THREE from 'three';

import { useSpring } from 'framer-motion';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, OrbitControlsProps } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { PlanetKeys } from '../Planets';

const springOptions: Parameters<typeof useSpring>[1] = {
  duration: 280,
  stiffness: 1000,
};
interface CameraProps {
  planet: PlanetKeys
}

export const GomemCamera = ({ planet }: CameraProps) => {
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
