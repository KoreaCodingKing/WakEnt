export interface CharacterModel {
  type: string
  image: string
}

export interface SocialLinks {
  name: string
  icon?: string
  link: string
}

export interface BasicMember {
  name: {
    en: string
    ko: string
  }
  image: string
  links: SocialLinks[]
}

export interface GomemMember extends BasicMember {
  description: string
}

export interface IsedolMember extends BasicMember {
  signNameImage: string
  signImage: string
  color: string
  backgroundColor: string
  links: SocialLinks[]
  metadata: {
    color: string
    birth: string
    height: number
    blood: string
    mbti: string
    fandom: string
  }
  modelImages: CharacterModel[]
}

export type IsedolMemberID =
  | 'ine'
  | 'jingburger'
  | 'lilpa'
  | 'jururu'
  | 'gosegu'
  | 'viichan'

export type GomemMemberID =
  | 'Dandap'
  | 'CallyCarly'
  | 'Wakpago'
  | 'BusinessKim'
  | 'GwakChoonSik'
  | 'GwonMin'
  | 'DrDopamine'
  | 'FriedShrimp'
  | 'MitsuneHaku'
  | 'HaeruSeok'
  | 'DokgoHyeji'
  | 'KimchiMandoo'
  | 'SecretGirl'
  | 'DeokSuLee'
  | 'PoongSin'
  | 'NegativePerson'
  | 'HikiKing'
  | 'Sophia'
  | 'Roentgenium'

export type WakMemberID = 'wakgood'

export type WaktaverseMemberID = IsedolMemberID | GomemMemberID | WakMemberID

export const enum GomemUnit {
  Specter = 'specter',
  Gomem = 'gomem',
  Science = 'science'
}

export type GomemUnitID = 'specter' | 'gomem' | 'science'

export interface GomemUnitMetadata {
  name: string
  description: string
  members: GomemMemberID[]
}

export const GomemUnits: Record<GomemUnitID, GomemUnitMetadata> = {
  [GomemUnit.Specter]: {
    name: '망령촌',
    description: '고멤이었던 자들의 무덤. 이들은 고멤에 한이 맺혀 망령으로 남아 있다.',
    members: ['Dandap', 'CallyCarly', 'Wakpago', 'BusinessKim', 'GwakChoonSik', 'GwonMin'],
  },
  [GomemUnit.Gomem]: {
    name: '고멤 시즌 2',
    description: '고정 멤버 시즌 2',
    members: []
  },
  [GomemUnit.Science]: {
    name: '과학 패밀리',
    description: '왁타버스내 과학자가 모인 패밀리. 원래 한 로봇이 더 있었으나 망령의 길을 걷게 되었다.',
    members: ['DrDopamine', 'FriedShrimp', 'MitsuneHaku']
  }
};

export const GomemSeason2Members: Record<GomemMemberID, GomemMember> = {
  Dandap: {
    name: {
      en: 'Dandap',
      ko: '단답벌레',
    },
    description: '단답.',
    image: '/images/model/gomem/model_Dandap.png',
    links: [],
  },
  CallyCarly: {
    name: {
      en: 'Cally Carly Davidson',
      ko: '캘리칼리 데이비슨',
    },
    description: '캘리칼리.',
    image: '',
    links: [],
  },
  Wakpago: {
    name: {
      en: 'Wakpago',
      ko: '왁파고',
    },
    description: '왁파고.',
    image: '',
    links: [],
  },
  BusinessKim: {
    name: {
      en: 'Business Kim',
      ko: '비즈니스 킴',
    },
    description: '비킴.',
    image: '',
    links: [],
  },
  GwakChoonSik: {
    name: {
      en: 'Gwak Choon Sik',
      ko: '곽춘식',
    },
    description: '춘식.',
    image: '',
    links: [],
  },
  GwonMin: {
    name: {
      en: 'Gwon Min',
      ko: '권민',
    },
    description: '권민.',
    image: '',
    links: [],
  },
  DrDopamine: {
    name: {
      en: 'DR. Dopamine',
      ko: '도파민 박사',
    },
    description: '도파민.',
    image: '',
    links: [],
  },
  FriedShrimp: {
    name: {
      en: 'Fried Shrimp',
      ko: '새우튀김',
    },
    description: '새우튀김.',
    image: '',
    links: [],
  },
  MitsuneHaku: {
    name: {
      en: 'Mitsune Haku',
      ko: '미츠네 하쿠',
    },
    description: '하쿠.',
    image: '',
    links: [],
  },
  HaeruSeok: {
    name: {
      en: 'HaeruSeok',
      ko: '해루석',
    },
    description: '루석.',
    image: '',
    links: [],
  },
  DokgoHyeji: {
    name: {
      en: 'Dokgo HyeJi',
      ko: '독고혜지',
    },
    description: '혜지.',
    image: '',
    links: [],
  },
  KimchiMandoo: {
    name: {
      en: 'KimchiMandooBEONYeonTaekSASEUGA',
      ko: '김치만두번영택사스가',
    },
    description: '김치만두.',
    image: '',
    links: [],
  },
  SecretGirl: {
    name: {
      en: 'Secret Girl',
      ko: '비밀소녀',
    },
    description: '비소.',
    image: '',
    links: [],
  },
  DeokSuLee: {
    name: {
      en: 'Grandpa DeokSu Lee',
      ko: '이덕수할아바이',
    },
    description: '하라바이.',
    image: '',
    links: [],
  },
  PoongSin: {
    name: {
      en: 'Poong Sin',
      ko: '풍신',
    },
    description: '풍신.',
    image: '',
    links: [],
  },
  NegativePerson: {
    name: {
      en: 'Negative person',
      ko: '부정형 인간',
    },
    description: '부정형.',
    image: '',
    links: [],
  },
  HikiKing: {
    name: {
      en: 'Hiki king',
      ko: '히키킹',
    },
    description: '히키킹.',
    image: '',
    links: [],
  },
  Sophia: {
    name: {
      en: 'Sophia',
      ko: '소피아',
    },
    description: '소피아.',
    image: '',
    links: [],
  },
  Roentgenium: {
    name: {
      en: 'Roentgenium',
      ko: '뢴트게늄',
    },
    description: '뢴트.',
    image: '',
    links: [],
  },
};

export const IsedolMembers: Record<IsedolMemberID, IsedolMember> = {
  ine: {
    name: {
      en: 'INE',
      ko: '아이네',
    },
    image: '/images/member/ine.jpg',
    signNameImage: '/images/member/text/ine.svg',
    signImage: '/images/sign/ine.png',
    color: '#AB6FE3',
    backgroundColor: '#210C28',
    metadata: {
      color: 'Purple',
      birth: '1994',
      height: 158,
      blood: 'B',
      mbti: 'INFP',
      fandom: '둘기',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://www.twitch.tv/vo_ine',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCroM00J2ahCN6k-0-oAiDxg',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/ine_hamine',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/ine/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/isedol/ine/pose_2.png',
      },
      {
        type: 'pose3',
        image: '/images/model/isedol/isedol/ine/pose_3.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/ine/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/ine/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/ine/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/ine/right.png',
      },
    ],
  },
  jingburger: {
    name: {
      en: 'Jingburger',
      ko: '징버거',
    },
    image: '/images/member/jingburger.jpg',
    signNameImage: '/images/member/text/jingburger.svg',
    signImage: '/images/sign/jingburger.png',
    color: '#F9E467',
    backgroundColor: '#1A1506',
    metadata: {
      color: 'Yellow',
      birth: '1995.10.08',
      height: 161.9,
      blood: 'B',
      mbti: 'INFJ',
      fandom: '똥강아지',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://www.twitch.tv/jingburger',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/c/%EC%A7%95%EB%B2%84%EA%B1%B0',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/jing_burger/',
      },
      {
        name: 'Twitter',
        icon: 'twitter',
        link: 'https://twitter.com/jingbuger',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/jingburger/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/isedol/jingburger/pose_2.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/jingburger/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/jingburger/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/jingburger/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/jingburger/right.png',
      },
    ],
  },
  lilpa: {
    name: {
      en: 'LILPA',
      ko: '릴파',
    },
    image: '/images/member/lilpa.jpg',
    signNameImage: '/images/member/text/lilpa.svg',
    signImage: '/images/sign/lilpa.png',
    color: '#221638',
    backgroundColor: '#0E0A24',
    metadata: {
      color: 'Indigo',
      birth: '1996.03.09',
      height: 164,
      blood: 'O',
      mbti: 'ENFP',
      fandom: '박쥐단',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://www.twitch.tv/lilpaaaaaa',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://youtube.com/channel/UC-oCJP9t47v7-DmsnmXV38Q',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/lilpaaaaaa_/',
      },
      {
        name: 'SoundCloud',
        icon: 'soundcloud',
        link: 'https://soundcloud.com/bhdred9q6qtd',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/lilpa/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/lilpa/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/lilpa/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/lilpa/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/lilpa/right.png',
      },
    ],
  },
  jururu: {
    name: {
      en: 'Jururu',
      ko: '주르르',
    },
    image: '/images/member/jururu.jpg',
    signNameImage: '/images/member/text/jururu.svg',
    signImage: '/images/sign/jururu.png',
    color: '#A7025A',
    backgroundColor: '#1B0A1C',
    metadata: {
      color: 'Violet',
      birth: '1997.06.10',
      height: 162,
      blood: 'O',
      mbti: 'ENFP, INTP',
      fandom: '주폭도',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://youtube.com/channel/UC-oCJP9t47v7-DmsnmXV38Q',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCTifMx1ONpElK5x6B4ng8eg',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/ju_ruru_/',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/jururu/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/jururu/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/jururu/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/jururu/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/jururu/right.png',
      },
    ],
  },
  gosegu: {
    name: {
      en: 'GOSEGU',
      ko: '고세구',
    },
    image: '/images/member/gosegu.jpg',
    signNameImage: '/images/member/text/gosegu.svg',
    signImage: '/images/sign/gosegu.png',
    color: '#618EC9',
    backgroundColor: '#05171D',
    metadata: {
      color: 'Blue',
      birth: '1998',
      height: 30000,
      blood: 'B',
      mbti: 'ENTJ',
      fandom: '세균단',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://www.twitch.tv/gosegugosegu',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCV9WL7sW6_KjanYkUUaIDfQ',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/gosegu_official',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/gosegu/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/isedol/gosegu/pose_2.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/gosegu/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/gosegu/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/gosegu/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/gosegu/right.png',
      },
    ],
  },
  viichan: {
    name: {
      en: 'Viichan',
      ko: '비챤',
    },
    image: '/images/member/viichan.jpg',
    signNameImage: '/images/member/text/viichan.svg',
    signImage: '/images/sign/viichan.png',
    color: '#3B6510',
    backgroundColor: '#081607',
    metadata: {
      color: 'Green',
      birth: '2000.01.16',
      height: 160,
      blood: 'B',
      mbti: 'INFJ',
      fandom: '고라니단',
    },
    links: [
      {
        name: 'Twitch',
        icon: 'twitch',
        link: 'https://www.twitch.tv/viichan6',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCs6EwgxKLY9GG4QNUrP5hoQ',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/viichan6/',
      },
      {
        name: 'Twitter',
        icon: 'twitter',
        link: 'https://twitter.com/viichan6',
      },
      {
        name: 'SoundCloud',
        icon: 'soundcloud',
        link: 'https://soundcloud.com/viichan6',
      },
    ],
    modelImages: [
      {
        type: 'pose1',
        image: '/images/model/isedol/viichan/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/isedol/viichan/front.png',
      },
      {
        type: 'left',
        image: '/images/model/isedol/viichan/left.png',
      },
      {
        type: 'back',
        image: '/images/model/isedol/viichan/back.png',
      },
      {
        type: 'right',
        image: '/images/model/isedol/viichan/right.png',
      },
    ],
  },
};
