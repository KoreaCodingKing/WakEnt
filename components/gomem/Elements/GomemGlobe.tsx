import { Mesh, TextureLoader } from "three";

import EarthImage from '../../../public/images/earth-day-compressed.jpg';
import CloudImage from '../../../public/images/clouds.png';
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

export const GomemGlobe = (props: JSX.IntrinsicElements['mesh']) => {
  const globeMesh = useRef<Mesh>(null!);
  const cloudsMesh = useRef<Mesh>(null!);

  const texture = useLoader(TextureLoader, EarthImage.src);
  const clouds = useLoader(TextureLoader, CloudImage.src);

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