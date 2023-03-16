// Types
import { Maybe, TopicList } from "@/cmsTypes/hygraph";
import { useSyntheticEventState } from "@/utils/reactHooks/animations";

// Utils
import cx from "classnames";

type TopicDoubleDescriptionListType = {
  list?: Maybe<TopicList>;
};

export const TopicDoubleDescriptionList = ({
  list,
}: TopicDoubleDescriptionListType) => {
  const { title, topicListEntry } = list || {};
  const { activate, deactivate, isActive } = useSyntheticEventState();

  const wrapperClasses = cx(
    "bg-white rounded-lg text-black",
    "p-4 h-full",
    isActive && "animate-bounce shadow-md shadow-white"
  );

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onAnimationEnd={deactivate}
    >
      <div className="rounded-lg mb-4">
        {title && (
          <h2 className={cx("uppercase text-2xl text-justify w-full")}>
            {title}
          </h2>
        )}
      </div>
      <div className="flex-col">
        {topicListEntry?.map((listEntry) => (
          <div className={"flex flex-col mb-4"} key={listEntry.identifier}>
            <h3 className="font-bold text-theme-primary">{listEntry.title}</h3>
            <span>{listEntry.description}</span>
            <span className="font-bold mt-2">{listEntry.subtitle}</span>
            <span>{listEntry.subDescription}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
