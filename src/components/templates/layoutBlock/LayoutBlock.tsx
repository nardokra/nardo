import { ReactNode } from "react";

// Utils
import cx from "classnames";

type LayoutBlockType = {
  children?: ReactNode;
  xxsColumns?: number;
  xsColumns?: number;
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
  xlColumns?: number;
  maxHeight?: boolean;
  maxWidth?: boolean;
};

export const LayoutBlock = ({
  children,
  xxsColumns = 1,
  xsColumns,
  smColumns,
  mdColumns,
  lgColumns,
  xlColumns,
  maxHeight,
  maxWidth,
}: LayoutBlockType) => {
  const xxs = `xxs:grid-cols-${xxsColumns}`;
  const xs = xsColumns && `xs:grid-cols-${xsColumns}`;
  const sm = smColumns && `sm:grid-cols-${smColumns}`;
  const md = mdColumns && `md:grid-cols-${mdColumns}`;
  const lg = lgColumns && `lg:grid-cols-${lgColumns}`;
  const xl = xlColumns && `xl:grid-cols-${xlColumns}`;

  const classes = cx(
    "flex flex-start grid gap-8 items-start",
    maxHeight && "h-full",
    maxWidth && "w-full",
    xxs,
    xs,
    sm,
    md,
    lg,
    xl
  );

  return (
    <div className={classes} id="gridblock">
      {children}
    </div>
  );
};
