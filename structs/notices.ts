export interface Notice {
  id: number
  title: string
  comments?: number
  date: string
  view: number
  likes: number
  writer: string
}

export interface NoticesAPI {
  page: number
  tab: number
  pages: number[]
  list: Notice[]
  error?: string
  next: boolean
  previous: boolean
}