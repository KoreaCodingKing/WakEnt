export type Season = | '2022';

export interface Team {
  name: string
  teamImage: string
  member: string[] 
}

interface League {
  officialOpeningVideo: string
  team: Team[]
  playSet: {
    highLights: string[]
  }
};

export const LeagueList: Record<Season, League[]> = {
  '2022': [
    {
      officialOpeningVideo: '',
      team: [
        {
          name: 'Team 나머지',
          member: [
            '우왁굳',
            '주르르',
            '곽춘식',
            '해루석',
            '왁파고A'
          ]
        },
        {
          name: '빛과 어둠',
          member: [
            '징버거',
            '비 챤',
            '새우튀김70',
            '단답벌레',
            '부정형 인간'
          ]
        }
      ],
      playSet: {
        highLights: [
          ''
        ]
      }
    }
  ] as League[]
}