export type PlanetKeys = 'isedol' | 'gomem' | 'wakgood' | 'specter'

export const Planets: {
  [key in PlanetKeys]: {
    name: string
    description: string
    isGomemUnit: boolean
    link?: string
  }
} = {
  isedol: {
    name: '이세계 아이돌',
    description:
      '2021년 8월에 혜성같이 등장한 행성. 여섯 생명체가 거주하는 것으로 알려져 있는데, 이들의 특이 사항으로는 노래를 잘한다는 점이 있다.',
    isGomemUnit: false,
    link: '/isedol',
  },
  gomem: {
    name: '고정멤버 시즌 2',
    description: '앙~ 킹아~',
    isGomemUnit: false,
  },
  specter: {
    name: '망령촌',
    description: '고멤이었던 자들의 무덤. 이들은 고멤에 한이 맺혀 망령으로 남아 있다.',
    isGomemUnit: true,
  },
  wakgood: {
    name: '왁물원',
    description:
      '침팬치와 유사한 생명체가 거주한다. 이들은 "자유 게시판"이라는 분지에 배변 활동을 하는 것으로 알려져 있다.',
    link: 'https://cafe.naver.com/steamindiegame',
    isGomemUnit: false,
  },
};

export const PlanetKeysArray = Object.keys(Planets) as PlanetKeys[];

export const isValidPlanetName = (name: string): name is PlanetKeys =>
  (PlanetKeysArray as string[]).includes(name);
