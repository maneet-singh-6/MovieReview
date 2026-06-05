import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout.tsx'
import MovieDetails from './components/MovieDetails.tsx'
import MoviesList from './components/MoviesList.tsx'
import MovieSearch from './components/MovieSearch'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<MoviesList />} />
    <Route path="/movies/:id" element={<MovieDetails />} />
    <Route path="search" element={<MovieSearch />} />
  </Route>,
)

export default routes
