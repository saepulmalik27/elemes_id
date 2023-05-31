import React from 'react'

const StarRating = () => {
  return (
    <div className="star-rating">
      {Array(5).fill(1).map((_, key) => {        
        return (<span className="star" key={key}>&#9733;</span>);
      })}
    </div>
  )
}

export default StarRating