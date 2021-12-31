interface Member {
  name: {
    en: string
    ko: string
  }
  image: string
  signNameImage: string
  signImage: string
  color: string
}

export type MemberID = 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan'

export const Members: Record<MemberID, Member> = {
  ine: {
    name: {
      en: 'INE',
      ko: '아이네',
    },
    image: '/images/member/ine.jpg',
    signNameImage: '/images/member/text/ine.svg',
    signImage: '/images/sign/ine.png',
    color: '#210C28',
  },
  jingburger: {
    name: {
      en: 'Jingburger',
      ko: '징버거',
    },
    image: '/images/member/jingburger.jpg',
    signNameImage: '/images/member/text/jingburger.svg',
    signImage: '/images/sign/jingburger.png',
    color: '#1A1506',
  },
  lilpa: {
    name: {
      en: 'LILPA',
      ko: '릴파',
    },
    image: '/images/member/lilpa.jpg',
    signNameImage: '/images/member/text/lilpa.svg',
    signImage: '/images/sign/lilpa.png',
    color: '#0E0A24',
  },
  jururu: {
    name: {
      en: 'Jururu',
      ko: '주르르',
    },
    image: '/images/member/jururu.jpg',
    signNameImage: '/images/member/text/jururu.svg',
    signImage: '/images/sign/jururu.png',
    color: '#1B0A1C',
  },
  gosegu: {
    name: {
      en: 'GOSEGU',
      ko: '고세구',
    },
    image: '/images/member/gosegu.jpg',
    signNameImage: '/images/member/text/gosegu.svg',
    signImage: '/images/sign/gosegu.png',
    color: '#05171D',
  },
  viichan: {
    name: {
      en: 'Viichan',
      ko: '비챤',
    },
    image: '/images/member/viichan.jpg',
    signNameImage: '/images/member/text/viichan.svg',
    signImage: '/images/sign/viichan.png',
    color: '#081607',
  },
};