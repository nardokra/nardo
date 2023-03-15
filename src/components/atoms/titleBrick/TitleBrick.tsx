// Types
import { Maybe, TitleBlock } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";
import { headerTagOperator } from "@/utils/hooks/operators/headerTagOperator";

type TitleBlockType = {
  titleBlock?: Maybe<TitleBlock>;
  verticleOrientation?: boolean;
};

export const TitleBrick = ({
  titleBlock,
  verticleOrientation,
}: TitleBlockType) => {
  const wrapperClasses = cx("flex flex-col");
  const verticleOrientationClasses = cx(
    verticleOrientation && "writing-vertical-rl text-upright"
  );

  return (
    <div className={wrapperClasses}>
      {headerTagOperator({
        className: cx("text-white", verticleOrientationClasses),
        headerTag: titleBlock?.titleWeight,
        text: titleBlock?.title,
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
