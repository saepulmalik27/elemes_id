import React from "react";
import Input from "../atoms/input";

type InputGroupProps = {
  label: string;
  placeholder: string;
  onClick: () => void;
};

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  onClick,
}) => {
  return (
    <div className="flex">
      <input
        type="text"
        className="py-2 px-4 w-fit rounded-l-md placeholder:text-primary placeholder:text-sm outline"
        placeholder={placeholder}
      />
      <div
        className="bg-olivegreen rounded-r-md p-2 flex justify-center items-center outline-olivegreen outline"
        onClick={onClick}
      >
        <p className="text-white uppercase text-sm">{label}</p>
      </div>
    </div>
  );
};

export default InputGroup;
