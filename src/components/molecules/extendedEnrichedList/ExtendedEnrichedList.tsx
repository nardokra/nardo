// Types
import { Maybe, TopicList } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

type ExtendedEnrichedListType = {
  list?: Maybe<TopicList>;
};

export const ExtendedEnrichedList = ({ list }: ExtendedEnrichedListType) => {
  const { title, topicListEntry } = list || {};

  const mainClasses = cx("bg-white rounded-lg text-black", "p-4 h-full");

  return (
    <div className={mainClasses}>
      <div className="rounded-lg mb-4">
        {title && (
          <h3
            className={cx("font-bold uppercase text-2xl text-justify w-full")}
          >
            {title}
          </h3>
        )}
      </div>
      <div className="flex-col">
        {topicListEntry?.map((listEntry) => (
          <div className={"flex flex-col mb-4"} key={listEntry.identifier}>
            <span className="font-bold text-blue-500">{listEntry.title}</span>
            <span>{listEntry.description}</span>
            <span className="font-bold mt-2">{listEntry.subtitle}</span>
            <span>{listEntry.subDescription}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
