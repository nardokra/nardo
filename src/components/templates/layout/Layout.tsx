import React from "react";

// Styles
import cx from "classnames";

interface ILayoutProps {
  children?: React.ReactNode;
  navigation?: boolean;
  footer?: boolean;
}

export const Layout = ({
  children,
  navigation = true,
  footer = true,
}: ILayoutProps) => {
  const cls = cx("container", "layout", {
    navigation: navigation,
    footer: footer,
  });

  return (
    <main className={cls}>
      {navigation && <nav>navigation</nav>}
      {children}
      {footer && <footer>footer</footer>}
    </main>
  );
};
