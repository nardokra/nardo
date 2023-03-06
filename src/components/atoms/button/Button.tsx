import React from "react";

// Utils
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
    "py-2 px-6 max-h-12 text-base",
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
