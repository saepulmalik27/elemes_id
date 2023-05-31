import { TFoodCategory } from "@/libs/types";
import Image from "next/image";
import React from "react";
import cx from "classnames";
type CategoryCardProps = TFoodCategory 

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  description,
  color
}) => {
  return (
    <div className={getRenderedClassNames(color)}>
      <Image src={imageUrl} width={47} height={47} alt={title} />
      <div className="flex flex-col gap-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const getRenderedClassNames = (color: string) => {
  const defaultClass = 'w-[230px] h-[173px] transition-all hover:h-[230px] rounded-lg flex flex-col gap-4 justify-center items-center'
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

export default CategoryCard;
