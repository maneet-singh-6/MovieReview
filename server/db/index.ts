import knex from 'knex'
import config from './knexfile.js'
import { Movie, MovieData, Review, ReviewData } from '../../models/index.ts'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])

export default connection

export function getMovies() {
  return connection('movies').select()
}

export function getMovieById(id: number) {
  return connection('movies').where('id', id).first()
}

export function addReview(review: ReviewData) {
  return connection('reviews').insert(review)
}

export function getReviewsByMovieId(movieId: number) {
  return connection('reviews').where('movie_id', movieId).select()
}

export function close() {
  connection.destroy()
}
