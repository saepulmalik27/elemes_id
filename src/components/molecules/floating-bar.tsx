import { TFloatingBar, TFloatingBarList } from "@/libs/types";
import { useRouter } from "next/router";
import React from "react";
import SVG from "react-inlinesvg";
import cx from "classnames";
import ClickOutside from "./clickoutside";
export type FloatingBarProps = {
  lists: TFloatingBarList;
};

const FloatingBar: React.FC<FloatingBarProps> = ({ lists }) => {
  const [isShow, setIsShow] = React.useState(false);

  const router = useRouter();

  const handleCLick = ({ children, href }: TFloatingBar) => {
    if (children && children.length > 0) {
      setIsShow(!isShow);
    } else {
      router.push(href);
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full h-20 flex justify-between items-center p-5 bg-white border border-solid border-stroke ">
      {lists.map(({ name, icon, href, children }, i) => (
        <React.Fragment key={i}>
          <div
            className="flex justify-center items-center flex-col "
            onClick={() => {
              handleCLick(lists[i]);
            }}
          >
            <SVG src={icon} />
            <p className="text-sm text-secondary">{name}</p>
          </div>
          <ClickOutside behaviorfunc={() => {setIsShow(false)}} >
          <div className={cx("flex-col gap-2 p-2 rounded-md bg-white border border-solid border-stroke absolute bottom-[90px] right-2 min-w-[200px] shadow-custom", isShow ? "flex" : "hidden" )}>
            {children && children.map(({ name, href }, i) => (
              <div
                className="flex justify-start items-center"
                key={i}
                onClick={() => {
                  router.push(href);
                }}
              >
                <p className="text-sm text-secondary">{name}</p>
              </div>
            ))}
          </div>
          </ClickOutside>
          
        </React.Fragment>
      ))}
    </div>
  );
};

export default FloatingBar;
