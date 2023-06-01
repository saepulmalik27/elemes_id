import React from 'react'

type StarRatingProps = {
  rate: number
}

const StarRating : React.FC<StarRatingProps> = ({rate}) => {
  const [rating, setRating] = React.useState<number>(Math.floor(rate-1) || 0);
  return (
    <div>
      {Array(5).fill(1).map((_, index) => {        
        return ( <button
          type="button"
          key={index}
          className={index <= rating ? "text-tangerine" : "text-lightgray"}
          onClick={() => setRating(index)}
        >
          <span>&#9733;</span>
        </button>);
      })}
    </div>
  )
}

export default StarRating