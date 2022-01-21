import React, { Suspense } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { Stars } from '@react-three/drei';

import { PointerUpdateHandler, usePointer } from './Gomem3DUtils';
import { PlanetKeys } from './Planets';

import { GomemCamera } from './Elements/Camera';
import { Sun } from './Elements/Sun';
import { GomemGlobe } from './Elements/GomemGlobe';
import { IsedolGlobe } from './Elements/IsedolGlobe';
import SpecterPlanet from './Elements/Specter';

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
  const [planetPointerEnter, planetPointerMove, planetPointerOut] = usePointer(
    onPlanetHover
  );

  const localPlanetClickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();

    onPlanetClick && onPlanetClick(ev.object.name as PlanetKeys);
  };

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
        <GomemGlobe
          name='gomem'
          position={[0, 0, 0]}
          onPointerEnter={ev => planetPointerEnter(ev, 'gomem')}
          onPointerMove={ev => planetPointerMove(ev, 'gomem')}
          onPointerOut={ev => planetPointerOut(ev, 'gomem')}
          onClick={localPlanetClickHandler}
        />
        <SpecterPlanet
          name='specter'
          position={[3, 0, -3]}
          scale={0.3}
          onPointerEnter={ev => planetPointerEnter(ev, 'specter')}
          onPointerMove={ev => planetPointerMove(ev, 'specter')}
          onPointerOut={ev => planetPointerOut(ev, 'specter')}
          onClick={localPlanetClickHandler}
        />
        <IsedolGlobe
          name='isedol'
          position={[80, 0, 80]}
          onPointerEnter={ev => planetPointerEnter(ev, 'isedol')}
          onPointerMove={ev => planetPointerMove(ev, 'isedol')}
          onPointerOut={ev => planetPointerOut(ev, 'isedol')}
          onClick={localPlanetClickHandler}
        />
        <Sun
          name='wakgood'
          position={[0, 0, 80]}
          onPointerEnter={ev => planetPointerEnter(ev, 'wakgood')}
          onPointerMove={ev => planetPointerMove(ev, 'wakgood')}
          onPointerOut={ev => planetPointerOut(ev, 'wakgood')}
          onClick={localPlanetClickHandler}
        ></Sun>
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
