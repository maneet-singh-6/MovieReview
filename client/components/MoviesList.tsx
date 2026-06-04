import React from 'react'
import { Movie } from '../../models/index.js'

function MoviesList() {
  const movies: Movie[] = [
    { id: 1, name: 'Kung Fu Panda', category: 'Family', duration: 92 },
    { id: 2, name: 'Ready Player One', category: 'Sci-fi', duration: 140 },
    { id: 3, name: 'Avatar', category: 'Sci-fi', duration: 162 },
  ]
  return (
    <div>
      <h1>MoviesList</h1>
    </div>
  )
}

export default MoviesList
