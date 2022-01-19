import { ThreeEvent } from "@react-three/fiber";
import { PlanetKeys } from "./Planets";

export type PointerUpdateHandler = (
  scope: PlanetKeys | undefined,
  active: boolean,
  x: number,
  y: number,
  d: number
) => void

export const usePointer = (onUpdate: PointerUpdateHandler) => {
  const pointerEnter = (
    ev: ThreeEvent<PointerEvent>,
    scope?: PlanetKeys
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
    scope?: PlanetKeys
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
    scope?: PlanetKeys
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