import Image from 'next/image';
import React from 'react'
import StarRating from '../atoms/star-rating';


type FoodProfileCardProps = {
    image: string;
    title: string;
    description: string;
    rate: number;
  };
  
  const FoodProfileCard: React.FC<FoodProfileCardProps> = ({
    image,
    title,
    description,
    rate,
  }) => {
    return (
      <div className="flex rounded-lg card-shadow p-4 gap-5 w-[292px]">
        <div className="aspect-square flex justify-center items-center">
          <Image src={image} alt="hero-asset" width={53} height={53} />
        </div>
        <div>
          <p className="text-sm text-primary">{title}</p>
          <p className="text-[12px] text-secondary">{description}</p>
          <StarRating rate={rate} />
        </div>
      </div>
    );
  };

  export default FoodProfileCard;