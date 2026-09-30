export type Show = {
  id: number
  name: string
  genres: string[]
  status: string
  premiered: string
  rating: number | null
  imageUrl: string
  summary: string
  language: string
  network: string
}

export type RawShow = {
  id: number
  name: string
  genres: string[]
  status: string | null
  premiered: string | null
  rating: {
    average: number | null
  }
  image: {
    medium: string
    original: string
  } | null
  summary: string | null
  language: string | null
  network: {
    name: string
  } | null
  webChannel: {
    name: string
  } | null
}
