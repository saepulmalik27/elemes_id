import useCarousel from "@/hooks/useCarousel";
import React from "react";
import SVG from "react-inlinesvg";
import cx from "classnames";
type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const {
    carouselRef,
    handleScroll,
    showLeftArrow,
    showRightArrow,
    scrollHandler,
  } = useCarousel();
  return (
    <div className="relative overflow-hidden gap-1 flex flex-col">
      <div
        className="flex overflow-x-auto overflow-y-hidden gap-[10px] min-h-[230px]"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-shrink-0">{child}</div>
        ))}
      </div>
      <div className="hidden md:flex md:gap-4 md:justify-end px-5 md:px-10 lg:px-[120px]">
        <button
          className={cx(
            "rounded-full bg-olivegreen py-2 px-3 text-white flex gap-1 items-center uppercase font-medium",
            showLeftArrow ? "visible" : "invisible"
          )}
          onClick={() => {
            scrollHandler(-1);
          }}
        >
          <div className="rounded-full p-1 bg-white w-8 h-8 flex items-center justify-center">
            <SVG src="/assets/icons/flat/chevron.svg" />
          </div>
          Prev
        </button>
        <button
          className={cx(
            "rounded-full bg-olivegreen py-2 px-3 text-white flex gap-1 items-center uppercase font-medium ",
            showRightArrow ? "visible" : "invisible"
          )}
          onClick={() => {
            scrollHandler(1);
          }}
        >
          Next
          <div className="rounded-full rotate-180 p-1 bg-white w-8 h-8 flex items-center justify-center">
            <SVG src="/assets/icons/flat/chevron.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
