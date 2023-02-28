import React from "react";

// Styles
import cx from "classnames";

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const classes = cx(
    "flex flex-col bg-black max-w-5xl w-full justify-around",
    "min-h-full"
  );

  return <main className={classes}>{children}</main>;
};
