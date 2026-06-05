export interface MovieData {
  name: string
  category: string
  duration: number
  poster: string
}

export interface Movie extends MovieData {
  id: number
}

export interface ReviewData {
  name: string
  date: string
  movie_id: number
  description: string
}

export interface Review extends ReviewData {
  id: number
}
