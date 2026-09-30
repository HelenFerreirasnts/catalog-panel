import { getShows } from '@/services/show/get-shows.service'
import { useQuery } from '@tanstack/react-query'

export const showsQueryKey = ['shows', 'original-posters']

export const useGetShows = () => {
  return useQuery({
    queryKey: showsQueryKey,
    queryFn: getShows,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
