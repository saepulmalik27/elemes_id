import React from "react";
import copytext from "@/copytext/home.copy.json";
import { FOODREVIEWLIST } from "@/utils/constant";
import FoodReviewCard from "../molecules/food-review-card";
import Button from "../atoms/button";
const SectionTrending = () => {
  return (
    <div className="md:px-[120px] flex flex-col gap-5 md:gap-10 py-5">
      <h3 className="text-title-xl md:text-title-2xl">
        {copytext.trending.title} <br />
        <span className="text-olivegreen">Receipt</span>
      </h3>
      <div className="grid grid-cols-auto-fill xl:grid-cols-4 gap-4">
        {FOODREVIEWLIST.map(({ title, description, imageUrl, rating, color}, i) => (
          <FoodReviewCard
            key={i}
            title={title}
            description={description}
            imageUrl={imageUrl}
            rating={rating}
            color={color}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button variant="primary" >All Receipt</Button>
      </div>
    </div>
  );
};

export default SectionTrending;
