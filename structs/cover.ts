import { IsedolMemberID } from "./member";

interface YouTubeVideo {
  title: string;
  thumbnail?: string;
  id: string;
}

export const IsedolCover: YouTubeVideo[] = [
  {
    title: "It's Beginning To Look A Lot Like Christmas",
    id: "kNPykP_9wOQ",
  },
  {
    title: "티파리 생제르망 공식 응원가",
    id: "XMRzgnqVT5s",
  },
  {
    title: "투니버스 메들리",
    id: "OTkFJyn4mvc",
  },
  {
    title: "장난기 기능",
    id: "fU8picIMbSk",
  },
];

export const IsedolOriginalSong: YouTubeVideo[] = [
  {
    title: "이세돌 싸이퍼 - ISEGYE IDOL CYPHER",
    id: "Empfi8q0aas",
  },
  {
    title: "But You Want More",
    id: "VcvMQ9MZhF8",
  },
];

export const MemberCover: Record<IsedolMemberID, YouTubeVideo[]> = {
  ine: [
    {
      title: "[MV] 신호등(Traffic light) Cover by 아이네 INE",
      id: "7IcafhbXprU",
    },
    {
      title: "[Audio] 그냥노창 - 없는계절 (Feat. 아이네, C JAMM, YUNHWAY)",
      id: "NVm8Uzai9HY",
    },
    {
      title: "부엉이 フクロウ",
      id: "YZoeO3T7hsc",
    },
    {
      title: "스즈미야 하루히의 우울 - God knows...",
      id: "-in8F0zmLcM",
    },
    {
      title: "선우정아 - 고양이 (with 비챤)",
      id: "4xZYZTWH0qk",
    },
    {
      title: '"Here Comes a Thought" - Steven Universe',
      id: "TeC8sgoCOfc",
    },
    {
      title: "라이브 플레이리스트",
      id: "H4bhRn2c8Cc",
    },
    {
      title: "연습실 1절 라이브 모음",
      id: "_klX8vJo4Co",
    },
    {
      title: "아이묭(あいみょん) - 마리골드(マリーゴールド)",
      id: "KoNBf6IT0k0",
    },
    {
      title: "아이유 - 라일락 (Citypop Remix)",
      id: "mGEFsIM5TvE",
    },
    {
      title: "아이유 - 봄 안녕 봄",
      id: "oUcoC7V6tgw",
    },
  ],
  jingburger: [
    {
      title: '[MV] ( )I-DLE - "TOMBOY "ㅣCover by 징버거(feat. 고세구)',
      id: "kra0f71EIgc",
    },
    {
      title: "[MV] '봄날 (Spring Day)' 왁타버스 COVER - BTS (방탄소년단)",
      id: "Mn5ZwEFKBc4",
    },
    {
      title: "Bob soul (감동주의) - 팬메이드 Remix",
      id: "kqP99vROKno",
    },
    {
      title: "eight(에잇) - (징버거 x 비밀소녀 x ??? COVER)",
      id: "lQIdaZgK56A",
    },
    {
      title: "슈퍼참치(SUPER TUNA) COVER",
      id: "Q0LWEyWI8-E",
    },
    {
      title: "킬리만자로의 표범 cover",
      id: "vYepDd1QTAs",
    },
    {
      title: "Choose me (Korean Cover.)",
      id: "G0g3d6b5CZM",
    },
    {
      title: "JUST 4 U...",
      id: "kUxzmSyxwzQ",
    },
    {
      title: "YEE",
      thumbnail: "https://img.youtube.com/vi/5WuQZKT05Vs/mqdefault.jpg",
      id: "5WuQZKT05Vs",
    },
    {
      title: "온유, 이진아 - 밤과 별의 노래",
      id: "YJnDwPq2SZc",
    },
    {
      title: "아이유 - 잔소리",
      id: "KmOMHxhz4t0",
    },
    {
      title: "おめシス × YuNi - Happy Halloween",
      id: "zjZpfpRkHJs",
    },
    {
      title: "호쇼마린 - Ahoy!! 우리는 버거해적단☆",
      id: "7E_cZ9eU3ZE",
    },
    {
      title: "PRODUCE 48 - 내꺼야",
      id: "SQR0tzDvSVU",
    },
  ],
  lilpa: [
    {
      title: "달의하루 - 너로피어오라",
      id: "8tJb1YlMHfA",
    },
    {
      title: "세계는 사랑에 빠져있어(世界は恋に落ちている)",
      id: "1UbyyaDc8x0",
    },
    {
      title: "Never Enough (The Greatest Showman OST)",
      id: "oRiQHxft2mY",
    },
    {
      title: "에픽세븐 OST - Promise",
      id: "6hEvgKL0ClA",
    },
    {
      title: "Chicago - Roxie",
      id: "WS-bGFcPf9I",
    },
    {
      title: "LiSA - 불꽃 (炎)",
      id: "FAEARaip0rM",
    },
  ],
  jururu: [
    {
      title: `"Ju. T'aime" - 주르르의 10만 기념 언리얼 콘서트`,
      id: "wmbN3BPIUbQ",
    },
    {
      title: "[MV] M@STERPIECE (Korean Cover.)｜Cover by 주르르",
      id: "X7cO4xQ5Gqs",
    },
    {
      title:
        "합방이 오잖아 (해루석 X 주르르 COVER) - (원곡 : 눈이오잖아 이무진x헤이즈)",
      id: "TQqu1ZsvVFo",
    },
    {
      title: "TWICE - SCIENTIST (feat. 아이네)",
      id: "rFxJjpSeXHI",
    },
    {
      title: "Choose me (Korean Cover.)",
      id: "G0g3d6b5CZM",
    },
    {
      title: "M@STERPIECE, 아틀란티스 소녀",
      id: "WItY2T5zz1A",
    },
    {
      title: "호쇼마린 - Ahoy!! 우리는 호쇼해적단☆",
      id: "8kuevWdt01M",
    },
  ],
  gosegu: [
    {
      title: "[MV] 귀멸의사춘기 _ Naman, Hong(나만, 홍련화)｜COVER by 고세구",
      id: "SAJrAQGvOHE",
    },
    {
      title: "[FAN ANIME] 후라이의 꿈 - 고세구",
      id: "gT3HKgVJuRQ",
    },
    {
      title: "대한민국 3대 돈까스: 스윙스, 우왁굳, 고세구",
      id: "mnX-cmDYCh0",
    },
    {
      title: "시청자 24000명과 함께한 VR 콘서트!",
      id: "KdWPnX7HVCY",
    },
    {
      title: "고세구의 롤모델송",
      id: "txw3CmawGd0",
    },
    {
      title: "고세구의 출근송",
      id: "9ZGLN_qT8cE",
    },
    {
      title: "팬서비스 - mona [HoneyWorks]",
      id: "DPEtmqvaKqY",
    },
    {
      title: "천양 다이노스 공식 응원가",
      id: "5aIUBhw7CVc",
    },
    {
      title: "별이 되지 않아도 돼 - 109",
      id: "h5yU8WZsB9g",
    },
    {
      title: "뢴트게늄 - 노예",
      id: "_PJvRDp4S5s",
    },
    {
      title: "사쿠란보로 킹받게 하는 버츄얼 아이돌",
      thumbnail: "https://img.youtube.com/vi/7GyW2INMluY/mqdefault.jpg",
      id: "7GyW2INMluY",
    },
  ],
  viichan: [
    {
      title:
        "사랑은 은하수 다방에서 (Love in the Milky Way Café) - Cover by 비챤",
      id: "fzHJxq37cqI",
    },
    {
      title: "[MV] '봄날 (Spring Day)' 왁타버스 COVER - BTS (방탄소년단)",
      id: "Mn5ZwEFKBc4",
    },
    {
      title: "취기를 빌려 - 산들",
      id: "NVns4yRoTlU",
    },
    {
      title: "DAYBREAK FRONTLINE",
      id: "--Go33WYnqw",
    },
    {
      title: "Ahoy!! 우리는 비챤해적단☆ (COVER)",
      id: "g0jprFO8S_M",
    },
    {
      title: "천성의 약함 (Arrange.ver)",
      id: "nXcGESw6FZE",
    },
    {
      title: "로키 (ROKI)",
      id: "4dsMLdXpDOY",
    },
    {
      title: "Manic",
      id: "HxMz-4sBodY",
    },
    {
      title: "장산범",
      id: "8qGfUWchv50",
    },
    {
      title: "유령도쿄",
      id: "P-wOE92vfyk",
    },
    {
      title: "타마야 (TAMAYA)",
      id: "-X11qNjLGPY",
    },
    {
      title: "Rumor",
      thumbnail: "https://img.youtube.com/vi/1f0KwkGLXr0/mqdefault.jpg",
      id: "1f0KwkGLXr0",
    },
    {
      title: "포니 (phony) / COVER ✦",
      id: "GragY5EAtrM",
    },
    {
      title: "League of Legends - Legends Never Die",
      id: "yp-AMt9cpUE",
    },
    {
      title: "Henceforth",
      id: "xBiOm4-fkU4",
    },
    {
      title: "Starduster",
      id: "oFCT-7KEWhU",
    },
    {
      title: "Lemon",
      thumbnail: "https://img.youtube.com/vi/Q14LWSckkPg/mqdefault.jpg",
      id: "Q14LWSckkPg",
    },
    {
      title: "텔레캐스터 비보이",
      id: "oHT3SuM78Ew",
    },
    {
      title: "플라토닉 러브",
      id: "Hr26SWCKZrc",
    },
    {
      title: "내일 또 보자",
      id: "zlESDaNUAR8",
    },
    {
      title: "오니가 없는 사이에",
      id: "F_UyHfLhxPY",
    },
    {
      title: "뫼비우스 (Möbius)",
      thumbnail: "https://img.youtube.com/vi/wEZAQxRXyT4/mqdefault.jpg",
      id: "wEZAQxRXyT4",
    },
    {
      title: "사랑을 전하고 싶다던가",
      id: "w1kTv8iUx9w",
    },
    {
      title: "아이보리",
      id: "fKZIZpxVAk0",
    },
    {
      title: "상상 포레스트",
      thumbnail: "https://img.youtube.com/vi/7e9o6cjwzGM/mqdefault.jpg",
      id: "7e9o6cjwzGM",
    },
    {
      title: "VORACITY",
      id: "yWYhbDUzIMM",
    },
    {
      title: "빌런",
      id: "QJ6HU-ya_VY",
    },
    {
      title: "알고 싶어",
      id: "ka5SzoD9FbU",
    },
    {
      title: "일각수",
      id: "0p2ihoAkYMM",
    },
    {
      title: "에리카 (Erica)",
      id: "VVYSlDVThMA",
    },
    {
      title: "p.h.",
      thumbnail: "https://img.youtube.com/vi/0JAwkZSQ5Fk/mqdefault.jpg",
      id: "0JAwkZSQ5Fk",
    },
    {
      title: "비밀",
      id: "kmE3aQitC9M",
    },
    {
      title: "보카 델라 베리타 (Bocca Della Verità)",
      thumbnail: "https://img.youtube.com/vi/EUIg7bDeK44/mqdefault.jpg",
      id: "EUIg7bDeK44",
    },
    {
      title: "Corruption",
      id: "SXDZ05bMQ2U",
    },
    {
      title: "8.32",
      thumbnail: "https://img.youtube.com/vi/USiiNvCvqOo/mqdefault.jpg",
      id: "USiiNvCvqOo",
    },
    {
      title: "금목서",
      id: "xKmnClSvmOI",
    },
    {
      title: "언그레이 데이즈 (Ungray days)",
      id: "4shCqYE7G8I",
    },
    {
      title: "투백합",
      id: "ACbaS3YxLZk",
    },
    {
      title: "시간의 무희",
      thumbnail: "https://img.youtube.com/vi/yyf7lNBp3bU/mqdefault.jpg",
      id: "yyf7lNBp3bU",
    },
  ],
};
