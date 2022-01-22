import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";

import IsedolImage from '../../../public/images/logo_isedol.png';
import { PlanetProps } from "./PlanetGroup";

export const IsedolGlobe = (props: PlanetProps & JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, IsedolImage.src);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh {...props} ref={mesh} castShadow>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshToonMaterial attach='material' map={texture} />
    </mesh>
  );
};