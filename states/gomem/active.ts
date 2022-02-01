import { atom, DefaultValue, selector } from 'recoil';
import { PlanetKeys, PlanetKeysArray } from '../../components/gomem/Planets';

interface GomemActiveState {
  detail: boolean
  planet: PlanetKeys
}

export const gomemActiveIndexState = atom<number>({
  key: 'gomemActiveIndexState',
  default: 1,
});

export const gomemActiveOtherState = atom<Omit<GomemActiveState, 'planet'>>({
  key: 'gomemActiveOtherState',
  default: {
    detail: false,
  },
});

export const gomemActiveState = selector<GomemActiveState>({
  key: 'gomemActiveState',
  get: ({ get }) => {
    const index = get(gomemActiveIndexState);
    const other = get(gomemActiveOtherState);

    return {
      planet: PlanetKeysArray[index],
      ...other,
    };
  },
  set: ({ set }, value) => {
    if (!(value instanceof DefaultValue)) {
      set(gomemActiveIndexState, PlanetKeysArray.indexOf(value.planet));
      set(gomemActiveOtherState, {
        detail: value.detail,
      });
    }
  },
});
