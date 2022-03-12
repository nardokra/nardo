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

export const Example = ({
  children,
  onClick,
  variant = ButtonVariants.Primary,
}: IButtonProps) => {
  const cls = cx("py-2 px-4 focus:outline-none hover:bg-gray-500", {
    "bg-black text-white": variant === ButtonVariants.Primary,
    "bg-white text-black": variant === ButtonVariants.Ghost,
  });

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};
