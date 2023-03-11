// Types
import { List, Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import { DynamicAnchor } from "../dynamicAnchor";
import { TopicMediaListItemJSX } from "./TopicMediaListItemJsx";

type TopicMediaListType = {
  anchorList?: boolean;
  list?: Maybe<List>;
  titleVerticalOriented?: boolean;
};

export const TopicMediaList = ({
  anchorList,
  list,
  titleVerticalOriented,
}: TopicMediaListType) => {
  const { title, listEntry } = list || {};

  const wrapperClasses = cx(
    "border-2 rounded-lg text-white p-4 max-w-full",
    titleVerticalOriented && "flex"
  );

  return !title && !listEntry ? null : (
    <div className={wrapperClasses}>
      {title && (
        <div className="p-4 mr-4 md:mr-10 bg-white rounded-lg">
          <h3
            className={cx(
              "font-bold uppercase text-black",
              titleVerticalOriented &&
                "text-2xl text-upright writing-vertical-rl"
            )}
          >
            {title}
          </h3>
        </div>
      )}
      <div className="flex-col">
        {listEntry?.map((entry) =>
          !anchorList ? (
            <TopicMediaListItemJSX key={entry.identifier} entry={entry} />
          ) : (
            <DynamicAnchor key={entry.identifier} href={entry.href?.href}>
              <TopicMediaListItemJSX entry={entry} />
            </DynamicAnchor>
          )
        )}
      </div>
    </div>
  );
};
