export interface MovieData {
  name: string
  category: string
  duration: number
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
