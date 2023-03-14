// Types
import { Maybe, TopicList } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

type TopicDoubleDescriptionListType = {
  list?: Maybe<TopicList>;
};

export const TopicDoubleDescriptionList = ({
  list,
}: TopicDoubleDescriptionListType) => {
  const { title, topicListEntry } = list || {};

  const wrapperClasses = cx("bg-white rounded-lg text-black", "p-4 h-full");

  return (
    <div className={wrapperClasses}>
      <div className="rounded-lg mb-4">
        {title && (
          <h2
            className={cx("font-bold uppercase text-2xl text-justify w-full")}
          >
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
