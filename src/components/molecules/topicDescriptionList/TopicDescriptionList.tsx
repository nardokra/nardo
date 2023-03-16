// Types
import { List, Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";
import { useSyntheticEventState } from "@/utils/reactHooks/animations";

type TopicDescriptionListType = {
  list?: Maybe<List>;
  titleVerticalOriented?: boolean;
};

export const TopicDescriptionList = ({
  list,
  titleVerticalOriented,
}: TopicDescriptionListType) => {
  const { title, listEntry } = list || {};
  const { activate, deactivate, isActive } = useSyntheticEventState();

  const wrapperClasses = cx(
    "border-2 rounded-lg text-white p-4",
    titleVerticalOriented && "flex",
    isActive && "animate-bounce shadow-md shadow-white"
  );

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onAnimationEnd={deactivate}
    >
      {title && (
        <h2
          className={cx(
            "uppercase",
            titleVerticalOriented &&
              "text-xl text-upright writing-vertical-rl mr-4"
          )}
        >
          {title}
        </h2>
      )}
      <div className="w-full grid sm:grid-cols-2">
        {listEntry?.map((entry) => (
          <div className={cx("flex flex-col pb-3")} key={entry.identifier}>
            <h3 className="text-theme-primary">{entry.title}</h3>

            {entry.description.map((descr) => (
              <span key={descr.slice(0, 10)}>{descr}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
