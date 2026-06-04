import connection from './connection.ts'
import { Movie, MovieData, Review, ReviewData } from '../../models/index.ts'

export function getMovies() {
  return connection('movies').select()
}

export function getMovieById(id: number) {
  return connection('movies').where('id', id).first()
}

export function addReview(review: ReviewData) {
  return connection('reviews').insert(review)
}
