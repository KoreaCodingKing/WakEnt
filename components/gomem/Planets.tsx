import { planetUnitID } from "../../structs/member";

export type PlanetKeys = 'isedol' | 'gomem' | 'wakgood' | 'contents' | 'specter';

export const Planets: {
  [key in PlanetKeys]: {
    name: string
    description: string
    planet?: planetUnitID
    link?: string,
    youtube?: {
      name: string
      link: string
    }[]
  }
} = {
  isedol: {
    name: '이세계 아이돌',
    description:
      '2021년 8월에 혜성같이 등장한 행성. 여섯 생명체가 거주하는 것으로 알려져 있는데, 이들의 특이 사항으로는 노래를 잘한다는 점이 있다.',
    link: '/isedol',
  },
  gomem: {
    name: '고정멤버 시즌 3',
    description: '20년 부터 시작된 합방 전용 멤버들의 거주지. 현재 3기 멤버가 거주중이다.',
    planet: 'gomem',
    youtube: [
      {
        name: '왁타버스 밴드 악당뮤지션',
        link: 'https://www.youtube.com/watch?v=5TSr1PoiKC0'
      }
    ]
  },
  contents: {
    name: '고멤 컨텐츠',
    description: '고정멤버들의 다양한 컨텐츠를 모은 곳이다.',
    planet: 'contents',
    youtube: []
  },
  specter: {
    name: '망령촌',
    description: '고멤이었던 자들의 무덤. 이들은 고멤에 한이 맺혀 망령으로 남아 있다.',
    planet: 'specter',
    youtube: []
  },
  // coffin: {
  //   name: '관',
  //   description: '왁타버스를 떠난 그들....',
  //   planet: 'coffin',
  //   youtube: []
  // },
  wakgood: {
    name: '왁물원',
    description:
      '침팬치와 유사한 생명체가 거주한다. 이들은 "자유 게시판"이라는 분지에 배변 활동을 하는 것으로 알려져 있다.',
    link: 'https://cafe.naver.com/steamindiegame',
  },
};

export const PlanetKeysArray = Object.keys(Planets) as PlanetKeys[];

export const isValidPlanetName = (name: string): name is PlanetKeys =>
  (PlanetKeysArray as string[]).includes(name);
