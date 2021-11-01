import React from 'react'
import './style.css'

const movieList = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--item">
                <img
                  key={key}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt = 'poster de filme'
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default movieList