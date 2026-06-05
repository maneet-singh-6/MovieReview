import { useState } from 'react'
import { Link } from 'react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { searchMovies } from '../apis/imdb'
import { getMovies, addMovie } from '../apis/movies'
import { Movie } from '../../models/index.ts'
import type { ImdbMovie } from '../../models/imdb'

function MoviesList() {
  const queryClient = useQueryClient()
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Search query based on API
  const {
    data: searchedMovies,
    isLoading,
    isError,
  } = useQuery<ImdbMovie[]>({
    queryKey: [searchTerm],
    queryFn: () => searchMovies(searchTerm),
  })

  // Local database
  const { data: dbMovies } = useQuery<Movie[]>({
    queryKey: ['dbMovies'],
    queryFn: getMovies,
  })

  // Put movie to db
  const addMovieMutation = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dbMovies'] })
      setSearchInput('')
      setSearchTerm('')
    },
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchTerm(searchInput)
  }

  const handleReset = () => {
    setSearchInput('')
    setSearchTerm('')
  }

  const handleSelectMovie = (movie: ImdbMovie) => {
    const newMovie = {
      name: movie.primaryTitle,
      duration: movie.startYear,
      category: 'Later!',
      poster: movie.primaryImage?.url || '',
    }
    addMovieMutation.mutate(newMovie)
  }

  // const movies: Movie[] = [
  //   { id: 1, name: 'Kung Fu Panda', category: 'Family', duration: 92 },
  //   { id: 2, name: 'Ready Player One', category: 'Sci-fi', duration: 140 },
  //   { id: 3, name: 'Avatar', category: 'Sci-fi', duration: 162 },
  // ]

  return (
    <div className="layout">
      <div className="review-header">
        <h1>Movies List</h1>

        <div className="search-bar">
          <form onSubmit={handleSearch} className="search-actions">
            <input
              type="text"
              placeholder="Search and Add a movie"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </form>

          {searchedMovies && searchedMovies.length > 0 && (
            <div className="dropdown">
              {searchedMovies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleSelectMovie(movie)}
                  className="dropdown-list"
                >
                  {movie.primaryTitle} ({movie.startYear})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="loading-state">
        {isLoading && <p>Loading movies...</p>}
        {isError && <p>Error: Fetching Movies</p>}
      </div>

      <ul className="movie-list">
        {dbMovies &&
          dbMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <li>
                {movie.name} ({movie.duration}){/* {movie.category} */}
                <img
                  src={movie.poster}
                  alt={`${movie.name} poster`}
                  className="poster"
                />
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}

export default MoviesList
