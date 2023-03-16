// Types
import { Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

export const headerTagOperator = ({
  className,
  headerTag,
  text,
}: {
  className?: string;
  headerTag?: Maybe<string>;
  text?: Maybe<string>;
}) => {
  switch (headerTag) {
    case "h1":
      return <h1 className={cx(className, "uppercase")}>{text}</h1>;
    case "h2":
      return <h2 className={cx(className, "uppercase")}>{text}</h2>;
    case "h3":
      return <h3 className={cx(className, "uppercase")}>{text}</h3>;
    default:
      return <h4 className={className}>{text}</h4>;
  }
};
