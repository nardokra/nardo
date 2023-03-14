// Types
import { Maybe, TitleBlock, TitleWeight } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

type TitleBlockType = {
  titleBlock?: Maybe<TitleBlock>;
  verticleOrientation?: boolean;
};

export const TitleBrick = ({
  titleBlock,
  verticleOrientation,
}: TitleBlockType) => {
  const highestHeaderTag = ({
    className,
    body,
  }: {
    className?: string;
    body?: Maybe<string>;
  }) => {
    switch (titleBlock?.titleWeight) {
      case TitleWeight.H1:
        return <h1 className={cx(className, "uppercase")}>{body}</h1>;
      case TitleWeight.H2:
        return <h2 className={cx(className, "uppercase")}>{body}</h2>;
      case TitleWeight.H3:
        return <h3 className={cx(className, "uppercase")}>{body}</h3>;
      default:
        return <h4 className={className}>{body}</h4>;
    }
  };

  const wrapperClasses = cx("flex flex-col");
  const verticleOrientationClasses = cx(
    verticleOrientation && "writing-vertical-rl text-upright"
  );

  return (
    <div className={wrapperClasses}>
      {highestHeaderTag({
        className: cx("text-white", verticleOrientationClasses),
        body: titleBlock?.title,
      })}
      {!!titleBlock?.subtitle && (
        <span
          className={cx(
            "text-theme-primary text-lg mt-2",
            verticleOrientationClasses
          )}
        >
          {titleBlock.subtitle}
        </span>
      )}
      {!!titleBlock?.subSubtitle && (
        <span
          className={cx("text-white text-lg mt-2", verticleOrientationClasses)}
        >
          {titleBlock.subSubtitle}
        </span>
      )}
    </div>
  );
};
