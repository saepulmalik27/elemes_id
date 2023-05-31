import React from "react";
import Carousel from "../molecules/carousel";
import copytext from "@/copytext/home.copy.json";
import CategoryCard from "../molecules/category-card";
import { FOODCATEGORYLIST } from "@/utils/constant";
const SectionCategory = () => {
  return (
    <div className="md:pl-[120px] flex flex-col gap-5 md:gap-10 py-5 ">
      <h3 className="text-title-xl md:text-title-2xl">
        {copytext.category.title} <br />
        <span className="text-olivegreen">Receipt</span>
      </h3>
      <Carousel>
        {FOODCATEGORYLIST.map(({ description, title, imageUrl, color }, i) => (
          <CategoryCard
            key={i}
            description={description}
            title={title}
            imageUrl={imageUrl}
            color={color}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SectionCategory;
