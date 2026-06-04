import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getMovies() {
  const response = await request.get(`${rootURL}/movies`)
  return response.body.fruits as string[]
}
