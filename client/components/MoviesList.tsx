import { Movie } from '../../models/index.js'
import { Link } from 'react-router'

function MoviesList() {
  const movies: Movie[] = [
    { id: 1, name: 'Kung Fu Panda', category: 'Family', duration: 92 },
    { id: 2, name: 'Ready Player One', category: 'Sci-fi', duration: 140 },
    { id: 3, name: 'Avatar', category: 'Sci-fi', duration: 162 },
  ]
  return (
    <div className="layout">
      <h1>Movies List</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <li>
                {movie.name}
                {movie.category}
                {movie.duration}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}

export default MoviesList
