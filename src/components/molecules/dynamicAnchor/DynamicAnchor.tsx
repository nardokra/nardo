import { ReactNode } from "react";

// Types
import { Maybe } from "@/cmsTypes/hygraph";

// Components
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type DynamicAnchorType = {
  children: ReactNode;
  href?: Maybe<string>;
  external?: boolean;
};

export const DynamicAnchor = ({
  children,
  external,
  href,
}: DynamicAnchorType) =>
  href && external ? (
    <Link href={href as Url} passHref legacyBehavior>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href as string} target="_blank">
      {children}
    </a>
  );
