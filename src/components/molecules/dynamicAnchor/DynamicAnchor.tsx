import { ReactNode } from "react";

// Components
import Link from "next/link";

type DynamicAnchorType = {
  children: ReactNode;
  href: string;
  external?: boolean;
};

export const DynamicAnchor = ({
  children,
  external,
  href,
}: DynamicAnchorType) => {
  return !external ? (
    <Link href={href} passHref legacyBehavior>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};
