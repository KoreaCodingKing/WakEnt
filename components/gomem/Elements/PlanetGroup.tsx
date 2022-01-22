import { ThreeEvent } from "@react-three/fiber";
import { ReactElement } from "react";
import { PointerUpdateHandler } from "../Gomem3DUtils";
import { isValidPlanetName, PlanetKeys } from "../Planets";

export interface PlanetProps {
  name: PlanetKeys
}

interface PlanetGroupProps {
  children: ReactElement<PlanetProps>[]
  onPointer?: PointerUpdateHandler
  onClick?: (name: PlanetKeys) => void
}

export const PlanetGroup = ({ children, onPointer, onClick }: PlanetGroupProps) => {
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();

    if (!isValidPlanetName(ev.eventObject.name)) {
      return;
    }

    onClick && onClick(ev.eventObject.name);
  };

  const pointerHandler = (ev: ThreeEvent<PointerEvent>, isOutEvent?: boolean) => {
    if (!onPointer) {
      return;
    }

    ev.stopPropagation();

    const objectDistance = ev.camera.position.distanceTo(ev.object.position);

    if (!isValidPlanetName(ev.eventObject.name)) {
      return;
    }

    onPointer(
      ev.eventObject.name,
      !isOutEvent,
      ev.nativeEvent.x,
      ev.nativeEvent.y,
      objectDistance - ev.distance
    );
  };

  return (
    <>
      {children.map(planet => (
        <planet.type
          {...planet.props}
          key={`planet-${planet.props.name}`}
          onPointerEnter={pointerHandler}
          onPointerMove={pointerHandler}
          onPointerOut={(ev: ThreeEvent<PointerEvent>) => pointerHandler(ev, true)}
          onClick={clickHandler}
        ></planet.type>
      ))}
    </>
  );
};
