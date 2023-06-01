import React from "react";
import cx from "classnames";
type ButtonProps = {
  variant?: "primary" | "secondary" | "default" | "primary-shadow";
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
  const defaultVariant = 'text-sm px-[18px] py-[10px] rounded-full font-medium'
    switch (variant) {
        case 'primary':
        return cx('bg-olivegreen text-white shadow-sm', defaultVariant)
        case 'secondary':
        return cx('bg-stroke shadow-sm', defaultVariant)
        case 'primary-shadow':
        return cx('bg-olivegreen shadow-custom text-white', defaultVariant)
        default:
        return 'text-sm font-medium'
    }
}


export default Button;
