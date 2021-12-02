import React from "react";
import cx from "classnames";

enum ButtonVariants {
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
  const cls = cx("button", {
    ["button__primary"]: variant === ButtonVariants.Primary,
    ["button__ghost"]: variant === ButtonVariants.Ghost,
  });

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};
