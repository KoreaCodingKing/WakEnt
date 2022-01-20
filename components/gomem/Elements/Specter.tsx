import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const SpecterPlanet = (props: JSX.IntrinsicElements['mesh']) => {
  const model = useGLTF('/models/grave.glb');

  useFrame(({ clock }) => {
    model.scene.rotation.y += 0.003;
    model.scene.position.y = 0.08 * Math.sin(clock.getElapsedTime());
  });

  return (
    <>
      <primitive {...props} object={model.scene}></primitive>
    </>
  );
};

export default SpecterPlanet;
