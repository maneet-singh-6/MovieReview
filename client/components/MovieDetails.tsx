import { useParams } from 'react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { getMovieById, getReviewsByMovieId, addReview } from '../apis/movies.ts'
import { Review } from '../../models/index.ts'

function MovieDetails() {
  const { id } = useParams()
  const movieId = Number(id)

  const { data: movie } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieById(movieId),
  })

  const { data: reviews } = useQuery<Review[]>({
    queryKey: ['reviews', movieId],
    queryFn: () => getReviewsByMovieId(movieId),
  })

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', movieId] })
    },
  })

  function handleSubmit(e) {
    e.preventDefault()
    mutation.mutate({ name, date, description, movie_id: movieId })
  }
  // const movie: Movie = {
  //   id: 3,
  //   name: 'Avatar',
  //   category: 'Sci-fi',
  //   duration: 162,
  // }

  // // Review array
  // const reviews: Review[] = [
  //   {
  //     id: 4,
  //     name: 'Maneet',
  //     date: '6th May 2025',
  //     movie_id: 3,
  //     description: 'Meh. Not bad.',
  //   },
  //   {
  //     id: 5,
  //     name: 'Young',
  //     date: '3rd May 2026',
  //     movie_id: 3,
  //     description:
  //       "I seriously don't understand why this is the highest grossing film in the world. Their accents are so weird and I don't understand why everyone is blue! What happened to diversity?!!?",
  //   },
  //   {
  //     id: 6,
  //     name: 'Henry',
  //     date: '6th January 2025',
  //     movie_id: 3,
  //     description:
  //       "2 stars if I could rate on this site! Don't watch this movie! You will get addicted to it! I've already watched it 10 times in a row...HELP ME!!!",
  //   },
  // ]

  return (
    <div className="layout">
      {/* Movie hero card */}
      <div className="movie-hero">
        <h1>{movie?.name}</h1>
        <div className="movie-meta">
          <span className="meta-badge">{movie?.category}</span>
          <span className="meta-badge">{movie?.duration} min</span>
        </div>
        {movie?.poster && (
          <img
            src={movie.poster}
            alt={`${movie.name} poster`}
            className="hero-poster"
          />
        )}
      </div>

      {/* Reviews section */}
      <section className="reviews-section">
        <h2>Reviews</h2>
        {reviews && reviews.length === 0 && (
          <p className="no-reviews">No reviews yet — be the first!</p>
        )}
        <div className="reviews-grid">
          {reviews?.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="reviewer-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <p className="review-body">{review.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add review form */}
      <section className="add-review-section">
        <h2>Add a Review</h2>
        <form className="add-review-form" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date (e.g. 5th June 2026)"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your review..."
            rows={4}
          />
          <button type="submit">Submit Review</button>
        </form>
      </section>
    </div>
  )
}

export default MovieDetails
