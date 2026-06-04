import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getMovies } from '../apis/movies.ts'

export function useMovies() {
  const query = useQuery({ queryKey: ['movies'], queryFn: getMovies })
  return {
    ...query,
    // Extra queries go here e.g. addMovie: useAddMovie()
  }
}

export function useMoviesMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
  })

  return mutation
}
