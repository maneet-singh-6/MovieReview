import { Router } from 'express'
import * as db from '../db/index.ts'

const router = Router()

router.post('/movies/:id', async (req, res) => {
  try {
    const review = await db.addReview()
    res.json(review)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/movies/:id', async (req, res) => {
  try {
    const reviews = await db.getReviewsByMovieId()
    res.json(reviews)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default Router
