import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { Stars } from '@react-three/drei';

import { PointerUpdateHandler } from './Gomem3DUtils';
import { PlanetKeys } from './Planets';

import { GomemCamera } from './Elements/Camera';
import { Sun } from './Elements/Sun';
import { GomemGlobe } from './Elements/GomemGlobe';
import { IsedolGlobe } from './Elements/IsedolGlobe';
import SpecterPlanet from './Elements/Specter';
import { PlanetGroup } from './Elements/PlanetGroup';

interface Gomem3DProps {
  planet: PlanetKeys
  onPlanetHover: PointerUpdateHandler
  onPlanetClick?: (name: PlanetKeys) => void
}

export const Gomem3D = ({
  planet,
  onPlanetClick,
  onPlanetHover,
  ...props
}: Gomem3DProps & React.RefAttributes<HTMLCanvasElement>) => {
  return (
    <Canvas {...props}>
      <GomemCamera planet={planet}></GomemCamera>
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
        <PlanetGroup onPointer={onPlanetHover} onClick={onPlanetClick}>
          <GomemGlobe name='gomem' position={[0, 0, 0]} />
          <SpecterPlanet name='specter' position={[3, 0, -3]} scale={0.3} />
          <IsedolGlobe name='isedol' position={[80, 0, 80]} />
          <Sun name='wakgood' position={[0, 0, 80]}></Sun>
        </PlanetGroup>
      </Suspense>
      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.4}
            height={300}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Gomem3D;
