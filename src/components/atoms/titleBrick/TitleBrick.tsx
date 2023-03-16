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
  const wrapperClasses = cx("flex flex-col -mb-2");
  const verticleOrientationClasses = cx(
    verticleOrientation && "writing-vertical-rl text-upright"
  );

  return (
    <div className={wrapperClasses}>
      {headerTagOperator({
        className: cx("text-white mb-2", verticleOrientationClasses),
        headerTag: titleBlock?.titleWeight,
        text: titleBlock?.title,
      })}
      {!!titleBlock?.subtitle && (
        <span
          className={cx(
            "text-theme-primary text-lg mb-2",
            verticleOrientationClasses
          )}
        >
          {titleBlock.subtitle}
        </span>
      )}
      {!!titleBlock?.subSubtitle && (
        <span
          className={cx("text-white text-lg mb-2", verticleOrientationClasses)}
        >
          {titleBlock.subSubtitle}
        </span>
      )}
    </div>
  );
};
