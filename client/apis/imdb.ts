import request from 'superagent'
import type { ImdbMovie } from '../../models/imdb'

const rootURL = new URL('/api/v1/imdb', document.baseURI)

export async function searchMovies(query: string): Promise<ImdbMovie[]> {
  if (!query) return []

  const response = await request.get(`${rootURL}/search`).query({ q: query })

  return response.body.titles
}
