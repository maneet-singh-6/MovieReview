import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getMovies() {
  const response = await request.get(`${rootURL}/movies`)
  return response.body.fruits as string[]
}

// IMBD API available:
// OkHttpClient client = new OkHttpClient();

// Request request = new Request.Builder()
//   .url("https://api.themoviedb.org/3/authentication")
//   .get()
//   .addHeader("accept", "application/json")
//   .build();

// Response response = client.newCall(request).execute();

// I have an account nad can get the  API KEY!!! - Maneet
