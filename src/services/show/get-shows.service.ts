import { api } from '@/services/api'
import type { RawShow, Show } from '@/services/show/show.types'

const PAGE_SIZE = 60

const stripHtml = (value: string | null) => {
  const text = value?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  if (!text) return 'Sinopse não disponível'
  return text
}

const mapShow = (show: RawShow): Show => {
  return {
    id: show.id,
    name: show.name,
    genres: show.genres,
    status: show.status ?? 'To Be Determined',
    premiered: show.premiered ?? '',
    rating: show.rating.average,
    imageUrl: show.image?.original ?? show.image?.medium ?? '',
    summary: stripHtml(show.summary),
    language: show.language ?? 'Idioma não informado',
    network: show.network?.name ?? show.webChannel?.name ?? 'Emissora não informada',
  }
}

export const getShows = async (): Promise<Show[]> => {
  const { data } = await api.get<RawShow[]>('/shows', {
    params: { page: 0 },
  })

  return data
    .filter((show) => Boolean(show.image?.original ?? show.image?.medium))
    .slice(0, PAGE_SIZE)
    .map(mapShow)
}
