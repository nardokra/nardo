import React from "react";

// Utils
import cx from "classnames";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const classes = cx(
    "flex grid gap-8 grid-cols-1",
    "bg-stone-900 rounded-lg",
    "max-w-5xl w-full p-6"
  );

  return <main className={classes}>{children}</main>;
};
