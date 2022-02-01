export interface CharacterModel {
  type: string
  image: string
}

export interface SocialLinks {
  name: string
  icon?: string
  link: string
}

export interface Member {
  name: {
    en: string
    ko: string
  }
  image: string
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

export type GomemUnitID = 'specter' | 'firstQuarter' | 'lastQuarter' | 'science' | 'school'

export type GomemMemberID = 'roentgenium'
export type WakMemberID = 'wakgood'

export type WaktaverseMemberID = IsedolMemberID | GomemMemberID | WakMemberID

export const Members: Record<IsedolMemberID, Member> = {
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
        image: '/images/model/ine/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/ine/pose_2.png',
      },
      {
        type: 'pose3',
        image: '/images/model/ine/pose_3.png',
      },
      {
        type: 'front',
        image: '/images/model/ine/front.png',
      },
      {
        type: 'left',
        image: '/images/model/ine/left.png',
      },
      {
        type: 'back',
        image: '/images/model/ine/back.png',
      },
      {
        type: 'right',
        image: '/images/model/ine/right.png',
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
        image: '/images/model/jingburger/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/jingburger/pose_2.png',
      },
      {
        type: 'front',
        image: '/images/model/jingburger/front.png',
      },
      {
        type: 'left',
        image: '/images/model/jingburger/left.png',
      },
      {
        type: 'back',
        image: '/images/model/jingburger/back.png',
      },
      {
        type: 'right',
        image: '/images/model/jingburger/right.png',
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
        image: '/images/model/lilpa/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/lilpa/front.png',
      },
      {
        type: 'left',
        image: '/images/model/lilpa/left.png',
      },
      {
        type: 'back',
        image: '/images/model/lilpa/back.png',
      },
      {
        type: 'right',
        image: '/images/model/lilpa/right.png',
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
        image: '/images/model/jururu/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/jururu/front.png',
      },
      {
        type: 'left',
        image: '/images/model/jururu/left.png',
      },
      {
        type: 'back',
        image: '/images/model/jururu/back.png',
      },
      {
        type: 'right',
        image: '/images/model/jururu/right.png',
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
        image: '/images/model/gosegu/pose_1.png',
      },
      {
        type: 'pose2',
        image: '/images/model/gosegu/pose_2.png',
      },
      {
        type: 'front',
        image: '/images/model/gosegu/front.png',
      },
      {
        type: 'left',
        image: '/images/model/gosegu/left.png',
      },
      {
        type: 'back',
        image: '/images/model/gosegu/back.png',
      },
      {
        type: 'right',
        image: '/images/model/gosegu/right.png',
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
        image: '/images/model/viichan/pose_1.png',
      },
      {
        type: 'front',
        image: '/images/model/viichan/front.png',
      },
      {
        type: 'left',
        image: '/images/model/viichan/left.png',
      },
      {
        type: 'back',
        image: '/images/model/viichan/back.png',
      },
      {
        type: 'right',
        image: '/images/model/viichan/right.png',
      },
    ],
  },
};
