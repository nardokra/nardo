import { ReactNode } from "react";

// Constants
import { SizeVariant } from "@/constants/sizeConstants";

// Utils
import cx from "classnames";

type LayoutBlockType = { children: ReactNode; size?: SizeVariant };

export const LayoutBlock = ({
  children,
  size = SizeVariant.Medium,
}: LayoutBlockType) => {
  const classes = cx(
    "flex flex-start grid gap-8 items-start",
    size === SizeVariant.Small && "grid-cols-1",
    size === SizeVariant.Medium && "xs:grid-cols-2"
  );

  return <div className={classes}>{children}</div>;
};
