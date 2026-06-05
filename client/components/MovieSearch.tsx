import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '../apis/imdb'
import type { ImdbMovie } from '../../models/imdb'

function MovieSearch() {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<ImdbMovie[]>({
    queryKey: ['imdbSearch', searchTerm],
    queryFn: () => searchMovies(searchTerm),
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchTerm(searchInput)
  }

  return (
    <div>
      <h2>Search Movies</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading movies...</p>}
      {isError && <p>Error: Fetching Movies</p>}

      <div>
        {movies && movies.length === 0 && <p>No movies found.</p>}
        {movies?.map((movie) => (
          <div key={movie.id}>
            <h3>
              {movie.primaryTitle} ({movie.startYear})
            </h3>
            {movie.primaryImage?.url ? (
              <img
                src={movie.primaryImage.url}
                alt={`${movie.primaryTitle} poster`}
              />
            ) : (
              <p>No Image</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieSearch
