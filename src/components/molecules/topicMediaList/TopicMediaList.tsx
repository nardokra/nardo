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
  isHighlight?: boolean;
  titleVerticalOriented?: boolean;
};

export const TopicMediaList = ({
  anchorList,
  list,
  isHighlight,
  titleVerticalOriented,
}: TopicMediaListType) => {
  const { title, listEntry } = list || {};

  const wrapperClasses = cx(
    "rounded-lg text-white p-4 max-w-full",
    titleVerticalOriented && "flex",
    !isHighlight ? "border-2" : "bg-theme-secondary"
  );

  return !title && !listEntry ? null : (
    <div className={wrapperClasses}>
      {title && (
        <div className="flex items-center p-4 mr-4 md:mr-10 bg-white rounded-lg">
          <h3
            className={cx(
              "font-bold uppercase text-black",
              titleVerticalOriented &&
                "text-lg text-upright writing-vertical-rl"
            )}
          >
            {title}
          </h3>
        </div>
      )}
      {!!listEntry?.length && (
        <div className="flex-col -mb-4">
          {listEntry?.map((entry) =>
            !anchorList ? (
              <TopicMediaListItemJSX
                key={entry.identifier}
                entry={entry}
                textColorClass={isHighlight ? "text-black" : undefined}
              />
            ) : (
              <DynamicAnchor key={entry.identifier} href={entry.href?.href}>
                <TopicMediaListItemJSX
                  entry={entry}
                  isAnchor
                  textColorClass={isHighlight ? "text-black" : undefined}
                />
              </DynamicAnchor>
            )
          )}
        </div>
      )}
    </div>
  );
};
