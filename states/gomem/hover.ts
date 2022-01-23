import { atom } from "recoil";
import { PlanetKeys } from "../../components/gomem/Planets";

interface GomemHoverState {
  hover: boolean
  x: number
  y: number
  d: number
  planet: PlanetKeys | null
}

export const gomemHoverState = atom<GomemHoverState>({
  key: 'gomemHoverState',
  default: {
    hover: false,
    x: 0,
    y: 0,
    d: 1,
    planet: null
  }
});