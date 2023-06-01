import Image from "next/image";
import React from "react";
import copytext from "@/copytext/home.copy.json";
import Button from "../atoms/button";
// import { useResponsive } from "@/hooks/useMediaQuery";
import FoodProfileCard from "../molecules/food-profile-card";
const Hero = () => {
  // const { isMobile } = useResponsive();
  return (
    <section className="relative">
      <div className="bg-[url('/assets/images/hero/hero_background.png')] bg-center absolute w-full top-0 left-0 h-full -z-[1] opacity-[0.05]"></div>
      <div className="md:px-10 lg:px-[120px]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-50 flex-shrink-0 flex flex-col gap-8 justify-center px-5 sm:p-0">
            <h1 className="text-olivegreen text-title-3xl md:text-title-4xl">
              {copytext.hero.title}
            </h1>
            <p className="text-lg text-secondary">
              {copytext.hero.description}
            </p>
            <div className="flex gap-2">
              <Button variant="primary-shadow">
                {copytext.hero.actions.signup}
              </Button>
              <Button variant="secondary">{copytext.hero.actions.about}</Button>
            </div>
          </div>
          {/* <Image
            src={
              isMobile
                ? "/assets/images/hero/hero-asset-mobile.png"
                : "/assets/images/hero/illustration_hero.png"
            }
            width={500}
            height={500}
            alt="illustartion"
            className="flex-shrink-0 aspect-square flex-50"
          /> */}
          <div className="flex-shrink-0 flex-50 overflow-hidden">
            <div className="w-full flex justify-start items-center sm:justify-center aspect-square p-5 sm:p-10 ">
              <div className="rounded-full w-fit h-fit bg-stroke p-5 sm:p-10 relative ">
                <Image
                  src={"/assets/images/hero/hero_asset.png"}
                  className="w-[230px] h-auto sm:w-[414px] "
                  alt="hero-asset"
                  width={414}
                  height={416}
                />
                <div className="absolute left-[50%] sm:left-0 bottom-0 w-fit h-fit ">
                  <FoodProfileCard
                    image="/assets/images/hero/hero_asset.png"
                    title={copytext.hero.card.title}
                    description={copytext.hero.card.description}
                    rate={copytext.hero.card.rate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
