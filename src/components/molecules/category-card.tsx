import { TFoodCategory } from "@/libs/types";
import Image from "next/image";
import React from "react";
import cx from "classnames";
type CategoryCardProps = TFoodCategory 

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  description,
  className
}) => {
  return (
    <div className={getRenderedClassNames(className)}>
      <Image src={imageUrl} width={47} height={47} alt={title} />
      <div className="flex flex-col gap-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const getRenderedClassNames = (className: string) => {
  const defaultClass = 'w-[230px] h-[173px] transition-all hover:h-[230px] rounded-lg flex flex-col gap-4 justify-center items-center'
  return cx(className, defaultClass)  
}

export default CategoryCard;
