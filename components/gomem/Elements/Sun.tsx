import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, Mesh } from "three";

import WakDooImage from '../../../public/images/wakdoo.png';
import { PlanetProps } from "./PlanetGroup";

export const Sun = (props: PlanetProps & JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<Mesh>(null!);

  const texture = useLoader(TextureLoader, WakDooImage.src);

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
