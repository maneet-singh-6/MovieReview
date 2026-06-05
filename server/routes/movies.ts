import { Router } from 'express'
import * as db from '../db/index.ts'

const router = Router()

router.get('/movies', async (req, res) => {
  try {
    const movies = await db.getMovies()
    res.json(movies)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/movies/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const movie = await db.getMovieById(id)
    res.json(movie)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
