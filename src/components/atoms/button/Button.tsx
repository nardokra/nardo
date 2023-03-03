import React from "react";
import cx from "classnames";

export enum ButtonVariants {
  Primary,
  Ghost,
}

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariants;
}

export const Button = ({
  children,
  onClick,
  variant = ButtonVariants.Primary,
}: IButtonProps) => {
  const classes = cx(
    "py-2 px-6",
    "focus:outline-none hover:bg-gray-500 rounded-lg",
    {
      "bg-black text-white": variant === ButtonVariants.Primary,
      "bg-white text-black": variant === ButtonVariants.Ghost,
    }
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
