import { Router } from 'express'
import * as db from '../db/index.ts'

const router = Router()

router.post('/:id', async (req, res) => {
  try {
    const review = await db.addReview(req.body)
    res.json(review)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
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
