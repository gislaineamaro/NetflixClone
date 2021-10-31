import React, { useEffect, useState } from 'react'
import MovieList from './components/MovieList'
import Tmdb from './Tmdb'

export default () => {
  const [moviesList, setMoviesList] = useState([])
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMoviesList(list)
    }
    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
