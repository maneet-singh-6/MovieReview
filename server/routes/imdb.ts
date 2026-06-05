import express from 'express'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/imdb/search?q=avatar
router.get('/search', async (req, res, next) => {
  try {
    const query = req.query.q as string

    const response = await request
      .get(`https://api.imdbapi.dev/search/titles?query=${query}`)
      .set('Accept', 'application/json')

    res.json(JSON.parse(response.text))
  } catch (error) {
    console.error('Error:', error)
    next(error)
  }
})

export default router
