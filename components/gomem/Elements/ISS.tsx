import { useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { PlanetProps } from './PlanetGroup';

export const ISS = (props: PlanetProps & JSX.IntrinsicElements['mesh']) => {
  const model = useFBX('/models/iss.fbx');

  useFrame(({ clock }) => {
    model.rotation.y += 0.003;
    model.position.y = 0.08 * Math.sin(clock.getElapsedTime());
  });

  return (
    <>
      <primitive {...props} object={model}></primitive>
    </>
  );
};

export default ISS;
