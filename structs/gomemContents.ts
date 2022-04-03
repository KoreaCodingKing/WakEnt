import { GomemMemberID } from "./member"

export type GomemContentsType = 
 | 'songs'
 | 'constens'

interface gomemContents {
  type: GomemContentsType,
  title: string,
  links: string,
  member: GomemMemberID[]
}

const gomemContents: gomemContents[] = [
  {
    type: 'songs',
    title: 'zzz',
    links: 'zzzz',
    member: [
      'Dandap'
    ]
  }
]
