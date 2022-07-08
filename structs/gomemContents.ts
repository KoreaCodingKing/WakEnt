import { GomemMemberID } from "./member";

export type GomemContentsType = "Songs" | "Contents";

export interface GomemContents {
  type: GomemContentsType;
  title: string;
  links: string;
  date: string;
}

export const gomemContents: Record<GomemMemberID, GomemContents[]> = {
  SecretGirl: [
    {
      type: "Songs",
      title: "에픽하이 - 우산 COVER",
      links: "T84CDxlwsXw",
      date: "22.06.28",
    },
    {
      type: "Contents",
      title: "소피아님은 절도 하고 싶어",
      links: "IxWytqffgMs",
      date: "22.06.26",
    },
    {
      type: "Songs",
      title:
        "사랑하긴 했었나요 스쳐가는 인연이었나요 짧지않은 우리 함께했던 시간들이 자꾸 COVER (1절)",
      links: "1cJb_AXWWOE",
      date: "22.06.06",
    },
    {
      type: "Songs",
      title: "올드 타운 로드 - 풍신 X 캘리칼리데이비슨 COVER",
      links: "fYMeb2ODFUE",
      date: "22.05.28",
    },
    {
      type: "Contents",
      title: "공주 - 짧타버스 #Shorts",
      links: "crn_5z6BDUY",
      date: "22.04.24",
    },
    {
      type: "Songs",
      title: "[비밀소녀] 카드캡터비소 오프닝",
      links: "ByG12DFO9OI",
      date: "22.04.01",
    },
    {
      type: "Songs",
      title: "[MV] eight(에잇) - (징버거 x 비밀소녀 x ??? COVER) - IU(아이유)",
      links: "lQIdaZgK56A",
      date: "22.02.28",
    },
    {
      type: "Songs",
      title:
        "저세계아이돌 - 이세돌 리와인드 (이세계아이돌 RE:WIND) | 왁타버스 VR챗(VRChat) MV",
      links: "QC1LTWTFNwg",
      date: "22.02.10",
    },
    {
      type: "Songs",
      title: "Still I Love You (비소 COVER) - 놀면뭐하니 토요태",
      links: "mAjM1z_Quw0",
      date: "22.01.23",
    },
    {
      type: "Songs",
      title: "VR 가상세계에서 만난 아름다운 한국 (아름다운 나라 COVER)",
      links: "wbfjVHKTuXk",
      date: "22.01.03",
    },
    {
      type: "Songs",
      title: "Text Me Merry Christmas - 루비 (해루석 x 비밀소녀)│COVER",
      links: "IWJaAO8ZVmw",
      date: "21.12.25",
    },
    {
      type: "Songs",
      title:
        "불협화음 (권민, 비밀소녀, 단답벌레) COVER - (AKMU, 머드더스튜던트)",
      links: "pWiiZkgD1Nk",
      date: "21.12.16",
    },
    {
      type: "Songs",
      title:
        'IU (아이유) - Friday (금요일에 만나요) - 해루석 x 비밀소녀 "루비" cover',
      links: "OBSCvhgRgSk",
      date: "21.10.16",
    },
    {
      type: "Songs",
      title: "써니힐 - MIDNIGHT CIRCUS (망령서커스) COVER",
      links: "cMtHnjDJ2X8",
      date: "21.10.10",
    },
  ],
  FriedShrimp: [
    {
      type: "Songs",
      title:
        "[나는 나비] 자동차 노래방 (드래프트 어필영상) 무저작권(새우튀김 고멤가요 어필)",
      links: "-kkJuMcrPsU",
      date: "22.06.06",
    },
    {
      type: "Songs",
      title: "봄이 좋냐 (새우튀김, 부정형인간)",
      links: "1j1AtA4LGXw",
      date: "22.05.05",
    },
    {
      type: "Contents",
      title: "공포튀김 3편 도플갱어편",
      links: "nbNF4zgs9hA",
      date: "22.04.03",
    },
    {
      type: "Contents",
      title: "공포튀김 3편 도플갱어편",
      links: "rhpswTBJ-AQ",
      date: "22.03.25",
    },
    {
      type: "Contents",
      title: "좀비 [짧타버스]",
      links: "H4sM7nCaelU",
      date: "22.03.08",
    },
    {
      type: "Contents",
      title: "우왁굳의 페리도트 그린 원본 (새우튀김) Peridot Green m340i",
      links: "ZLCAZF_zZ6E",
      date: "22.01.18",
    },
    {
      type: "Songs",
      title: "회전모자 - (새우튀김, 권민) (회전목마 cover)",
      links: "1HyWW4tZcP4",
      date: "21.12.07",
    },
    {
      type: "Contents",
      title: "공포튀김 2편 층간소음편",
      links: "QCwLmdFyRrU",
      date: "21.10.11",
    },
    {
      type: "Contents",
      title: "공포튀김 1편 연구실",
      links: "1eiCbkSunsE",
      date: "21.10.07",
    },
  ],
  MitsuneHaku: [
    {
      type: "Songs",
      title:
        "[ 고멤가요제 ] 미츠네하쿠 드래프트 어필 영상(미츠네 하쿠 고멤가요제 어필)",
      links: "X-7l1vGxy3Q",
      date: "22.06.06",
    },
    {
      type: "Songs",
      title: "【5K】 🌞SUMMER TIME😎 - [미츠네 하쿠 x 왁컬로이두]",
      links: "-ZFDUHgF48U",
      date: "22.05.31",
    },
    {
      type: "Songs",
      title: "🎵미츠네 하쿠 - 너만 있으면 (Cover)",
      links: "Zkk2k1NVj4Q",
      date: "22.05.28",
    },
    {
      type: "Songs",
      title: "[MV] 하쿠 (새우튀김 x 미츠네하쿠)",
      links: "yYHKUyPrc24",
      date: "22.03.19",
    },
    {
      type: "Songs",
      title:
        "그란랜드 : 재미있는 그란투리스모 - [우왁굳 리믹스] 미츠네하쿠 커버",
      links: "jQaydrlKaCc",
      date: "22.03.19",
    },
    {
      type: "Songs",
      title: "愛言葉Ⅲ (사랑의 말Ⅲ)｜팬 헌정영상 [미츠네 하쿠 cover]",
      links: "hkbcjLNWvbI",
      date: "22.03.03",
    },
    {
      type: "Songs",
      title:
        "【4K】 🍫미리 발렌타인데이: 드리밍 츄츄♥ [미츠네 하쿠x왁컬로이두 COVER] - (Dreamin Chuchu / どりーみんチュチュ)(MEGURINE LUKA)",
      links: "tZtskWzmpXs",
      date: "22.02.11",
    },
    {
      type: "Songs",
      title:
        "【불러보았다】 스타 나이트 스노우/ 하츠네미쿠 (Covered by 미츠네 하쿠)",
      links: "uTVfPC6gfjs",
      date: "21.12.28",
    },
    {
      type: "Songs",
      title: "RHYTHM - 미츠네 하쿠 (DECO*27 - リズム COVER feat. 初音ミク)",
      links: "48Cx8MRU5fk",
      date: "21.12.12",
    },
    {
      type: "Songs",
      title:
        "2021 수능 응원곡 QUEST (독고혜지x미츠네하쿠x비밀소녀) (원곡:クエスト - れるりり)",
      links: "zbUc-rCuXsY",
      date: "21.11.14",
    },
    {
      type: "Songs",
      title: "급뱅종 선언 - 우왁굳 [ 미츠네하쿠 커버 ]",
      links: "dx5FosATagU",
      date: "21.10.06",
    },
  ],
  PoongSin: [
    {
      type: "Songs",
      title:
        "왁물원 프리터 (이태원 프리덤 COVER) - BF (비지니스킴,프리터) (ft.천양)",
      links: "2e8DKHpyoQ8",
      date: "22.07.05",
    },
    {
      type: "Songs",
      title: "우왁굳 고정멤버 가요제 드래프트 어필용(풍신 고멤가요제 어필)",
      links: "m326wXPW8H8",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "(우왁굳 고멤알람) 일어나 너는 고멤의 자존심이야",
      links: "eP3J3mruoZQ",
      date: "22.05.05",
    },
    {
      type: "Contents",
      title: "마법 1",
      links: "UUUR0OdUeMo",
      date: "22.04.29",
    },
    {
      type: "Songs",
      title: "파티피플 풍띤",
      links: "1PVGHW2xuI4",
      date: "22.04.29",
    },
    {
      type: "Songs",
      title: "[노래 MV] 느그봄 4K",
      links: "PkvXQo8z1nE",
      date: "22.04.15",
    },
    {
      type: "Songs",
      title: "LEON (레옹) - 비밀소녀 x 풍신 COVER - (IU)",
      links: "U8i637tKoIY",
      date: "22.03.18",
    },
    {
      type: "Contents",
      title: "마법인들의 밤",
      links: "xsreZWFL68o",
      date: "22.03.16",
    },
    {
      type: "Contents",
      title: "불판",
      links: "wH7VwAZKzUg",
      date: "22.03.15",
    },
    {
      type: "Contents",
      title: "풍신과 왁파고의 분노키친",
      links: "Nm9G8-L2ePs",
      date: "22.02.14",
    },
    {
      type: "Contents",
      title: "풍신과 왁파고의 분노키친",
      links: "eRG2ss2jUlM",
      date: "22.01.15",
    },
    {
      type: "Contents",
      title: "내가 없어져볼게",
      links: "4FpYn2btDQY",
      date: "21.12.17",
    },
    {
      type: "Contents",
      title: "풍신의 생일잔치",
      links: "cPwBsHSuY3k",
      date: "21.09.28",
    },
  ],
  DrDopamine: [
    {
      type: "Contents",
      title: "도루",
      links: "B69akupWCEs",
      date: "22.07.02",
    },
    {
      type: "Contents",
      title: "띠용띠용 으이으이",
      links: "p100OXhV2as",
      date: "22.04.05",
    },
    {
      type: "Contents",
      title: "예의",
      links: "nC9iZEE-R5U",
      date: "22.03.21",
    },
    {
      type: "Contents",
      title: "음악",
      links: "56vkuNDeBAU",
      date: "22.03.17",
    },
    {
      type: "Contents",
      title: "[도파민의 발명품] 공간이동장치",
      links: "zJKrDgFSqyI",
      date: "22.02.02",
    },
    {
      type: "Songs",
      title: "이세계 아이도파민 COVER by 도파민박사 - (이세계아이돌 RE : WIND)",
      links: "lZlZ9VVjJVo",
      date: "21.12.29",
    },
    {
      type: "Contents",
      title: "팬 싸인회",
      links: "jaIWS5IPRZU",
      date: "21.12.19",
    },
    {
      type: "Contents",
      title: "빼빼로데이",
      links: "ioSb7TZrjnI",
      date: "21.11.11",
    },
    {
      type: "Contents",
      title: "장례식",
      links: "dDF5LZCwRog",
      date: "21.10.17",
    },
    {
      type: "Contents",
      title: "레파민박사의 탄생 비화",
      links: "YPrwx3buOpg",
      date: "21.09.27",
    },
    {
      type: "Contents",
      title: "도파민의 추석인사",
      links: "W-d_hAq0E_A",
      date: "21.09.20",
    },
    {
      type: "Contents",
      title: "도파민의 생일축하",
      links: "3phsOJL8nOs",
      date: "21.09.12",
    },
  ],
  HikiKing: [
    {
      type: "Contents",
      title: "볼링치고 짜장면 먹기",
      links: "yUT8CclEhCQ",
      date: "22.06.16",
    },
    {
      type: "Songs",
      title: "[4K] BTS 방탄소년단 'Butter'ㅣCover by 히키킹",
      links: "22Gguht_plk",
      date: "22.06.11",
    },
    {
      type: "Contents",
      title: "돌아온 히키킹의 생일 파티 (VR챗)",
      links: "Leu7WphtCbQ",
      date: "22.05.03",
    },
    {
      type: "Contents",
      title: "우왁굳님 디코좀..노창 (히키킹) sAewoo - Whatever | 가녹음 실패작",
      links: "I92GTsOVG7E",
      date: "22.04.18",
    },
    {
      type: "Songs",
      title: "안녕",
      links: "lH2PAQheUkc",
      date: "22.02.19",
    },
    {
      type: "Songs",
      title: "클릭금지 드리밍 츄츄",
      links: "Yo0Vvc_HUl0",
      date: "22.02.16",
    },
    {
      type: "Songs",
      title: "마음에 드시는 대로 - Eve | 왁타버스 히키킹 VR챗",
      links: "s0yg_q73c-w",
      date: "22.01.07",
    },
    {
      type: "Contents",
      title: "2022 왁타버스 새해 뉴스 - VR챗 히키퀸 소아온 소드아트온라인",
      links: "RlwmwWoyqdE",
      date: "22.01.02",
    },
    {
      type: "Contents",
      title: "히키킹이 주는 크리스마스 선물 / VR챗 VRChat Hiki King",
      links: "mbcteLoIpVY",
      date: "21.12.25",
    },
    {
      type: "Contents",
      title:
        "이세돌 리와인드 개같이 커버(이세계아이돌 RE:WIND)히키킹 - VR챗(REWIND)",
      links: "y4TPkdQgEDE",
      date: "21.12.24",
    },
    {
      type: "Songs",
      title:
        "이세돌 리와인드 개같이 커버(이세계아이돌 RE:WIND)히키킹 - VR챗(REWIND)",
      links: "y4TPkdQgEDE",
      date: "21.12.24",
    },
    {
      type: "Contents",
      title:
        "불협화음 - 망해버린,이세돌(이찬혁 파트)히키킹.cover - Mudd the student, AKMU (머드 더 스튜던트, 악뮤) 왁타버스 - VR챗 VRCHAT",
      links: "DSERnRglRsE",
      date: "21.12.15",
    },
    {
      type: "Songs",
      title: "히키퀸 스타즈 응원가 치어리딩(질풍가도)ft.빵누나",
      links: "yaWHF7Rfm4c",
      date: "21.12.12",
    },
    {
      type: "Contents",
      title: "히키킹 추석날 한복 그랜절 ( VR챗 VRChat ) 히키퀸",
      links: "iHGE-MbWEk8",
      date: "21.09.23",
    },
    {
      type: "Contents",
      title: "사쿠란보 히키킹 이세돌 지원 ( VR챗 VRChat )",
      links: "k0FahyE06C0",
      date: "21.07.10",
    },
    {
      type: "Contents",
      title: "흑화한 히키킹 ( VR챗 VRChat )",
      links: "B5-mDz_aYcw",
      date: "21.07.08",
    },
  ],
  HaeruSeok: [
    {
      type: "Songs",
      title: "윤종신 - 지친하루(with 곽진언, 김필) 해루석 Cover",
      links: "H_W_u4q5KuQ",
      date: "22.06.28",
    },
    {
      type: "Contents",
      title: "고백으로 혼내주기 지원영상",
      links: "d6cWpB_nGoA",
      date: "22.06.24",
    },
    {
      type: "Songs",
      title: "치즈 - Mood Indigo ( 비밀소녀x해루석 cover )",
      links: "M7CvycHOizg",
      date: "22.04.03",
    },
    {
      type: "Contents",
      title: "두려움의 도래",
      links: "-_P9X_5SIMk",
      date: "22.03.24",
    },
    {
      type: "Songs",
      title:
        "합방이 오잖아 (해루석 X 주르르 COVER) - (원곡 : 눈이오잖아 이무진x헤이즈)",
      links: "TQqu1ZsvVFo",
      date: "22.03.18",
    },
    {
      type: "Songs",
      title: "물들어",
      links: "_s0gnKlzrlE",
      date: "22.02.27",
    },
    {
      type: "Songs",
      title: "【해루석 x 비밀소녀】 Dream (루비 COVER) - (수지,백현)",
      links: "zUc05XknaIk",
      date: "22.02.06",
    },
    {
      type: "Contents",
      title: "절규",
      links: "G2eGuH8XyYA",
      date: "21.10.13",
    },
    {
      type: "Contents",
      title: "우왁굳 퀘스트2 영업용영상",
      links: "ome9VJ9qx9o",
      date: "21.09.16",
    },
    {
      type: "Songs",
      title: "그 눈을 떠",
      links: "z3yXn_zzY74",
      date: "21.09.15",
    },
  ],
  Wakpago: [
    {
      type: "Contents",
      title: "고멤가요제 어필영상 [실패작](왁파고 고멤가요제 어필)",
      links: "2aY864dkzDs",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "아기상어 - 과학패밀리 COVER",
      links: "PrIJIOrldko",
      date: "22.05.26",
    },
    {
      type: "Contents",
      title: "고멤들은 크리스마스에 뭘 했을까",
      links: "m9JF2qyRtVc",
      date: "21.12.27",
    },
    {
      type: "Contents",
      title: "2021_10_08_가족",
      links: "0KWHzL1rLgE",
      date: "21.10.12",
    },
  ],
  GwakChoonSik: [
    {
      type: "Songs",
      title:
        "상병화 [고멤 가요제 어필영상] (상사화 cover)(곽춘식 고멤가요제 어필)",
      links: "eZWyxSxCPPM",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "마지막재회...?!",
      links: "nzlqtkvQ6lY",
      date: "22.06.01",
    },
    {
      type: "Songs",
      title: "곽춘식-화면을 봤네(M/V)",
      links: "zF6rKEyEhMs",
      date: "22.05.11",
    },
    {
      type: "Contents",
      title: "심야알바",
      links: "1-CTNDOaHpw",
      date: "22.05.04",
    },
    {
      type: "Songs",
      title: "NERD VERSE (너드 벌스) - 곽춘식, 히키킹, 권민",
      links: "cWDbKPXZzbw",
      date: "22.04.07",
    },
    {
      type: "Contents",
      title: "내가고멤이될상인가-관상(패러디)",
      links: "y84k7H1JmLk",
      date: "22.03.12",
    },
    {
      type: "Songs",
      title: "김건모 서울의달 -(춘파민 COVER)",
      links: "KJEpzXX6Ixk",
      date: "22.02.15",
    },
    {
      type: "Contents",
      title: "망령싸이퍼 (Beat by Vizard Beatz)",
      links: "i74HoQLxL3k",
      date: "22.01.22",
    },
    {
      type: "Contents",
      title: '"보여줘 너의 모자람이없는실력을" JUST DO IT(하면된다)',
      links: "BiaPbQ6EwgM",
      date: "21.11.29",
    },
    {
      type: "Contents",
      title: "[PTSMR] 여러분들을재워드립니다 *asmr* (고혈압 시청주의)",
      links: "ywlKgDTGsf8",
      date: "21.11.05",
    },
    {
      type: "Songs",
      title: "이망령의 편지 (이등병의 편지 cover)",
      links: "U7w33zYgfNw",
      date: "21.10.24",
    },
  ],
  DokgoHyeji: [
    {
      type: "Contents",
      title: "고멤 가요제 드래프트 어필 영상(독고혜지 고멤가요제 어필)",
      links: "qqlvYkeIXVE",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "But You Want More 안무연습 비하인드 혜지x릴파",
      links: "zpHa0_AQnZ4",
      date: "22.05.16",
    },
    {
      type: "Contents",
      title: "혜지의 광고촬영 브이로그 Vlog",
      links: "evVXDgMNoNo",
      date: "22.05.02",
    },
    {
      type: "Songs",
      title: "We Ride - 독고혜지 (ft.천양)",
      links: "1CaYJAf97AQ",
      date: "22.04.02",
    },
    {
      type: "Contents",
      title: "[짧타버스] 과외",
      links: "cKd3Wh03Kn4",
      date: "22.03.24",
    },
    {
      type: "Contents",
      title: "혜지의 겨울방학 이야기 | DWW - Look At My Body Dance",
      links: "Dhoau5HGExE",
      date: "22.01.19",
    },
    {
      type: "Contents",
      title: "혜지의 느그중고교 쉬는시간 | 왁타버스 High school student vlog",
      links: "YdUAehoc4b0",
      date: "21.11.07",
    },
    {
      type: "Contents",
      title: "혜지의 느그중고교 일상 | 왁타버스 High school student vlog",
      links: "jrWB8ysAHJw",
      date: "21.10.26",
    },
  ],
  DeokSuLee: [
    {
      type: "Contents",
      title: "발로란트 화면전환",
      links: "v0wP-y9x2qA",
      date: "22. 07. 07.",
    },
    {
      type: "Contents",
      title: "발로란트 팀원소개",
      links: "4sFN-gUtSZ4",
      date: "22. 07. 07.",
    },
    {
      type: "Contents",
      title: "고정멤버.가요제.드래프트(이덕수할아바이 고멤가요제 어필)",
      links: "7iIPEWO-CjY",
      date: "22. 06. 06.",
    },
    {
      type: "Songs",
      title:
        "봄여름가을겨울 - (이덕수할아바이,뢴트게늄,곽춘식,천양 COVER) (BIGBANG Still Life)",
      links: "3vcr_W0tHeQ",
      date: "22. 06. 03.",
    },
    {
      type: "Songs",
      title: "TL&D 틀앤디 (이덕수 & 독고혜지)",
      links: "YV0xUoUnv_o",
      date: "22.05.17",
    },
    {
      type: "Songs",
      title: "이덕수 할아바이 - Memories of the last night (마지막 밤의 추억)",
      links: "4G06wJv76Go",
      date: "21.12.30",
    },
    {
      type: "Contents",
      title: "도둑이 들어왔을 때 현명한 대처법",
      links: "IaxzSXWgXiI",
      date: "21.11.17",
    },
    {
      type: "Contents",
      title: "[독거한 미식가] 냉동 삼겹살",
      links: "EWbUpwxYxsM",
      date: "21.10.31",
    },
  ],
  KimchiMandoo: [
    {
      type: "Contents",
      title: "이세계아이돌 주르르 생일 기념 3D 피규어 프로젝트",
      links: "A6YJSG4RBFw",
      date: "22.06.10",
    },
    {
      type: "Contents",
      title: "제 1회 [망령대통령] 선거 결과 발표",
      links: "3BQu0QPT0oQ",
      date: "22.03.10",
    },
    {
      type: "Contents",
      title: "망령비상대책위원회",
      links: "87EFaVrqTcs",
      date: "22.03.08",
    },
    {
      type: "Songs",
      title:
        '12월의로망스 - 유리상자 cover - 김치만두번영택사스가 x 단답벌레 "단김" (Chorus.부정형인간)',
      links: "Nb2OSuSuw3w",
      date: "22.02.22",
    },
    {
      type: "Songs",
      title: "빌런 - 길바닥햇님송이 cover",
      links: "DyaySl3ZeGg",
      date: "21.11.07",
    },
  ],
  NegativePerson: [
    {
      type: "Songs",
      title: "부정형인간 스토커-어필영상(부정형인간 고멤가요제 어필)",
      links: "4AEXnkG1Z0A",
      date: "22.06.06",
    },
    {
      type: "Songs",
      title: "고멤 사이퍼 3기 (프리터, 융터르, 비지니스킴) - WoH",
      links: "aQhFdAnDDyM",
      date: "22.06.04",
    },
    {
      type: "Songs",
      title: "[MV]META Verse",
      links: "Ah3YCCLy67A",
      date: "22.02.17",
    },
    {
      type: "Songs",
      title: "도파민박사 응원가",
      links: "-nbIJfe2Xds",
      date: "21.12.12",
    },
    {
      type: "Songs",
      title:
        "백예린 - 그건 아마 우리의 잘못은 아닐 거야 Cover by 부정형 인간 (Feat. 소피아) I [WF LIVE]",
      links: "UVsHCOfHHc4",
      date: "21.11.09",
    },
  ],
  Sophia: [
    {
      type: "Songs",
      title: "크립(소피아 고멤 가요제 어필)",
      links: "kfsWbc9NCIg",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "10만원으로 미국 여행을 갈 수 있다고? (관광 + 호텔 + 항공편 까지)",
      links: "NsCQev6AIc4",
      date: "22.06.07",
    },
    {
      type: "Contents",
      title: "이세돌 릴레이댄스 소피아 후기",
      links: "nxMO8ufrRG0",
      date: "22.05.17",
    },
    {
      type: "Contents",
      title: "소피아 새로운 아바타 최종 점검",
      links: "cvWlopT1RcM",
      date: "22.05.04",
    },
    {
      type: "Songs",
      title: "벚꽃엔딩 - 비소 COVER (버스커버스커)",
      links: "JGALcizede8",
      date: "21.04.21",
    },
    {
      type: "Songs",
      title: "Santa Claus is coming to town - 비소 COVER",
      links: "aRXfz2O0fhI",
      date: "21.12.24",
    },
    {
      type: "Contents",
      title: "당신이 연애를 못하는 이유",
      links: "TwPT2SKNuUU",
      date: "21.11.12",
    },
  ],
  BusinessKim: [
    {
      type: "Songs",
      title: "이브의 경고(비즈니스 킴 고멤가요제 어필)",
      links: "JsaWVJK8sMw",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "배달",
      links: "VWROG1b--Uk",
      date: "22.04.27",
    },
    {
      type: "Contents",
      title: "신입 융터르의 고민",
      links: "HeIE5WD-Vog",
      date: "22.03.30",
    },
    {
      type: "Songs",
      title: "펠리스 나비다",
      links: "xUq66Jk05RQ",
      date: "21.12.25",
    },
    {
      type: "Contents",
      title: "크리스마스 인사",
      links: "Qz3E0bEZuHg",
      date: "21.12.25",
    },
    {
      type: "Contents",
      title: "망령왕의 분노 - 시네마틱 영상",
      links: "5ZRnzQOSukw",
      date: "21.11.17",
    },
  ],
  KwonMin: [
    {
      type: "Songs",
      title: "[MV] '봄날 (Spring Day)' 왁타버스 COVER - BTS (방탄소년단)",
      links: "Mn5ZwEFKBc4",
      date: "22.04.08",
    },
    {
      type: "Songs",
      title: "좋니 COVER - 권민x두칠",
      links: "jjlieSDa1C0",
      date: "22.04.02",
    },
    {
      type: "Songs",
      title: "[MV] 【주르르→권민←징버거】 Choose min (Korean Cover.)",
      links: "yLj1eDpF5is",
      date: "22.01.31",
    },
  ],
  Dandap: [
    {
      type: "Songs",
      title: "어필(단답벌레 고멤가요제 어필)",
      links: "fqte63UEKgY",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "Bad - Ssipssang guys COVER (Christopher)",
      links: "kktjoH-LuKo",
      date: "22.05.28",
    },
    {
      type: "Songs",
      title:
        "Space Fantasy - 권박사 X 캘박사 (ft. 단답벌레) [이박사 - Space Fantasy COVER]",
      links: "EVoctDN7mww",
      date: "22.05.06",
    },
    {
      type: "Songs",
      title: "망령즈 - 에잇",
      links: "7H0J2mw5aQk",
      date: "22.03.18",
    },
  ],
  Roentgenium: [
    {
      type: "Songs",
      title:
        "「내가 죽으려고 생각한 것은 / 僕が死のうと思ったのは」┃Cover by Roentgenium",
      links: "I5sIwg3z-Yo",
      date: "22.06.12",
    },
    {
      type: "Contents",
      title: "뢴트게늄 고멤가요제 어필영상",
      links: "8-OasSTsqJg",
      date: "22.06.06",
    },
    {
      type: "Contents",
      title: "[짧타버스] 결투",
      links: "ZnluRL8z24Q",
      date: "22.04.01",
    },
  ],
  Freeter: [
    {
      type: "Songs",
      title: "프리터 고멤가요제 어필영상(프리터 고멤가요제 어필)",
      links: "nGup9bG8Ejc",
      date: "22.06.06",
    },
    {
      type: "Songs",
      title: "히키킹 헌정영상",
      links: "DCejdNBBjrk",
      date: "22.05.17",
    },
    {
      type: "Contents",
      title: "프리터 꼬리 떼기",
      links: "Ac8WuBzw5w8",
      date: "22.04.29",
    },
    {
      type: "Songs",
      title: "광대 (융터르, 프리터 COVER)",
      links: "Ps3vAIB3fYY",
      date: "22.04.17",
    },
    {
      type: "Contents",
      title: "프리터의 합방 대비 훈련",
      links: "HykQ5EjVptw",
      date: "22.03.17",
    },
    {
      type: "Contents",
      title:
        "이세계아이돌 (ISEGYE IDOL) 비챤_VIichan 취기를 빌려(Slightly Tipsy) Cover Reaction",
      links: "G98GU8zevTw",
      date: "22.03.17",
    },
  ],
  KarnarJungtur: [
    {
      type: "Songs",
      title: "[Misty Mountains Cold] (카르나르 융터르 고멤가요제 어필영상)",
      links: "dTX57-6CA1w",
      date: "22.06.06",
    },
  ],
  CallyCarly: [],
  DogCat: [],
  GilHatnimSongE: [],
};
