import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout.tsx'
import MovieDetails from './components/MovieDetails.tsx'
import MoviesList from './components/MoviesList.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<MoviesList />} />
    <Route path="/movies/:id" element={<MovieDetails />} />
  </Route>,
)

export default routes
