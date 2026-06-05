import { Router } from 'express'
import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const movies = await db.getMovies()
    res.json(movies)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const movie = await db.getMovieById(id)
    res.json(movie)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:id/reviews', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const review = await db.addReview({ ...req.body, movie_id: id })
    res.json(review)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/reviews', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const reviews = await db.getReviewsByMovieId(id)
    res.json(reviews)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
