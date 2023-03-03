import React from "react";

// Styles
import cx from "classnames";

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const classes = cx("flex bg-red-800 max-w-5xl p-6 w-full rounded-lg");

  return <main className={classes}>{children}</main>;
};
