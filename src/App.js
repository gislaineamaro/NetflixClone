import React, { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import FeaturedMovies from './components/featuredMovies'
import Tmdb from './Tmdb'

export default () => {
  const [moviesList, setMoviesList] = useState([])
  const [featuredMovie, setFeaturedMovies] = useState(null)
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMoviesList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedMovies(chosenInfo)
    }
    loadAll()
  }, [])

  return (
    <div className="page">
      {featuredMovie && <FeaturedMovies item={featuredMovie} />}

      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieList key={item.id} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
