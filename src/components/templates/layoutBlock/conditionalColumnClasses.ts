import cx from "classnames";
import { LayoutBlockType } from "./types";

/**
 * Tailwind doesn’t include any sort of client-side runtime,
 * so class names need to be statically extractable at build-time,
 * and can’t depend on any sort of arbitrary dynamic values that change on the client.
 * So string concatenation at runtime is not supported.
 */

const classes = (columnConditions: LayoutBlockType): string =>
  cx(
    columnConditions.xxsColumns1 && "xxs:grid-cols-1",
    columnConditions.xxsColumns2 && "xxs:grid-cols-2",
    columnConditions.xxsColumns3 && "xxs:grid-cols-3",
    columnConditions.xxsColumns4 && "xxs:grid-cols-4",
    columnConditions.xxsColumns5 && "xxs:grid-cols-5",
    columnConditions.xxsColumns6 && "xxs:grid-cols-6",
    columnConditions.xsColumns1 && "xs:grid-cols-1",
    columnConditions.xsColumns2 && "xs:grid-cols-2",
    columnConditions.xsColumns3 && "xs:grid-cols-3",
    columnConditions.xsColumns4 && "xs:grid-cols-4",
    columnConditions.xsColumns5 && "xs:grid-cols-5",
    columnConditions.xsColumns6 && "xs:grid-cols-6",
    columnConditions.smColumns1 && "sm:grid-cols-1",
    columnConditions.smColumns2 && "sm:grid-cols-2",
    columnConditions.smColumns3 && "sm:grid-cols-3",
    columnConditions.smColumns4 && "sm:grid-cols-4",
    columnConditions.smColumns5 && "sm:grid-cols-5",
    columnConditions.smColumns6 && "sm:grid-cols-6",
    columnConditions.mdColumns1 && "md:grid-cols-1",
    columnConditions.mdColumns2 && "md:grid-cols-2",
    columnConditions.mdColumns3 && "md:grid-cols-3",
    columnConditions.mdColumns4 && "md:grid-cols-4",
    columnConditions.mdColumns5 && "md:grid-cols-5",
    columnConditions.mdColumns6 && "md:grid-cols-6",
    columnConditions.lgColumns1 && "lg:grid-cols-1",
    columnConditions.lgColumns2 && "lg:grid-cols-2",
    columnConditions.lgColumns3 && "lg:grid-cols-3",
    columnConditions.lgColumns4 && "lg:grid-cols-4",
    columnConditions.lgColumns5 && "lg:grid-cols-5",
    columnConditions.lgColumns6 && "lg:grid-cols-6",
    columnConditions.xlColumns1 && "xl:grid-cols-1",
    columnConditions.xlColumns2 && "xl:grid-cols-2",
    columnConditions.xlColumns3 && "xl:grid-cols-3",
    columnConditions.xlColumns4 && "xl:grid-cols-4",
    columnConditions.xlColumns5 && "xl:grid-cols-5",
    columnConditions.xlColumns6 && "xl:grid-cols-6"
  );

export default classes;
