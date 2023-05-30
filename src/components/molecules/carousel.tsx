import useCarousel from "@/hooks/useCarousel";
import React from "react";
import SVG from "react-inlinesvg";
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
    <div className="relative overflow-hidden flex flex-col gap-7">
      <div
        className="flex overflow-x-auto overflow-y-hidden gap-[10px]"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-shrink-0">{child}</div>
        ))}
      </div>
      <div className="hidden md:flex md:gap-4 md:justify-end md:px-[120px]">
        {showLeftArrow && (
          <button className="rounded-full bg-olivegreen py-2 px-3 text-white flex gap-1 items-center"  onClick={() => {
            scrollHandler(-1);
          }}>
            <div className="rounded-full p-1 bg-white w-8 h-8 flex items-center justify-center">
              <SVG src="/assets/icons/flat/chevron.svg" />
            </div>
            Prev
          </button>
        )}

        {showRightArrow && (
          <button
            className="rounded-full bg-olivegreen py-2 px-3 text-white flex gap-1 items-center"
            onClick={() => {
              scrollHandler(1);
            }}
          >
            Next
            <div className="rounded-full rotate-180 p-1 bg-white w-8 h-8 flex items-center justify-center">
              <SVG src="/assets/icons/flat/chevron.svg" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
