import { Movie, Review } from '../../models/index.js'

function MovieDetails() {
  const movie: Movie = {
    id: 3,
    name: 'Avatar',
    category: 'Sci-fi',
    duration: 162,
  }

  // Review array
  const reviews: Review[] = [
    {
      id: 4,
      name: 'Maneet',
      date: '6th May 2025',
      movie_id: 3,
      description: 'Meh. Not bad.',
    },
    {
      id: 5,
      name: 'Young',
      date: '3rd May 2026',
      movie_id: 3,
      description:
        "I seriously don't understand why this is the highest grossing film in the world. Their accents are so weird and I don't understand why everyone is blue! What happened to diversity?!!?",
    },
    {
      id: 6,
      name: 'Henry',
      date: '6th January 2025',
      movie_id: 3,
      description:
        "2 stars if I could rate on this site! Don't watch this movie! You will get addicted to it! I've already watched it 10 times in a row...HELP ME!!!",
    },
  ]

  return (
    <div className="layout">
      <h1>Movie Details:</h1>
      {/* Movie info: */}
      <ul>
        <li>
          {movie.name}
          {movie.category}
          {movie.duration}
        </li>
      </ul>

      {/* reviews */}
      <div>
        {reviews &&
          reviews.map((review) => (
            <li key={review.id}>
              {review.name}
              {review.date}
              {review.description}
            </li>
          ))}
      </div>
    </div>
  )
}

export default MovieDetails
