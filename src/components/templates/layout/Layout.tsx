import React from "react";

// Utils
import cx from "classnames";

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const classes = cx(
    "grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex bg-black max-w-5xl p-6 w-full rounded-lg"
  );

  return <main className={classes}>{children}</main>;
};
