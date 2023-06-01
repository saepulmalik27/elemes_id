import Image from "next/image";
import React from "react";
import copytext from "@/copytext/home.copy.json";
import Button from "../atoms/button";
const Hero = () => {
  return (
    <section className="relative">
      <div className="bg-[url('/assets/images/hero/hero_background.png')] bg-center absolute w-full top-0 left-0 h-full -z-[1] opacity-[0.05]"></div>
      <div className="px-5 md:px-10 lg:px-[120px]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-50 flex-shrink-0 flex flex-col gap-8 justify-center">
            <h1 className="text-olivegreen text-title-3xl md:text-title-4xl">{copytext.hero.title}</h1>
            <p className="text-lg text-secondary">{copytext.hero.description}</p>
            <div className="flex gap-2" >
                <Button variant="primary-shadow" >{copytext.hero.actions.signup}</Button>
                <Button variant="secondary" >{copytext.hero.actions.about}</Button>
            </div>
          </div>
          <Image
            src="/assets/images/hero/illustration_hero.png"
            width={500}
            height={500}
            alt="illustartion"
            className="flex-shrink-0 aspect-square flex-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
