import request from 'superagent'
import { MovieData, ReviewData } from '../../models/index'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getMovies() {
  const response = await request.get(`${rootURL}/movies`)
  return response.body
}

export async function getMovieById(id: number): Promise<MovieData> {
  const response = await request.get(`${rootURL}/movies/${id}`)
  return response.body
}

export async function addReview(review: ReviewData): Promise<ReviewData> {
  const response = await request
    .post(`${rootURL}/movies/${review.movie_id}`)
    .send(review)
  return response.body
}
