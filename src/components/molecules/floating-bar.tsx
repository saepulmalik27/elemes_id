import { TFloatingBarList } from "@/libs/types";
import React from "react";
import SVG from "react-inlinesvg";

export type FloatingBarProps = {
  lists: TFloatingBarList;
};

const FloatingBar: React.FC<FloatingBarProps> = ({ lists }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full h-20 flex justify-between items-center p-5 bg-white border border-solid border-stroke">
      {lists.map(({name, icon, href, children}, i) => (
        <div className="flex justify-center items-center flex-col" key={i}>
          <SVG src={icon} />
          <p className="text-sm text-secondary">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingBar;
