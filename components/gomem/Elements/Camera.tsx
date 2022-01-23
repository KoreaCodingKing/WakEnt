import { useSpring } from 'framer-motion';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, OrbitControlsProps } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { PlanetKeys } from '../Planets';
import { Box3, Scene, Vector3 } from 'three';

const springOptions: Parameters<typeof useSpring>[1] = {
  duration: 280,
  stiffness: 1000,
};
interface CameraProps {
  planet: PlanetKeys
}

type ExtendedThreeScene = Scene & {
  orbitControls: OrbitControlsProps
}

export const GomemCamera = ({ planet }: CameraProps) => {
  const { scene, camera } = useThree();

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);
  const z = useSpring(0, springOptions);

  const targetSizeX = useSpring(0, springOptions);
  const targetSizeY = useSpring(0, springOptions);
  const targetSizeZ = useSpring(0, springOptions);

  const [onTransition, setOnTransition] = useState<boolean>(false);

  useEffect(() => {
    const object = scene.getObjectByName(planet);

    if (!object) {
      return;
    }

    // Object를 감싸는 Box를 만들어 Box의 가로를 측정합니다.
    const box = new Box3().setFromObject(object);
    const sizeVec = new Vector3();
    box.getSize(sizeVec);

    targetSizeX.set(sizeVec.x);
    targetSizeY.set(sizeVec.y);
    targetSizeZ.set(sizeVec.z);

    // Object의 절대 위치를 구해 x, y, z Animation을 구현합니다.
    const vec = new Vector3();
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
  }, [planet, scene, targetSizeX, targetSizeY, targetSizeZ, x, y, z]);

  useFrame(({ scene, camera }) => {
    if (onTransition) {
      camera.position.copy(
        new Vector3(
          x.get() + targetSizeX.get(),
          y.get() + targetSizeY.get() / 2,
          z.get() + targetSizeZ.get() / 2
        )
      );
      (scene as ExtendedThreeScene).orbitControls.target = new Vector3(x.get(), y.get(), z.get());
    }

    (scene as ExtendedThreeScene).orbitControls.update!();
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
