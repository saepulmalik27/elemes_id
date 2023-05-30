import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "default";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  return (
    <button className={generateButtonVariant(variant)} {...props}>
      {children}
    </button>
  );
};

const generateButtonVariant = (variant: ButtonProps['variant']) => {
    switch (variant) {
        case 'primary':
        return 'rounded-full bg-olivegreen text-white shadow-sm text-sm px-[18px] py-[10px]'
        case 'secondary':
        return 'rounded-full  bg-stroke shadow-sm text-sm px-[18px] py-[10px]'
        default:
        return 'text-sm'
    }
}


export default Button;
