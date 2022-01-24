import { PlanetKeys } from './Planets';

export type PointerUpdateHandler = (
  scope: PlanetKeys | undefined,
  active: boolean,
  x: number,
  y: number,
  d: number
) => void
