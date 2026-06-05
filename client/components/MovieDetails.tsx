import { Movie } from '../../models/index.js'

function MovieDetails() {
  const movie: Movie = {
    id: 3,
    name: 'Avatar',
    category: 'Sci-fi',
    duration: 162,
  }

  return (
    <div className="layout">
      <h1>Movie Details:</h1>
      <ul>
        <li>
          {movie.name}
          {movie.category}
          {movie.duration}
        </li>
      </ul>
    </div>
  )
}

export default MovieDetails
