import { TFoodRating } from '@/libs/types'
import Image from 'next/image'
import React from 'react'
import cx from 'classnames'
import StarRating from '../atoms/star-rating'

const FoodReviewCard : React.FC<TFoodRating> = ({color, description, imageUrl, rating, title}) => {
  return (
    <div className={getRenderedClassNames(color)} >
        <Image src={imageUrl} width={120} height={120} alt={'food-rating'+title} />
        <div className='flex flex-col select-none' >
            <h4 className='text-title-1xl' >{title}</h4>
            <p className='text-lg font-medium text-olivegreen'>{description}</p>
        </div>
        <StarRating rate={rating} />
    </div>
  )
}
    const getRenderedClassNames = (color: string) => {
        const defaultClass = 'rounded-lg flex flex-col gap-4 items-start justify-center md:w-72 md:h-[300px] px-5 py-5'
       switch (color) {
        case "olivegreen":
          return cx('bg-olivegreen-light', defaultClass) 
        case "tealblue" :
          return cx('bg-tealblue-light', defaultClass)
        case "royalblue":
          return cx('bg-royalblue-light', defaultClass)
        case "deepmagenta":
          return cx('bg-deepmagenta-light', defaultClass)
        case "limegreen":
          return cx('bg-limegreen-light', defaultClass)
        default:
          return defaultClass
       }
      }

export default FoodReviewCard