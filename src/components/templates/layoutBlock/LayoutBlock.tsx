// Types
import { LayoutBlockType } from "./types";

// Utils
import cx from "classnames";
import conditionalColumnClasses from "./conditionalColumnClasses";

export const LayoutBlock = ({
  children,
  maxHeight,
  maxWidth,
  xxsColumns1 = true,
  ...columnCoditions // Destructuring of all the conditions makes the code messy.
}: LayoutBlockType) => {
  const classes = cx(
    "flex flex-start grid gap-8 items-start max-w-full",
    maxHeight && "h-full",
    maxWidth && "w-full",
    conditionalColumnClasses({ xxsColumns1, ...columnCoditions })
  );

  return <div className={classes}>{children}</div>;
};
