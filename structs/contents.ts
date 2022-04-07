export type Game =
  | 'Minecraft'
  | 'VRChat'
  | 'ProsoccerOnline'
  | 'AmongUs'
  | 'Valorant'
  | 'Others'

export type ContentName =
  | '왁핑몰'
  | '왁파트'
  | '왁트모르즈비'
  | '미니모르즈비'
  | '마인크래프트X전쟁'
  | '건축콘테스트'
  | '자운리그'
  | '프로싸커온라인 리그'
  | '커플대항전'
  | '상황극'
  | '소개팅'
  | 'VR챗 변신맨'
  | '고정멤버합방'
  | '이세계아이돌합방'
  | '고정멤버X이세계아이돌'
  | '버터뷰'
  | '기타'

export enum GameByEnum {
  Minecraft = 'Minecraft',
  VRChat = 'VRChat',
  LeagueOfLegend = 'LeagueOfLegend',
  Valorant = 'Valorant',
  ProsoccerOnline = 'ProsoccerOnline',
  BattleGround = 'BattleGround',
  FIFA20 = 'FIFA20',
  AmongUs = 'AmongUs',
  Others = 'Others',
}

export enum contentsNameByEnum {
  '왁핑몰' = '왁핑몰',
  '왁파트' = '왁파트',
  '왁트모르즈비' = '왁트모르즈비',
  '미니모르즈비' = '미니모르즈비',
  '마인크래프트X전쟁' = '마인크래프트X전쟁',
  '건축콘테스트' = '건축콘테스트',
  '자운리그' = '자운리그',
  '프로싸커온라인 리그' = '프로싸커온라인 리그',
  '커플대항전' = '커플대항전',
  '상황극' = '상황극',
  '소개팅' = '소개팅',
  'VR챗 변신맨' = 'VR챗 변신맨',
  '고정멤버합방' = '고정멤버합방',
  '이세계아이돌합방' = '이세계아이돌합방',
  '고정멤버X이세계아이돌' = '고정멤버X이세계아이돌',
  '버터뷰' = '버터뷰',
  '기타' = '기타',
}

export interface GameContents {
  name: string,
  contentName: ContentName[],
  image?: string
}

export const ContentByGame: Record<Game, GameContents> = {
  [GameByEnum.Minecraft]: {
    name: '마인크래프트',
    contentName: [
      '왁핑몰',
      '왁파트',
      '건축콘테스트',
      '왁트모르즈비',
      '미니모르즈비',
      '마인크래프트X전쟁',
      '기타'
    ],
    image: '/images/logo/logo_minecraft.png'
  },
  [GameByEnum.VRChat]: {
    name: 'VRChat',
    contentName: [
      '상황극',
      '소개팅',
      'VR챗 변신맨',
      '고정멤버X이세계아이돌',
      '버터뷰',
      '기타'
    ],
    image: '/images/logo/logo_vrchat.png'
  },
  [GameByEnum.ProsoccerOnline]: {
    name: '프로싸커 온라인',
    contentName: [
      '프로싸커온라인 리그'
    ],
    image: '/images/logo/logo_prosoccer.png'
  },
  [GameByEnum.AmongUs]: {
    name: '어몽어스',
    contentName: [
      '이세계아이돌합방'
    ],
    image: '/images/logo/logo_amongus.png'
  },
  [GameByEnum.Valorant]: {
    name: '발로란트',
    contentName: [
      '자운리그'
    ],
    image: '/images/logo/logo_valorant.png'
  },
  [GameByEnum.Others]: {
    name: '기타',
    contentName: [
      '기타'
    ],
  },
}

export interface Content {
  game: Game,
  date: string,
  content: ContentName,
  title: string,
  episode: number,
  participants: string[],
  thumbnail?: string,
  links: string
}

export const contentsList: Content[] = [
  {
    game: 'VRChat',
    date: '2022. 4. 07.',
    content: '고정멤버합방',
    title: '간수의 눈을 속여라! vs 죄수의 탈출을 막아라! - 감옥탈출 고멤합방',
    episode: 11,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '2YLjmKcTTdc'
  },
  {
    game: 'Minecraft',
    date: '2022. 3. 29.',
    content: '왁핑몰',
    title: '그 나무 카페 - 마인크래프트 왁핑몰 24화',
    episode: 22,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'JsxaxK78dKY'
  },
  {
    game: 'Others',
    date: '2022. 3. 23.',
    content: '기타',
    title: 'VR끼고 골프하니까 개 재밌네',
    episode: 28,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'dqPpQB_rGcE'
  },
  {
    game: 'Minecraft',
    date: '2022. 3. 19.',
    content: '왁핑몰',
    title: '빵위에 왕계란을 얹은 카페 - 마인크래프트 왁핑몰 23화',
    episode: 22,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Wa27V5M7lCg'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 19.',
    content: '버터뷰',
    title: '버튜버에게 일침 놓는 히키킹 - 버터뷰 2화',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'IyqFDIGZbB4'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 20.',
    content: '고정멤버합방',
    title: '고멤을 회전초밥처럼 돌려서 하는 팬미팅',
    episode: 10,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'G791YHTCvKY'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 17.',
    content: '고정멤버합방',
    title: '첫 고멤 팬미팅',
    episode: 9,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '1TDJyhKQjFA'
  },
  {
    game: 'Others',
    date: '2022. 3. 15.',
    content: '고정멤버합방',
    title: '고멤 중 2명이 노예입니다.',
    episode: 27,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'ghKP0hCN_Xg'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 11.',
    content: '이세계아이돌합방',
    title: '이세돌 2nd Single "겨울봄" 쇼케이스',
    episode: 9,
    participants: [
      'wakgood',
      '이세계아이돌',
      '시청자들'
    ],
    links: 'v924c_Ao3gM'
  },
  {
    game: 'Others',
    date: '2022. 3. 10.',
    content: '고정멤버합방',
    title: '나에게 축구는 XX이다...',
    episode: 26,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'RLXg3Dil4Mw'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 8.',
    content: '기타',
    title: '고정멤버 시즌3 최종 합격자 발표',
    episode: 8,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'ASd14-8ANwo'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 7.',
    content: '기타',
    title: '비챤 COVER - "취기를 빌려" / 칠무해 사전 시사회',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'oTNwxvRHMJU'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 7.',
    content: '소개팅',
    title: '그 날 이후.. 커플들은 어떻게 됬을까? - 10배 소개팅 후기',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들'
    ],
    links: 'eFmT8rllwYE'
  },
  {
    game: 'VRChat',
    date: '2022. 3. 6.',
    content: '기타',
    title: 'BMW 드라이빙 센터에 징버거님이...?',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '2WAm24cEkgs'
  },
  {
    game: 'Minecraft',
    date: '2022. 3. 3.',
    content: '건축콘테스트',
    title: '화려하게 ~ - 마인크래프트 눕프로해커 "귀멸의칼날 유곽 편"',
    episode: 75,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'gESonnxiAVU'
  },
  {
    game: 'Minecraft',
    date: '2022. 3. 1.',
    content: '이세계아이돌합방',
    title: '토끼의 간을 적출해라! (추격전 컨텐츠) - 마인크래프트 별주부전',
    episode: 8,
    participants: [
      'wakgood',
      '이세계아이돌',
      '고정멤버'
    ],
    links: 'd1mA746SigM'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 26.',
    content: '소개팅',
    title: '고멤의칼날 : 엇갈리는 운명 (10배소개팅 후기)',
    episode: 5,
    participants: [
      'wakgood',
      '고정멤버',
      '시청자들'
    ],
    links: 'AC5OABmodqg'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 26.',
    content: '버터뷰',
    title: '한국어로 방송하는 일본인 버튜버가 있다? - 신입 버튜버 인터뷰 컨텐츠 "버.터.뷰"',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '8Ss0z87JIFs'
  },
  {
    game: 'Minecraft',
    date: '2022. 2. 25.',
    content: '왁핑몰',
    title: '왁핑몰 정중앙에 있는 레스토랑 드디어 완성 - 마인크래프트 왁핑몰 22화',
    episode: 22,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'sOE72gFHAnA'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 23.',
    content: '고정멤버합방',
    title: '상대의 이름을 알아내면 제거할 수 있는 마피아 게임 - 데스노트',
    episode: 25,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '5bh9xDs8t9U'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 21.',
    content: '소개팅',
    title: '돌아온 칠무해',
    episode: 4,
    participants: [
      'wakgood',
      '고정멤버',
      '시청자들'
    ],
    links: 'e74MBSbzF1k'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 19.',
    content: '이세계아이돌합방',
    title: '달려라 왁타버스',
    episode: 7,
    participants: [
      'wakgood',
      '이세계아이돌',
    ],
    links: '5jR0hJTmRlk'
  },
  {
    game: 'Minecraft',
    date: '2022. 2. 17.',
    content: '건축콘테스트',
    title: '황혼보다 더 어두운 자여... - 마인크래프트 눕프로해커 "90년대 만화 편"',
    episode: 74,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'R7WCpgslqxw'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 16.',
    content: '소개팅',
    title: '여자가 지목한 남자는 데스노트에 이름이 적힌다? - 10배소개팅 여자편',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들'
    ],
    links: 'SsNe2h9Y6yM'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 15.',
    content: '상황극',
    title: '일본에서 아르바이트 하기 - VR챗 상황극',
    episode: 16,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'WxpYicxBVz4'
  },
  {
    game: 'Minecraft',
    date: '2022. 2. 14.',
    content: '왁핑몰',
    title: '어느게 마크로 만든거야?? - 마인크래프트 왁핑몰 21화',
    episode: 21,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'nf6-umTuvRw'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 10.',
    content: '소개팅',
    title: '칠무해의 등장 - (10배소개팅 커플들은 그 뒤로 어떻게 됐을까?)',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들'
    ],
    links: 'rWQji8ckSLo'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 9.',
    content: '소개팅',
    title: '이 세상에 남자가 5명 밖에 없다면? - 10배 소개팅 남자편',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들'
    ],
    links: '-ItIz1xY1oc'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 8.',
    content: '고정멤버합방',
    title: '더 빠르고 정확하게 요리를 만들어야 한다 ! - 고멤 요리 대결',
    episode: 24,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'utvbkxnMSN8'
  },
  {
    game: 'Minecraft',
    date: '2022. 2. 4.',
    content: '왁핑몰',
    title: '3층 짜리 일본식 빵집 카페 - 마인크래프트 왁핑몰 20화',
    episode: 20,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'dpG_oEntggk'
  },
  {
    game: 'VRChat',
    date: '2022. 2. 3.',
    content: '고정멤버X이세계아이돌',
    title: '2022 설연휴 왁타버스 윷놀이 대전',
    episode: 5,
    participants: [
      'wakgood',
      '이세계아이돌(주르르, 징버거, 비챤)',
      '고정멤버(풍신, 김치만두번영택사스가, 뢴트게늄, 새우튀김)',
    ],
    links: '5Iy8O5YTCpw'
  },
  {
    game: 'Minecraft',
    date: '2022. 2. 1.',
    content: '건축콘테스트',
    title: '와 이상해씨 진짜 살아있는 줄 - 마인크래프트 눕프로해커 "풀 포켓몬" 편',
    episode: 73,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'e7HIc1PJygQ'
  },
  {
    game: 'Others',
    date: '2022. 1. 27.',
    content: '기타',
    title: '시청자 16000명 상대로 캐치마인드 하기 - (갈틱쇼)',
    episode: 9,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'qXwEirhvhBA'
  },
  {
    game: 'Minecraft',
    date: '2022. 1. 24.',
    content: '왁핑몰',
    title: '아니 산 속에 탱크를 숨겨 놨네 미친놈들이 - 마인크래프트 왁핑몰 19화',
    episode: 19,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'TYTjWxko5t4'
  },
  {
    game: 'VRChat',
    date: '2022. 1. 13.',
    content: '이세계아이돌합방',
    title: '가상공간에서 팬미팅 하는 아이돌이 있다? - 이세돌 팬미팅',
    episode: 6,
    participants: [
      'wakgood',
      '이세계아이돌',
      '시청자들',
    ],
    links: 'zZQBeKyvLO8'
  },
  {
    game: 'Others',
    date: '2022. 1. 20.',
    content: '고정멤버X이세계아이돌',
    title: '아무도 예상치 못한 상황이 펼쳐집니다. 범인은 2명 - 프로젝트 윈터 왁타버스 합방',
    episode: 4,
    participants: [
      'wakgood',
      '고정멤버(이덕수할아바이, 해루석, 단답벌레, 비즈니스 킴, 뢴트게늄)',
      '이세계아이돌(주르르, 아이네)'
    ],
    links: 'S5yLLHfQSSw'
  },
  {
    game: 'Minecraft',
    date: '2022. 1. 18.',
    content: '건축콘테스트',
    title: '블럭을 먹고 싶어 지는데 정상인가요? - 마인크래프트 눕프로해커 "음식" 편 - 2 -',
    episode: 72,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'W2YdlIuPlZE'
  },
  {
    game: 'Minecraft',
    date: '2022. 1. 16.',
    content: '왁핑몰',
    title: '메가 커피 개 똑같음 - 마인크래프트 왁핑몰 18화',
    episode: 18,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '_fchuSkoI6A'
  },
  {
    game: 'VRChat',
    date: '2022. 1. 13.',
    content: '기타',
    title: '세계 최초 메타버스 강의 - VR챗 학교',
    episode: 5,
    participants: [
      'wakgood',
      '고정멤버',
      '이세계아이돌',
      '시청자들',
    ],
    links: 'G531ABhyxfE'
  },
  {
    game: 'VRChat',
    date: '2022. 1. 14.',
    content: '기타',
    title: '클럽에서 동요를 튼다면 어떨까? - VR챗 광란의 동요클럽',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'hHFGsMPxXaY'
  },
  {
    game: 'Minecraft',
    date: '2022. 1. 9.',
    content: '왁핑몰',
    title: '한식 디저트 카페 꼬까자 - 마인크래프트 왁핑몰 17화',
    episode: 17,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'tleqPuzdnnU'
  },
  {
    game: 'VRChat',
    date: '2022. 1. 4.',
    content: '고정멤버합방',
    title: '문제 알고 있는 척 해야 됨 ㅋㅋㅋ - VR챗 스파이 게임',
    episode: 23,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'f4DA8EkR7oM'
  },
  {
    game: 'Minecraft',
    date: '2022. 1. 1.',
    content: '건축콘테스트',
    title: '징크스 vs 에코 - 마인크래프트 눕프로해커 "아케인" 편',
    episode: 72,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'kraTRdvCYOI'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 28.',
    content: '상황극',
    title: '타임머신 개발에 성공했습니다 - VR챗 상황극',
    episode: 15,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'CBQ6wk2oDh0'
  },
  {
    game: 'Minecraft',
    date: '2021. 12. 27.',
    content: '왁핑몰',
    title: '엄청나게 큰 컴퓨터 가게???? - 마인크래프트 왁핑몰 16화',
    episode: 16,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'qQ6pyytDhrk'
  },
  {
    game: 'Minecraft',
    date: '2021. 12. 25.',
    content: '건축콘테스트',
    title: '크리스마스편에 미니모르즈비가 치즐모드로 부활 했습니다',
    episode: 71,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'o3_wTcGx3ds'
  },
  {
    game: 'ProsoccerOnline',
    date: '2021. 12. 21.',
    content: '프로싸커온라인 리그',
    title: '고멤 + 이세돌 참가! 프로싸커 온라인 토너먼트',
    episode: 1,
    participants: [
      'wakgood',
      '고정멤버',
      '이세계아이돌',
      '시청자들',
    ],
    links: 'D68Z18huO60'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 21.',
    content: '상황극',
    title: '왁생 - VR챗 상황극',
    episode: 14,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '_NHuAQwp0hk'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 19.',
    content: '상황극',
    title: '야간 순찰 - VR챗 상황극',
    episode: 13,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'P_SV-kuY078'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 18.',
    content: '상황극',
    title: '레슬링 상황극 개 레전드 - VR챗 상황극',
    episode: 12,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'pOyg48nE480'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 14.',
    content: '상황극',
    title: '크리스마스에 면접을 보러 간 백수 - VR챗 상황극',
    episode: 11,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'RS1uA5BJaKE'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 21.',
    content: '이세계아이돌합방',
    title: '범인은 누구? - 크라임왁 2화 (완)',
    episode: 5,
    participants: [
      'wakgood',
      '이세계아이돌'
    ],
    links: 'ElZN04ZkWYY'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 11.',
    content: '이세계아이돌합방',
    title: '살인사건이 발생했습니다 - 크라임왁 1화',
    episode: 4,
    participants: [
      'wakgood',
      '이세계아이돌'
    ],
    links: 'FcTchOt3p4M'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 11.',
    content: '상황극',
    title: '레게노 오브 왁굳 - VR챗 상황극 풀영상',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'KlfKoxJVifI'
  },
  {
    game: 'Minecraft',
    date: '2021. 12. 6.',
    content: '왁핑몰',
    title: '"가죽공방 아크팩토리" 실제 가게랑 120% 똑같네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 그리고... - 마인크래프트 왁핑몰 15화',
    episode: 15,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'aqqKR_FBKsc'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 16.',
    content: '고정멤버합방',
    title: '대머리에 이어서 바로 머리카락 ㅋㅋㅋㅋㅋㅋ 과연 맞출 수 있을까? - 고멤합방 "런닝맨 양세찬게임 2화" (완)',
    episode: 22,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'bjGkT1dhObk'
  },
  {
    game: 'VRChat',
    date: '2021. 12. 5.',
    content: '고정멤버합방',
    title: '대머리한테 대머리 문제 내기 - 고멤합방 "런닝맨 양세찬게임"',
    episode: 21,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'KVoJ6F7zHNw'
  },
  {
    game: 'Minecraft',
    date: '2021. 12. 3.',
    content: '건축콘테스트',
    title: '우승자 투표에서 역대급 사건이 일어났습니다 - 마인크래프트 눕프로해커 "고정멤버" 편',
    episode: 70,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'xdEkbikwnnE'
  },
  {
    game: 'ProsoccerOnline',
    date: '2021. 11. 30.',
    content: '프로싸커온라인 리그',
    title: '역대급 11:11 축구게임이 나왔습니다. 현실감 미쳤음 - 프로싸커 온라인',
    episode: 0,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'x76OGYqcrOA'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 28.',
    content: '왁핑몰',
    title: '드디어 첫 점포 오픈! QCY, 111퍼센트 - 왁핑몰 14화',
    episode: 14,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'bXJlmS4Z228'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 24.',
    content: '기타',
    title: '패션쇼 드디어 개최했습니다. 골반까지 깎는 장인의 등장?',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Ltxsfwz4ZuI'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 30.',
    content: 'VR챗 변신맨',
    title: '이게 사람이라고오오오오오? - 변신맨 최강팀전 2화',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'KPD2L6j4U5w'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 19.',
    content: 'VR챗 변신맨',
    title: '이게 사람이라고오오오오오? - 변신맨 최강팀전 1화',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'xI3uJPU-2LU'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 17.',
    content: '왁핑몰',
    title: '왁핑몰을 지어주신 분들에 대한 동상이 설치됩니다 - 마인크래프트 왁핑몰 13화',
    episode: 13,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'SY3YcXjNhoE'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 15.',
    content: '고정멤버합방',
    title: '수정구슬이 내는 힌트를 보고 그림을 맞추는 게임',
    episode: 20,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '6ZKSWy3uNes'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 14.',
    content: '건축콘테스트',
    title: '전사 궁수 도적 마법사 드루이드 - 마인크래프트 눕프로해커 "RPG 직업" 편',
    episode: 69,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'PvvPl1lWT40'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 12.',
    content: '마인크래프트X전쟁',
    title: '드디어 나오는 황금전사들! 그리고 두 농부의...- 마인크래프트 개미전쟁 5 : 진짜 황금시대',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '9MAvwnIyLkE'
  },
  {
    game: 'Others',
    date: '2021. 11. 11.',
    content: '기타',
    title: '오징어게임 코인 제대로 탄 똥겜 ㅋㅋㅋ - 짭징어 게임 (CRAB GAME)',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'uIiHij0gu2Q'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 10.',
    content: '마인크래프트X전쟁',
    title: '진짜 황금으로 떡칠 했습니다 - 개미전쟁 5 맵소개',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'VIAJXUJCwC0'
  },
  {
    game: 'Minecraft',
    date: '2021. 11. 9.',
    content: '기타',
    title: '옷 만들기 모드를 찾았습니다! 패션쇼 개최 삽가능 - 마인크래프트 패션쇼',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'PDJMeDZVnIg'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 8.',
    content: '기타',
    title: '추억의 90년대 만화영화 주인공들만 만드는 장인을 만났습니다 - VR챗 아바타 콘테스트',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'A349YpRHrfs'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 4.',
    content: '고정멤버합방',
    title: '이거 관종이라 일부러 이렇게 던지는건지 판단좀',
    episode: 19,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'x2cGPxvcERI'
  },
  {
    game: 'VRChat',
    date: '2021. 11. 2.',
    content: '고정멤버합방',
    title: '1기 고멤에 탈락한 망령들이 할로윈에 초대를 보내왔습니다...',
    episode: 18,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'L_iasUTkfMo'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 31.',
    content: '왁핑몰',
    title: '사라진 노예들 - 마인크래프트 왁핑몰 12화',
    episode: 12,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'w1UCMg7mUrc'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 29.',
    content: '마인크래프트X전쟁',
    title: '드디어 대규모 공성전이 나왔습니다 - 마인크래프트 개미전쟁 4',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'V3wf0FlFaYc'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 26.',
    content: '기타',
    title: '오징어게임을 이렇게 완벽하게 재현할 줄이야 - 마인크래프트',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '7IQ1A_4qtMg'
  },
  {
    game: 'Others',
    date: '2021. 10. 25.',
    content: '고정멤버X이세계아이돌',
    title: '이세돌 x 고멤 골프 합방',
    episode: 3,
    participants: [
      'wakgood',
      '고정멤버',
      '이세계아이돌'
    ],
    links: 'ineOjHIBQGk'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 25.',
    content: '왁핑몰',
    title: '왁핑몰 광장을 만들 사람이 없네 - 마인크래프트 왁핑몰 11화',
    episode: 11,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'TbUjoM4VggU'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 22.',
    content: '건축콘테스트',
    title: '네즈코... 일어나거라 - 마인크래프트 눕프로해커 "귀멸의칼날" 편',
    episode: 68,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '31I2uslxF6Q'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 21.',
    content: '마인크래프트X전쟁',
    title: '맵에 황금을 뿌렸습니다 - 마인크래프트 개미전쟁 4 황금시대 맵 미리보기',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Ml16ogX3bsE'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 18.',
    content: '왁핑몰',
    title: '노예들이 반란을 준비하고 있었습니다 - 마인크래프트 왁핑몰 10화',
    episode: 10,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'pjmc_WG0R6Q'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 21.',
    content: '고정멤버X이세계아이돌',
    title: '이세돌과 고멤 드디어 만났습니다',
    episode: 2,
    participants: [
      'wakgood',
      '고정멤버',
      '이세계아이돌'
    ],
    links: 'OZzzcZn-zW4'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 17.',
    content: '고정멤버X이세계아이돌',
    title: '오징어게임 재현률 미쳤습니다 ㅋㅋㅋ 영희 난이도 무엇',
    episode: 1,
    participants: [
      'wakgood',
      '고정멤버',
      '이세계아이돌'
    ],
    links: 'tcIaZq4SMfo'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 14.',
    content: 'VR챗 변신맨',
    title: '이 안에 사람이 있다고??????? 아니 이건 너무 하잖아 ㅋㅋㅋㅋ - VR챗 대규모 변신맨',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'seYVBkqhQto'
  },
  {
    game: 'AmongUs',
    date: '2021. 10. 13.',
    content: '이세계아이돌합방',
    title: '임포스터가 미인계로 봐달라고 하면 먹힐까? - 어몽어스 이세돌 합방',
    episode: 3,
    participants: [
      'wakgood',
      '이세계아이돌',
    ],
    links: 'AnS3beL9d3Y'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 11.',
    content: '건축콘테스트',
    title: '리자몽도 나옵니다 - 마인크래프트 눕프로해커 "불 포켓몬" 편',
    episode: 67,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'XdoAskNLaUE'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 10.',
    content: '마인크래프트X전쟁',
    title: '중앙 다이아를 차지하라! 역대급 공성전? - 마인크래프트 개미전쟁3',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'IujzKNR0TY4'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 9.',
    content: '고정멤버합방',
    title: '확대된 그림을 누구보다 빨리 맞추는 게임! - 고멤합방',
    episode: 17,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'd3qqNz64FSQ'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 9.',
    content: '기타',
    title: '마인크래프트 오징어게임 예고편',
    episode: 0,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'w6eOFt0WXE4'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 7.',
    content: 'VR챗 변신맨',
    title: '수십명이 한 맵에 사물로 위장해 있다? - VR챗 대규모 변신맨',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'uo4P41bWJVM'
  },
  {
    game: 'Others',
    date: '2021. 10. 5.',
    content: '기타',
    title: '이게 왜 피파보다 재밌냐 ㅋㅋㅋㅋㅋ 똥축구겜',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'LTH5kPzOqjE'
  },
  {
    game: 'Minecraft',
    date: '2021. 10. 5.',
    content: '왁핑몰',
    title: '가게는 터가 좋아야 하는데... 입점 룰렛! - 마인크래프트 왁핑몰 9화',
    episode: 9,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'F4c9qSizesQ'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 17.',
    content: '고정멤버합방',
    title: '대저택을 탈출하라! 새로운 고멤 독고혜지 참가?',
    episode: 16,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'yRoBGnN3Tk0'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 3.',
    content: '고정멤버합방',
    title: '새로운 고멤들과의 첫 합방! - 양궁대결',
    episode: 15,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'rqHgzgWn_Us'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 26.',
    content: '건축콘테스트',
    title: '곤충 못보시는 분들은 이번화는 거르세요. 그래도 해충은 안나옵니다. - 마인크래프트 눕프로해커 "곤충편"',
    episode: 66,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Z1_IzQjFe_g'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 24.',
    content: '마인크래프트X전쟁',
    title: '개미전쟁 3 맵 패치내용 예고',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '8OHF2TFVPNE'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 24.',
    content: '왁핑몰',
    title: '이제 시작입니다. 입점 점포리스트 전부 공개! - 마인크래프트 왁핑몰 8화',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '_sfcMsa-AZI'
  },
  {
    game: 'VRChat',
    date: '2021. 10. 24.',
    content: '고정멤버합방',
    title: '고멤 시즌2 오디션 무삭제판 (별의별 사람들 다나옴)',
    episode: 14,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'DB2czO2SHxw'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 22.',
    content: '고정멤버합방',
    title: '미친사람들 총 출동 ㅋㅋㅋㅋㅋㅋㅋ 새로운 VR챗 고정멤버를 모집합니다. 고정멤버 시즌2. 쇼미더 고멤?',
    episode: 13,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'UO3JqFSakIs'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 6.',
    content: '상황극',
    title: '다음 중 한 사람을 꼭 죽여야 한다면 당신은 누구를 죽이시겠습니까? - VR챗 상황극',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'oRPtvy897Ic'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 17.',
    content: '건축콘테스트',
    title: '마크로 본 서울 남산뷰 - 마인크래프트 치즐 건축콘테스트 "미술관 편"',
    episode: 65,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'XyGjVFswrsg'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 15.',
    content: '고정멤버합방',
    title: 'VR챗에서 고멤들과 수동으로 ㅋㅋ 갈틱폰 하기 !',
    episode: 12,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '_8mD_d8XXY4'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 13.',
    content: '마인크래프트X전쟁',
    title: '중앙을 가로지르는 강이 생겼습니다 + 화공전략까지? - 마인크래프트 개미전쟁 2',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'IlL19Eo9BYg'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 14.',
    content: '기타',
    title: '도파민 박사의 기계 장치오류?? 진짜 도파민 박사를 찾아라! - 히든 도파민',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'fGSKU2JHJPE'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 19.',
    content: '이세계아이돌합방',
    title: '우왁굳 vs 비챤? 싸움에 휘말리는 멤버들.. 꼴등은 과연 누구? - 다이아 서바이벌 2화 (완)',
    episode: 2,
    participants: [
      'wakgood',
      '이세계아이돌',
    ],
    links: 'Y-qsjQmBNe0'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 12.',
    content: '이세계아이돌합방',
    title: '다이아 블록 9개를 먼저 만들어라! 꼴찌에겐 벌칙이?! - 다이아 서바이벌 1화',
    episode: 1,
    participants: [
      'wakgood',
      '이세계아이돌',
    ],
    links: 'D5yxAJzYHUs'
  },
  {
    game: 'Others',
    date: '2021. 9. 9.',
    content: '기타',
    title: '갈틱폰 최고 난이도. 한 사람이 2장씩 그리는 "영화" 모드',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '94XvKch_-no'
  },
  {
    game: 'Minecraft',
    date: '2021. 9. 7.',
    content: '왁핑몰',
    title: '왁핑몰 정문 로고 부착 완료 ! - 마인크래프트 왁핑몰 7화',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'cGcrHcEFW7Q'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 6.',
    content: '상황극',
    title: '전세기 빌려서 초호화 여행 떠났습니다 - VR챗 상황극',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'WRzaPH_Eogc'
  },
  {
    game: 'VRChat',
    date: '2021. 9. 4.',
    content: '고정멤버합방',
    title: '레이저를 뚫고 보물을 훔쳐와야 하는데 풀트래커만이 할 수 있다?! - 고멤 합방',
    episode: 11,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'uFttN5RTVEE'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 31.',
    content: '건축콘테스트',
    title: '와 진짜 농담아니고 군침돕니다 - 마인크래프트 눕프로해커 "음식" 편',
    episode: 64,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ymvXP-27Yjs'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 27.',
    content: '왁핑몰',
    title: '통유리 안에 카페가 생겼어요 - 마인크래프트 왁핑몰 6화',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'rgz0en9sbgU'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 25.',
    content: '마인크래프트X전쟁',
    title: '작아져서 50 vs 50으로 전쟁하는 컨텐츠 - 마인크래프트 개미전쟁',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'bqmzdRfVRGM'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 22.',
    content: '상황극',
    title: '고등학교 시절로 돌아갔습니다 - VR챗 상황극',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'oPY7_O8s4QY'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 20.',
    content: '고정멤버합방',
    title: '고멤들과 저주받은 저택에 들어오게 되었습니다...',
    episode: 10,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'gBxO-NWvW5Y'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 16.',
    content: '왁핑몰',
    title: '옥상 발코니 퀄리티 미쳤다 - 마인크래프트 왁핑몰 5화',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '5qDB45UcRLo'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 13.',
    content: '건축콘테스트',
    title: '와 나루토 구미모드!!!!!!!! 는 훼이크고 이번편 망해서 눕프핵 플러스로 개편 예정입니다 - 마인크래프트 눕프로해커 "나루토 편"',
    episode: 63,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'wmnZ813N7oY'
  },
  {
    game: 'Others',
    date: '2021. 8. 11.',
    content: '기타',
    title: '1화 조회수 100만 감사합니다! 이번엔 애니메이션을 해봤습니다 - 갈틱폰',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'GlkAb9dUG3w'
  },
  {
    game: 'Minecraft',
    date: '2021. 8. 9.',
    content: '건축콘테스트',
    title: '건콘 역사상 가장 큰 작품을 생일선물로 받았습니다 - 마인크래프트 치즐 건축콘테스트 "우왁굳의생일깜짝선물편"',
    episode: 62,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'YgR5ncBNB08'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 8.',
    content: '상황극',
    title: '숨겨진 고대의 유적을 발견하였습니다 - VR챗 상황극',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '-pNVXW8uJOg'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 6.',
    content: '상황극',
    title: '정신병원 의사체험 - VR챗 상황극',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Gl2azbDD5EM'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 2.',
    content: '상황극',
    title: '눈뜨고 일어나니까 지구용사가 되어 있다면? - VR챗 상황극',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'o-G6EfCkB6I'
  },
  {
    game: 'VRChat',
    date: '2021. 8. 2.',
    content: '상황극',
    title: '느그초등학교 - VR챗 상황극',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'gdzYXkYuMK8'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 31.',
    content: '왁핑몰',
    title: '화장실의 저주 - 마인크래프트 왁핑몰 4화',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'usOj6IoYqo0'
  },
  {
    game: 'VRChat',
    date: '2021. 7. 27.',
    content: '고정멤버합방',
    title: '돈 없어서 고멤 발 핥았습니다',
    episode: 9,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'AF_Dm7ZAUTE'
  },
  {
    game: 'Others',
    date: '2021. 7. 23.',
    content: '기타',
    title: '아니 외국판 캐치마인드 개 웃기네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ - 갈틱폰',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'IXc2rEajXNc'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 17.',
    content: '왁핑몰',
    title: '백수가 된 노동자들 - 마인크래프트 왁핑몰 3화',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '33lIvJFSAPM'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 11.',
    content: '건축콘테스트',
    title: '초사이어인 1,2,3로 변하는 손오공 - 눕프로해커 드래곤볼 편',
    episode: 60,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'P9pNpQkpp9c'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 19.',
    content: '건축콘테스트',
    title: '배틀크루져 크기 뭐야?? - 마인크래프트 치즐 건축 콘테스트 "스타 2편"',
    episode: 61,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'nyNrxpEVqpM'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 8.',
    content: '건축콘테스트',
    title: '스타1이 갓겜인 이유 - 마인크래프트 치즐 건축 콘테스트 "스타1 편" 1화',
    episode: 59,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/IokhScS1hwE/mqdefault.jpg',
    links: 'IokhScS1hwE'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 25.',
    content: '고정멤버합방',
    title: '아무리 무서운 공포게임이라도 4명이서 한다면 무섭지 않다?',
    episode: 8,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'DQ9pnOKN-rY'
  },
  {
    game: 'Minecraft',
    date: '2021. 7. 1.',
    content: '왁핑몰',
    title: '외벽유리 + 정문 + 주차장 까지 기초 공사 완료! - 마인크래프트 왁핑몰 2화',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ICDkafC3R88'
  },
  {
    game: 'Others',
    date: '2021. 6. 29.',
    content: '기타',
    title: '생존게임이 로그라이크라니',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'NJQSsbX4gRg'
  },
  {
    game: 'Minecraft',
    date: '2021. 6. 27.',
    content: '건축콘테스트',
    title: '진화할 수록 고수가 건축합니다. - 마인크래프트 눕프로해커 "물포켓몬" 편',
    episode: 57,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'QDY_ttP7_3w'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 25.',
    content: '고정멤버합방',
    title: '단서만 보고 보물찾기. 무려 8인 멀티?',
    episode: 7,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'rJxRM_qzHQg'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 24.',
    content: '이세계아이돌합방',
    title: '(장난아님) 당신을 버츄얼 아이돌로 만들어 드립니다',
    episode: 0,
    participants: [
      'wakgood',
      '이세계아이돌',
    ],
    thumbnail: 'https://img.youtube.com/vi/vDU4L3Tvo8Q/mqdefault.jpg',
    links: 'vDU4L3Tvo8Q'
  },
  {
    game: 'Others',
    date: '2021. 6. 24.',
    content: '기타',
    title: '100명이서 동시에 연주하는 게임. 팬치들의 단합심에 놀랐습니다.',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'LdvM5IKooss'
  },
  {
    game: 'Minecraft',
    date: '2021. 6. 20.',
    content: '왁핑몰',
    title: '마크에서 쇼핑몰 만들어서 실제 기업들 유치 시키는 컨텐츠 - 왁핑몰 1화',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'FrfLPGMgaeY'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 18.',
    content: '고정멤버합방',
    title: '왕이 되어 신하들 상소문 받는 게임. 신하들 전부 사람임 ㅋㅋㅋ',
    episode: 6,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'KhR_0xIz-H8'
  },
  {
    game: 'Others',
    date: '2021. 6. 15.',
    content: '기타',
    title: '시청자들로 경마 시키는 팬게임이 나왔습니다 ㅋㅋㅋㅋㅋㅋㅋ',
    episode: 1,
    participants: [
      'wakgood',
    ],
    links: 'CN_615Vuro8'
  },
  {
    game: 'Minecraft',
    date: '2021. 6. 14.',
    content: '건축콘테스트',
    title: '초보 중수 고수의 실력을 비교하는 컨텐츠 - 마인크래프트 눕프로해커 "롤 챔피언 편"',
    episode: 56,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'fuMj-Z-98Rc'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 9.',
    content: '고정멤버합방',
    title: '순진하다고 믿었던 고멤에게 속았습니다',
    episode: 5,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'VyjWT0n2sOI'
  },
  {
    game: 'VRChat',
    date: '2021. 6. 7.',
    content: '고정멤버합방',
    title: '어몽어스 VR로 하니까 훨씬 재밌음 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    episode: 4,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: '4aigJLUoXRw'
  },
  {
    game: 'Minecraft',
    date: '2021. 5. 28.',
    content: '왁핑몰',
    title: '"마인크래프트 왁빌딩" 에 입점하실 소상공인 점주분들을 모집합니다',
    episode: 0,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'TG-jSv9UtWw'
  },
  {
    game: 'VRChat',
    date: '2021. 5. 25.',
    content: '고정멤버합방',
    title: '고멤들만 모아놨더니 진짜 가슴이 웅장해진다 ㅋㅋㅋㅋㅋㅋㅋㅋ',
    episode: 3,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'OIi98b4qmYk'
  },
  {
    game: 'Minecraft',
    date: '2021. 5. 31.',
    content: '건축콘테스트',
    title: '곤충 못보면 절대 클릭하지 마시오. 마크라고 무시하면... - 마인크래프트 치즐 건축콘테스트 "극혐편 2화"',
    episode: 55,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'AK684yzCh_U'
  },
  {
    game: 'Minecraft',
    date: '2021. 5. 24.',
    content: '건축콘테스트',
    title: '똥 냄새 주의 - 마인크래프트 치즐 건축 콘테스트 "극혐 상편"',
    episode: 54,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/K-V8L2AIzME/mqdefault.jpg',
    links: 'K-V8L2AIzME'
  },
  {
    game: 'VRChat',
    date: '2021. 5. 23.',
    content: '고정멤버합방',
    title: '왁파고의 등장 - 고정멤버 정식면접 B조',
    episode: 2,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'fFSyk4noVuc'
  },
  {
    game: 'VRChat',
    date: '2021. 5. 20.',
    content: '고정멤버합방',
    title: '고정멤버 정식면접 A조',
    episode: 1,
    participants: [
      'wakgood',
      '고정멤버',
    ],
    links: 'PM1pYmM5nn0'
  },
  {
    game: 'VRChat',
    date: '2021. 5. 18.',
    content: '기타',
    title: '인간이길 포기한 그들.. VR챗 풀트래커 동물원?',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'RJ7vGESNoSE'
  },
  {
    game: 'VRChat',
    date: '2021. 5. 15.',
    content: '기타',
    title: '우왁굳 고정멤버 시즌2 - 완전히 새로운 가상세계 컨텐츠 "왁타버스"',
    episode: 0,
    participants: [
      'wakgood',
    ],
    links: 'RKdV-q00LKM'
  },
  {
    game: 'Minecraft',
    date: '2021. 5. 10.',
    content: '건축콘테스트',
    title: '리제로 렘 vs 레옹 마틸다 - 마인크래프트 치즐 건축콘테스트 "히로인편"',
    episode: 53,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '2CqQYJlfluc'
  },
  {
    game: 'Minecraft',
    date: '2021. 4. 30.',
    content: '왁파트',
    title: '노조가 파업했습니다. - 마인크래프트 왁파트 18화 (마지막화)',
    episode: 18,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'wgmRj-WBsGc'
  },
  {
    game: 'Minecraft',
    date: '2021. 4. 28.',
    content: '건축콘테스트',
    title: '나 조커 안 좋아하는데 연출 뭐야 찢었다... - 마인크래프트 치즐 건축콘테스트 "장소 후편"',
    episode: 52,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '04NkyZBVL7A'
  },
  {
    game: 'Minecraft',
    date: '2021. 4. 26.',
    content: '건축콘테스트',
    title: '귀멸의 칼날에 나오는 우로코다키의 집 - 마인크래프트 치즐 건축콘테스트 "장소 전편"',
    episode: 51,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Kq3PICJkiDI'
  },
  {
    game: 'Minecraft',
    date: '2021. 4. 13.',
    content: '건축콘테스트',
    title: '이게 마크 그래픽이라고???? 연출 기법 미쳤다 ㅋㅋㅋㅋㅋㅋㅋ - 마인크래프트 치즐 건축콘테스트 "무기"편',
    episode: 50,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/U-cZbz3Qf9o/mqdefault.jpg',
    links: 'U-cZbz3Qf9o'
  },
  {
    game: 'Minecraft',
    date: '2021. 4. 3.',
    content: '건축콘테스트',
    title: '아니 심영 개 똑같네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ - 마인크래프트 치즐 건축콘테스트 "조연" 편"',
    episode: 49,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ho0_QWtYuIs'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 27.',
    content: '왁파트',
    title: '단지내 메타세콰이어 길을 만들었습니다 - 왁파트 17화',
    episode: 17,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'OyMJW82HDY8'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 18.',
    content: '건축콘테스트',
    title: '동물들을 건콘에서 표현할 수 있을까? - 마인크래프트 치즐 건축콘테스트 "동물 편"',
    episode: 48,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '7IUH6UyhmXw'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 12.',
    content: '건축콘테스트',
    title: '원펀맨으로 경기장을 부숴버린 역대급 연출 - 마인크래프트 치즐 건축 콘테스트 "피규어 편"',
    episode: 47,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'PJLUWmzbxR4'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 10.',
    content: '왁파트',
    title: '집 안에 영화관이 있다?? - 마인크래프트 왁파트 16화',
    episode: 16,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'CJJWG4hQoLg'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 5.',
    content: '건축콘테스트',
    title: '치킨 vs 피자 - 마인크래프트 배틀건콘',
    episode: 46,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'mggEwsmINBk'
  },
  {
    game: 'Minecraft',
    date: '2021. 3. 1.',
    content: '건축콘테스트',
    title: '세상의 모든 괴물들 총집합?! - 마인크래프트 치즐 건축콘테스트 "괴물"편',
    episode: 45,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/5RmKWfo8ig4/mqdefault.jpg',
    links: '5RmKWfo8ig4'
  },
  {
    game: 'Minecraft',
    date: '2021. 2. 21.',
    content: '건축콘테스트',
    title: '원피스 vs 나루토 - 마인크래프트 배틀 건콘',
    episode: 44,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'A15E5n22dOo'
  },
  {
    game: 'Minecraft',
    date: '2021. 2. 14.',
    content: '건축콘테스트',
    title: '새로운 마크 컨텐츠를 만들어 왔습니다 - 배틀건콘',
    episode: 43,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'K-j84lKsCeM'
  },
  {
    game: 'Minecraft',
    date: '2021. 2. 12.',
    content: '왁파트',
    title: '분양 사기 사건 발생? - 마인크래프트 왁파트 15화',
    episode: 15,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'vOW6RyS9sNQ'
  },
  {
    game: 'Minecraft',
    date: '2021. 2. 8.',
    content: '건축콘테스트',
    title: '온 세상 로봇들 다 출동 했네 ㅋㅋㅋㅋ - 마인크래프트 치즐 건축콘테스트 "로봇" 편',
    episode: 42,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '9jbjtAljUoY'
  },
  {
    game: 'Minecraft',
    date: '2021. 1. 30.',
    content: '왁파트',
    title: '드디어 지하주차장에 자동차들이 ?! - 마인크래프트 왁파트 14화',
    episode: 14,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '6U78JFsBVmI'
  },
  {
    game: 'Minecraft',
    date: '2021. 1. 19.',
    content: '왁파트',
    title: '왁케아 정식 오픈에 사람들 너무 몰려서 마비 되었습니다 - 마인크래프트 왁파트 13화',
    episode: 13,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ZdXC86fYroU'
  },
  {
    game: 'Minecraft',
    date: '2021. 1. 27.',
    content: '건축콘테스트',
    title: '건콘 역사상 역대급 건축물이 나왔습니다 - 마인크래프트 치즐 건축콘테스트 "브랜드 매장 (프랜차이즈)" 2화 (완)',
    episode: 41,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'tqpO9bp1wsY'
  },
  {
    game: 'Minecraft',
    date: '2021. 1. 16.',
    content: '건축콘테스트',
    title: '실제 매장들하고 똑같네 왁파트로 가져가고 싶다 - 마인크래프트 치즐 건축콘테스트 "브랜드 매장 (프랜차이즈)" 1화',
    episode: 40,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'xUHz9tPmOZQ'
  },
  {
    game: 'Minecraft',
    date: '2021. 1. 1.',
    content: '왁파트',
    title: '왁파트 옆에 빌라촌이 생겼습니다 - 마인크래프트 왁파트 12화',
    episode: 12,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: '3wwYNs89Ilo'
  },
  {
    game: 'Minecraft',
    date: '2020. 12. 23.',
    content: '건축콘테스트',
    title: '아니 크리스마스 특집인데 작품들의 상태가? - 마인크래프트 치즐 건축콘테스트 "크리스마스(겨울) 편"',
    episode: 39,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Uy7GKVtcf1U'
  },
  {
    game: 'Minecraft',
    date: '2020. 12. 16.',
    content: '왁파트',
    title: '가구모드 컨텐츠 1위한 장인의 아파트는? - 마인크래프트 왁파트 11화',
    episode: 11,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Xzth5lnEtxo'
  },
  {
    game: 'Minecraft',
    date: '2020. 12. 7.',
    content: '건축콘테스트',
    title: '요즘 애니메이션들은 말이야 근본이 없어 - 마인크래프트 치즐 건축콘테스트 "90년대 만화영화" 편',
    episode: 38,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'pAjj_428gk4'
  },
  {
    game: 'Minecraft',
    date: '2020. 12. 5.',
    content: '왁파트',
    title: '아파트 1층에 연예인들이 올법한 고급 미용실이 ? - 마인크래프트 왁파트 10화',
    episode: 10,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'IUOc9IQvCks'
  },
  {
    game: 'Minecraft',
    date: '2020. 11. 25.',
    content: '왁파트',
    title: '아파트 안에 구현된 어몽어스? - 마인크래프트 왁파트 9화',
    episode: 9,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ahQnOTmLtVk'
  },
  {
    game: 'Minecraft',
    date: '2020. 11. 14.',
    content: '왁파트',
    title: '이제는 집안에 도시가 있네??????? - 마인크래프트 왁파트 8화',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'GWg2ZTqaHes'
  },
  {
    game: 'Minecraft',
    date: '2020. 11. 3.',
    content: '왁파트',
    title: '왁파트 지하주차장 규모 실화? - 마인크래프트 왁파트 7화',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'ldEK6hll-L4'
  },
  {
    game: 'Minecraft',
    date: '2020. 10. 30.',
    content: '건축콘테스트',
    title: '제일 작게 만든 작품이 우승? - 치즐 건축콘테스트 "식물 편"',
    episode: 37,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'xDhfujd8OJE'
  },
  {
    game: 'Minecraft',
    date: '2020. 10. 21.',
    content: '왁파트',
    title: '야 이게 집안이야 집밖이야? - 마인크래프트 왁파트 6화',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'tDj5VE7c3dk'
  },
  {
    game: 'Minecraft',
    date: '2020. 10. 10.',
    content: '왁파트',
    title: '왁케아 가구 판매 시작! - 마인크래프트 왁파트 5화',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Q5O8McEYV84'
  },
  {
    game: 'Minecraft',
    date: '2020. 9. 24.',
    content: '왁파트',
    title: '아니 집안을 무슨 우주선으로 만들었어 ㅋㅋㅋㅋ - 마인크래프트 왁파트 4화',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'qOCTy-NOKyQ'
  },
  {
    game: 'Minecraft',
    date: '2020. 9. 11.',
    content: '왁파트',
    title: '1동 입주 시작합니다! - 마인크래프트 왁파트 3화',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'mHVnmt7EAj8'
  },
  {
    game: 'Minecraft',
    date: '2020. 9. 2.',
    content: '왁파트',
    title: '왁파트 브랜드 로고가 정해졌습니다 - 마인크래프트 왁파트 2화',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'nfMz11N43P4'
  },
  {
    game: 'Minecraft',
    date: '2020. 8. 22.',
    content: '왁파트',
    title: '마인크래프트에서 당신의 집을 분양해 드립니다? 왁트모르즈비를 이을 새로운 초장기 대규모 컨텐츠 - 왁파트 1화',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    links: 'Tx48rma7P40'
  },
  {
    game: 'Minecraft',
    date: '2020. 8. 5.',
    content: '건축콘테스트',
    title: '나노 건축모드로 건축콘테스트를 해봤습니다! 이건 또 다른 재미가 있네ㅋㅋㅋ - 마인크래프트 치즐건축콘테스트',
    episode: 36,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/eIxvXMPAzpA/mqdefault.jpg',
    links: 'eIxvXMPAzpA'
  },
  {
    game: 'Minecraft',
    date: '2020. 7. 30.',
    content: '기타',
    title: '엄청 작은 나노단위로 건축을 할 수 있는 모드?! - 마인크래프트 치즐 모드',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/lfrnzFHrGDQ/mqdefault.jpg',
    links: 'lfrnzFHrGDQ'
  },
  {
    game: 'Minecraft',
    date: '2020. 7. 30.',
    content: '건축콘테스트',
    title: '아니 타코야키를 개 크게 만들었어 ㅋㅋㅋㅋ 딱 한 알로 승부보는 팀 - 마인크래프트 뉴건축콘테스트 "일식편"',
    episode: 35,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/mLywj3nU42Y/mqdefault.jpg',
    links: 'mLywj3nU42Y'
  },
  {
    game: 'Minecraft',
    date: '2020. 7. 17.',
    content: '건축콘테스트',
    title: '와 마크로 만든 삼겹살인데 개 맛있어 보이네 - 마인크래프트 건축콘테스트 "한식편"',
    episode: 34,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/i0ECOzlX0NQ/mqdefault.jpg',
    links: 'i0ECOzlX0NQ'
  },
  {
    game: 'Minecraft',
    date: '2020. 7. 4.',
    content: '건축콘테스트',
    title: '100만 구독자 기념 마인크래프트 건축 콘테스트 "왁튜브 명장면" 편 2화',
    episode: 33,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/JEKYM3vzaYs/mqdefault.jpg',
    links: 'JEKYM3vzaYs'
  },
  {
    game: 'Minecraft',
    date: '2020. 6. 30.',
    content: '건축콘테스트',
    title: '100만 구독자 기념 마인크래프트 건축 콘테스트 "왁튜브 명장면" 편 1화',
    episode: 32,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/kvXuAkB4kfM/mqdefault.jpg',
    links: 'kvXuAkB4kfM'
  },
  {
    game: 'Minecraft',
    date: '2020. 6. 20.',
    content: '건축콘테스트',
    title: '추억의 오락실 게임들이 모두 모였다?! - 마인크래프트 건축콘테스트 "추억의 오락실게임" 편',
    episode: 31,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/gfXyargKD2c/mqdefault.jpg',
    links: 'gfXyargKD2c'
  },
  {
    game: 'Minecraft',
    date: '2020. 6. 11.',
    content: '왁트모르즈비',
    title: '왁트모르즈비 시즌1 완성 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 33화 (완)',
    episode: 33,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/1QfCU3N6USQ/mqdefault.jpg',
    links: '1QfCU3N6USQ'
  },
  {
    game: 'Minecraft',
    date: '2020. 6. 9.',
    content: '건축콘테스트',
    title: '판타지라는 개념을 정립한 그 작가의 그 작품 - 마인크래프트 건축 콘테스트 "판타지" 편',
    episode: 30,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/6uJywxGyFEI/mqdefault.jpg',
    links: '6uJywxGyFEI'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 30.',
    content: '왁트모르즈비',
    title: '크루즈에 생긴 카지노 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 32화',
    episode: 32,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ZOmndT8Mflc/mqdefault.jpg',
    links: 'ZOmndT8Mflc'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 28.',
    content: '건축콘테스트',
    title: '앞으로의 건축콘테스트는 3명이 한 팀입니다! - 마인크래프트 건축콘테스트 "명작" 편',
    episode: 29,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/NpEtm__Q6k0/mqdefault.jpg',
    links: 'NpEtm__Q6k0'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 25.',
    content: '미니모르즈비',
    title: '하루만에 만드는 동물원? - 마인크래프트 미니모르즈비 "동물원" 편',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ECRO-KBHyRw/mqdefault.jpg',
    links: 'ECRO-KBHyRw'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 18.',
    content: '왁트모르즈비',
    title: '아직도 감옥에 갇혀 있는 사람 있었음 ㅋㅋㅋ - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 31화',
    episode: 31,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/rn2q6Ooo8sg/mqdefault.jpg',
    links: 'rn2q6Ooo8sg'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 14.',
    content: '건축콘테스트',
    title: '마크와 롤이 만난다면 조회수가 2배일까? - 마인크래프트 건축콘테스트 "리그오브레전드" 편',
    episode: 28,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/zMrchsC6RjI/mqdefault.jpg',
    links: 'zMrchsC6RjI'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 9.',
    content: '미니모르즈비',
    title: '하루만에 만드는 동물의 숲? 이거까지 구현했다고? - 마인크래프트 미니모르즈비',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/7IZuukGDSrg/mqdefault.jpg',
    links: '7IZuukGDSrg'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 7.',
    content: '왁트모르즈비',
    title: '드디어 공개되는 대성당 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 30화',
    episode: 30,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/nO9DX9LzIjs/mqdefault.jpg',
    links: 'nO9DX9LzIjs'
  },
  {
    game: 'Minecraft',
    date: '2020. 5. 5.',
    content: '건축콘테스트',
    title: '마크 건축콘테스트에 나비보벳따우 등장? - 마인크래프트 건축콘테스트 "카페" 후편',
    episode: 27,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/PTgQcUSsIfQ/mqdefault.jpg',
    links: 'PTgQcUSsIfQ'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 28.',
    content: '건축콘테스트',
    title: '크~ 스타벅스와 블루보틀보다 더 좋은 바닷가 카페? - 마인크래프트 건축콘테스트 "카페" 전편',
    episode: 26,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/0jaJHNUG67o/mqdefault.jpg',
    links: '0jaJHNUG67o'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 26.',
    content: '왁트모르즈비',
    title: '1일 노예 체험 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 29화',
    episode: 29,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/aLCfM5hRTuc/mqdefault.jpg',
    links: 'aLCfM5hRTuc'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 19.',
    content: '건축콘테스트',
    title: '요즘애들 드래곤볼 몰라서 손오공 15개 나온 편 - 마인크래프트 건축콘테스트 "드래곤볼" 편',
    episode: 25,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/PPlRSWnrDvA/mqdefault.jpg',
    links: 'PPlRSWnrDvA'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 14.',
    content: '미니모르즈비',
    title: '하루만에 만드는 휴양지? - 마인크래프트 미니모르즈비',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ScQ3mdw1IxI/mqdefault.jpg',
    links: 'ScQ3mdw1IxI'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 13.',
    content: '왁트모르즈비',
    title: '조선소 완공 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 28화',
    episode: 28,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/byQhbk3ktEw/mqdefault.jpg',
    links: 'byQhbk3ktEw'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 11.',
    content: '건축콘테스트',
    title: '건축으로 승부가 안나자 상대팀을 밀어 떨어뜨리는 참가자들 - 제 9회 마인크래프트 건축팀배틀',
    episode: 24,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/IFBwJyjYvkk/mqdefault.jpg',
    links: 'IFBwJyjYvkk'
  },
  {
    game: 'Minecraft',
    date: '2020. 4. 2.',
    content: '건축콘테스트',
    title: '역대급 공부되는 편 ㅋㅋㅋ 무슨 속담인지 맞춰보세요 - 마인크래프트 건축콘테스트 "속담" 편',
    episode: 23,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/fNWwOKxlFx0/mqdefault.jpg',
    links: 'fNWwOKxlFx0'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 31.',
    content: '왁트모르즈비',
    title: '왁굴암 공사 시작 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 27화',
    episode: 27,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/4cdxwi5Ecw4/mqdefault.jpg',
    links: '4cdxwi5Ecw4'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 27.',
    content: '미니모르즈비',
    title: '하루만에 만드는 스타크래프트 세계? - 마인크래프트 미니모르즈비',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/3QxX6qE3W4g/mqdefault.jpg',
    links: '3QxX6qE3W4g'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 21.',
    content: '왁트모르즈비',
    title: '감옥이.. 왜 이렇게 됐지..? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 26화',
    episode: 26,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/nRx2hBjHV6M/mqdefault.jpg',
    links: 'nRx2hBjHV6M'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 17.',
    content: '건축콘테스트',
    title: '나루토 구미 직접 소환하는 줄 ㅎㄷㄷ - 마인크래프트 건축콘테스트 "나루토" 편',
    episode: 22,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/SabLZ8mo7AA/mqdefault.jpg',
    links: 'SabLZ8mo7AA'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 15.',
    content: '건축콘테스트',
    title: '이제 건축팀배틀에서 오목을 두네 ㅋㅋㅋㅋㅋㅋ - 제 8회 마인크래프트 건축팀배틀',
    episode: 21,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/N4pngYsIXzs/mqdefault.jpg',
    links: 'N4pngYsIXzs'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 12.',
    content: '왁트모르즈비',
    title: '드디어 시청자들에게 인정받은 작품을 만들었습니다 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 25화',
    episode: 25,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/K5MNEawn0Ss/mqdefault.jpg',
    links: 'K5MNEawn0Ss'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 3.',
    content: '왁트모르즈비',
    title: '왁트모르즈비에 지하철 시스템 도입?? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 24화',
    episode: 24,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/b7o3BXsp9IA/mqdefault.jpg',
    links: 'b7o3BXsp9IA'
  },
  {
    game: 'Minecraft',
    date: '2020. 3. 2.',
    content: '건축콘테스트',
    title: '건콘 곤충편인데 베어그릴스 등장 ㅋㅋㅋ - 마인크래프트 건축콘테스트 "곤충" 편',
    episode: 20,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/E97aRqZBrjU/mqdefault.jpg',
    links: 'E97aRqZBrjU'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 27.',
    content: '미니모르즈비',
    title: '하루만에 만드는 놀이공원? - 마인크래프트 미니모르즈비',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/5UZlkegpX2o/mqdefault.jpg',
    links: '5UZlkegpX2o'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 22.',
    content: '건축콘테스트',
    title: '미소녀와 똥 - 제 7회 마인크래프트 건축팀배틀',
    episode: 19,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/U0ySn0EiVNc/mqdefault.jpg',
    links: 'U0ySn0EiVNc'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 19.',
    content: '왁트모르즈비',
    title: '센트럴파크 호수 밑에 무언가가 있다?? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 23화',
    episode: 23,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/VdFQewXbwsw/mqdefault.jpg',
    links: 'VdFQewXbwsw'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 17.',
    content: '건축콘테스트',
    title: '포켓몬 애니 1화에 전설의 포켓몬이 등장했다는 사실을 아시나요? - 마인크래프트 건축콘테스트 "포켓몬스터" 편',
    episode: 18,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/cRbBQVrnjt0/mqdefault.jpg',
    links: 'cRbBQVrnjt0'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 10.',
    content: '건축콘테스트',
    title: '건축콘테스트에 등장한 페이커 - 마인크래프트 건축콘테스트 "인물" 편',
    episode: 17,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/8JhzZb3B7xc/mqdefault.jpg',
    links: '8JhzZb3B7xc'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 6.',
    content: '왁트모르즈비',
    title: '새롭게 영입한 과장에게 센트럴파크 2지역을 맡겼더니..?? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 22화',
    episode: 22,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/uUFcaibsYXw/mqdefault.jpg',
    links: 'uUFcaibsYXw'
  },
  {
    game: 'Minecraft',
    date: '2020. 2. 1.',
    content: '건축콘테스트',
    title: '동물의 왕인 호랑이와 사자가 나옵니다 - 제 5회 마인크래프트 건축팀배틀',
    episode: 16,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/KwdrlGLVXEI/mqdefault.jpg',
    links: 'KwdrlGLVXEI'
  },
  {
    game: 'Minecraft',
    date: '2020. 1. 28.',
    content: '왁트모르즈비',
    title: '이게 무슨일이야? 갑자기 노예들이 전부 죽었습니다 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 21화',
    episode: 21,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/02It5tgs8Zs/mqdefault.jpg',
    links: '02It5tgs8Zs'
  },
  {
    game: 'Minecraft',
    date: '2020. 1. 17.',
    content: '왁트모르즈비',
    title: '왁트모르즈비 바다속에 스폰지밥의 비키니시티가 있었다? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 20화',
    episode: 20,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/8LMH-mosOug/mqdefault.jpg',
    links: '8LMH-mosOug'
  },
  {
    game: 'Minecraft',
    date: '2020. 1. 11.',
    content: '미니모르즈비',
    title: '하루만에 만드는 왁트모르즈비 컨텐츠? 작은 왁트모르즈비를 만들어라! - 미니모르즈비',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/wcMGNqRCVzE/mqdefault.jpg',
    links: 'wcMGNqRCVzE'
  },
  {
    game: 'Minecraft',
    date: '2020. 1. 8.',
    content: '왁트모르즈비',
    title: '완성된 왁퓨타 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 19화',
    episode: 19,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/i_EoQlPQf_c/mqdefault.jpg',
    links: 'i_EoQlPQf_c'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 26.',
    content: '건축콘테스트',
    title: '이런 직업들까지 나올줄은 몰랐습니다... - 마인크래프트 건축콘테스트 "직업" 상편',
    episode: 15,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/Kv6ENf7D1Uo/mqdefault.jpg',
    links: 'Kv6ENf7D1Uo'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 25.',
    content: '왁트모르즈비',
    title: '천공의 섬 왁퓨타 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 18화',
    episode: 18,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/3-oetiWBUi0/mqdefault.jpg',
    links: '3-oetiWBUi0'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 24.',
    content: '건축콘테스트',
    title: '최악의 팀워크와 그걸 뛰어넘는 능지 싸움 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ - 제 4회 마인크래프트 건축 팀배틀',
    episode: 14,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/KA2m-qSZ5jw/mqdefault.jpg',
    links: 'KA2m-qSZ5jw'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 20.',
    content: '건축콘테스트',
    title: '덕후 특집이라고 했더니 진짜 덕후를 만들어 버렸네 - 마인크래프트 건축콘테스트 "덕후특집" 편',
    episode: 13,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/3_eTTLDAE58/mqdefault.jpg',
    links: '3_eTTLDAE58'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 14.',
    content: '왁트모르즈비',
    title: '꽉 찬 마을지도 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 17화',
    episode: 17,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ybsLhp0YiHE/mqdefault.jpg',
    links: 'ybsLhp0YiHE'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 12.',
    content: '건축콘테스트',
    title: '우승하려고 서로의 작품을 훔치는거 실화???? - 제 3회 마인크래프트 건축 팀배틀',
    episode: 12,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/zAP9--ZhUKI/mqdefault.jpg',
    links: 'zAP9--ZhUKI'
  },
  {
    game: 'Minecraft',
    date: '2019. 12. 3.',
    content: '왁트모르즈비',
    title: '왁트모르즈비하다 졸려서 아내에게 맡기고 자러 갔습니다 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 16화',
    episode: 16,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/vQfgx8m3o8M/mqdefault.jpg',
    links: 'vQfgx8m3o8M'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 29.',
    content: '건축콘테스트',
    title: '건축콘테스트 최초로 작품이 움직였다?!! - 마인크래프트 건축 콘테스트 "추억의 온라인게임" 편',
    episode: 11,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/w5XAoqI6A4U/mqdefault.jpg',
    links: 'w5XAoqI6A4U'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 25.',
    content: '왁트모르즈비',
    title: '임원이 싸고 간 거대한 똥... - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 15화',
    episode: 15,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/rKAtvE4b0m8/mqdefault.jpg',
    links: 'rKAtvE4b0m8'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 21.',
    content: '건축콘테스트',
    title: '상상도 못한 역전 XXX에 터졌습니다 ㅋㅋㅋㅋㅋ - 제 2회 마인크래프트 건축 팀배틀',
    episode: 10,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/B-co80VPJoM/mqdefault.jpg',
    links: 'B-co80VPJoM'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 17.',
    content: '건축콘테스트',
    title: '어떤 나라가 우승했을까요? 한국은 아닙니다 - 마인크래프트 건축 콘테스트 "나라" 편',
    episode: 9,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/imRNgIlhRP4/mqdefault.jpg',
    links: 'imRNgIlhRP4'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 14.',
    content: '왁트모르즈비',
    title: '왁트모르즈비에 월드에딧이 필요없는 이유 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 14화',
    episode: 14,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/zBeGZPSmnQU/mqdefault.jpg',
    links: 'zBeGZPSmnQU'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 7.',
    content: '건축콘테스트',
    title: '건축 콘테스트에 물을 채워버렸더니 참가자들이 만든것은? - 마인크래프트 건축 콘테스트 "물" 편',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ANF3ctM5GuM/mqdefault.jpg',
    links: 'ANF3ctM5GuM'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 3.',
    content: '왁트모르즈비',
    title: '대규모 반란의 전조 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 13화',
    episode: 13,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/aZHFoTTdZr0/mqdefault.jpg',
    links: 'aZHFoTTdZr0'
  },
  {
    game: 'Minecraft',
    date: '2019. 11. 1.',
    content: '건축콘테스트',
    title: '마인크래프트가 날 동심으로 돌아가게 할 줄이야... - 마인크래프트 건축 콘테스트 "동화" 편',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/xIuVy8rx7m0/mqdefault.jpg',
    links: 'xIuVy8rx7m0'
  },
  {
    game: 'Minecraft',
    date: '2019. 10. 27.',
    content: '건축콘테스트',
    title: '마크 건축대회를 팀배틀로 해보았다 - 제 1회 마인크래프트 건축 팀배틀',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ipPAiGYq9ZI/mqdefault.jpg',
    links: 'ipPAiGYq9ZI'
  },
  {
    game: 'Minecraft',
    date: '2019. 10. 26.',
    content: '왁트모르즈비',
    title: '숨겨진 아방궁 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 12화',
    episode: 12,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/O8W_d9yqtrY/mqdefault.jpg',
    links: 'O8W_d9yqtrY'
  },
  {
    game: 'Minecraft',
    date: '2019. 10. 12.',
    content: '왁트모르즈비',
    title: '2번째 왁굳집 탄생! - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 11화',
    episode: 11,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/7dRQhAdBq1k/mqdefault.jpg',
    links: '7dRQhAdBq1k'
  },
  {
    game: 'Minecraft',
    date: '2019. 10. 4.',
    content: '왁트모르즈비',
    title: 'GTA5의 그 작업을 구현하다? - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 10화',
    episode: 10,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/TDtI7aq1KI4/mqdefault.jpg',
    links: 'TDtI7aq1KI4'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 30.',
    content: '건축콘테스트',
    title: '[9분대 깜놀주의] 아니 게임속에서 게임을 만들어 버리네 - 마인크래프트 건축 콘테스트 "게임" 편',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/PU2PZHWdbwk/mqdefault.jpg',
    links: 'PU2PZHWdbwk'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 19.',
    content: '왁트모르즈비',
    title: '왁트모르즈비의 밤 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 9화',
    episode: 9,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/6Jxttm7qhXc/mqdefault.jpg',
    links: '6Jxttm7qhXc'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 10.',
    content: '건축콘테스트',
    title: '최소한의 블록으로 원피스 루피 표현한거 소름 - 마인크래프트 건축 콘테스트 "만화" 편',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/7VW3DNQAWYE/mqdefault.jpg',
    links: '7VW3DNQAWYE'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 12.',
    content: '왁트모르즈비',
    title: '법원 지하의 어두운 비밀 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 8화',
    episode: 8,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/Zo-MArQ82bw/mqdefault.jpg',
    links: 'Zo-MArQ82bw'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 10.',
    content: '건축콘테스트',
    title: '영화 기생충 집을 마크로 구현한거 보고 놀랐네요 - 마인크래프트 건축 콘테스트 "영화" 편',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/o0ayvb3QYsc/mqdefault.jpg',
    links: 'o0ayvb3QYsc'
  },
  {
    game: 'Minecraft',
    date: '2019. 9. 3.',
    content: '왁트모르즈비',
    title: '새로운 텍스쳐 팩 설치! 더 이뻐진 왁트모르즈비 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 7화',
    episode: 7,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/557eet-b0-o/mqdefault.jpg',
    links: '557eet-b0-o'
  },
  {
    game: 'Minecraft',
    date: '2019. 8. 27.',
    content: '왁트모르즈비',
    title: '파주의 멸망 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 6화',
    episode: 6,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/MNyPaL3UEp4/mqdefault.jpg',
    links: 'MNyPaL3UEp4'
  },
  {
    game: 'Minecraft',
    date: '2019. 8. 15.',
    content: '왁트모르즈비',
    title: '파주의 위기 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 5화',
    episode: 5,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/9W9BEjVSHrw/mqdefault.jpg',
    links: '9W9BEjVSHrw'
  },
  {
    game: 'Minecraft',
    date: '2019. 7. 24.',
    content: '왁트모르즈비',
    title: '특급 트롤의 등장 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 4화',
    episode: 4,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/KvspPg3YIFk/mqdefault.jpg',
    links: 'KvspPg3YIFk'
  },
  {
    game: 'Minecraft',
    date: '2019. 7. 24.',
    content: '왁트모르즈비',
    title: '드러나는 진실 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 3화',
    episode: 3,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/ORheTcSEbKI/mqdefault.jpg',
    links: 'ORheTcSEbKI'
  },
  {
    game: 'Minecraft',
    date: '2019. 7. 14.',
    content: '왁트모르즈비',
    title: '불어오는 반란의 바람 - 마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 왁트모르즈비 2화',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/i2vKMonFnoA/mqdefault.jpg',
    links: 'i2vKMonFnoA'
  },
  {
    game: 'Minecraft',
    date: '2019. 6. 30.',
    content: '왁트모르즈비',
    title: '마인크래프트 초 대규모 도시 건설 초 장기 프로젝트 - 왁트모르즈비 1화',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/YLxl617xy6s/mqdefault.jpg',
    links: 'YLxl617xy6s'
  },
  {
    game: 'Minecraft',
    date: '2019. 6. 22.',
    content: '건축콘테스트',
    title: '보시면 무슨 롤챔프인지 아시겠습니까? - 마인크래프트 롤 챔피언 콘테스트',
    episode: 2,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/fNuPx-b3a5M/mqdefault.jpg',
    links: 'fNuPx-b3a5M'
  },
  {
    game: 'Minecraft',
    date: '2019. 6. 9.',
    content: '왁트모르즈비',
    title: '마인크래프트 초대규모 도시 건설 프로젝트 - 왁트모르즈비 예고편',
    episode: 0,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/nxPFZPjVYOI/mqdefault.jpg',
    links: 'nxPFZPjVYOI'
  },
  {
    game: 'Minecraft',
    date: '2019. 6. 7.',
    content: '건축콘테스트',
    title: '게임 속에 들어가서라도 살고 싶은 집 - 마인크래프트 건축물 콘테스트',
    episode: 1,
    participants: [
      'wakgood',
      '시청자들',
    ],
    thumbnail: 'https://img.youtube.com/vi/nSSGMu163F0/mqdefault.jpg',
    links: 'nSSGMu163F0'
  },
]