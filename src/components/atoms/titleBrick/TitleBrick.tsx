import { ReactElement } from "react";

// Types
import { Maybe, TitleBlock, TitleWeight } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

export const TitleBrick = ({
  titleBlock,
}: {
  titleBlock?: Maybe<TitleBlock>;
}) => {
  const highestHeaderTag = (body: ReactElement) => {
    const mutualClasses = "text-white";
    switch (titleBlock?.titleWeight) {
      case TitleWeight.H1:
        return <h1 className={cx(mutualClasses, "uppercase")}>{body}</h1>;
      case TitleWeight.H2:
        return <h2 className={cx(mutualClasses, "uppercase")}>{body}</h2>;
      case TitleWeight.H3:
        return <h3 className={cx(mutualClasses, "uppercase")}>{body}</h3>;
      default:
        return <h4 className={mutualClasses}>{body}</h4>;
    }
  };

  return (
    <div className="flex flex-col">
      {highestHeaderTag(<>{titleBlock?.title}</>)}
      {!!titleBlock?.subtitle && (
        <span className="text-blue-500 text-lg mt-2">
          {titleBlock.subtitle}
        </span>
      )}
      {!!titleBlock?.subSubtitle && (
        <span className="text-white text-lg mt-2">
          {titleBlock.subSubtitle}
        </span>
      )}
    </div>
  );
};
