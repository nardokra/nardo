import { useMemo } from "react";

// Types
import { List, Maybe } from "@/cmsTypes/hygraph";

// Constants
import { isInterActive } from "@/constants/conditionalConstants";

// Utils
import cx from "classnames";
import lodash from "lodash";
import { useSyntheticEventState } from "@/utils/reactHooks/animations";

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
  const { activate, deactivate, isActive } = useSyntheticEventState();

  const isSuitableForVerticalTitleOrientation = useMemo(() => {
    const privateListEntries = list?.listEntry?.flatMap(
      (entry) => entry.private
    );
    const filteredPrivateListEntries =
      privateListEntries?.filter(
        (entry) => !isInterActive || lodash.isNull(entry)
      ) || [];

    return filteredPrivateListEntries?.length > 1 && titleVerticalOriented;
  }, [list?.listEntry, titleVerticalOriented]);

  const wrapperClasses = cx(
    "flex rounded-lg text-white p-4 max-w-full",
    isSuitableForVerticalTitleOrientation ? "flex-row" : "flex-col",
    isInterActive && "transition",
    !isHighlight ? "border-2" : "bg-theme-secondary",
    isInterActive && isHighlight && !isActive && "-rotate-3",
    !isHighlight && isActive && "animate-bounce shadow-md shadow-white"
  );

  return !title && !listEntry ? null : (
    <div
      className={wrapperClasses}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
    >
      {title && (
        <div
          className={cx(
            "flex items-center p-4 bg-white rounded-lg",
            isSuitableForVerticalTitleOrientation
              ? "mr-4 md:mr-10"
              : "w-full mb-4"
          )}
        >
          <h2
            className={cx(
              "uppercase text-black",
              isSuitableForVerticalTitleOrientation &&
                "text-lg text-upright writing-vertical-rl"
            )}
          >
            {title}
          </h2>
        </div>
      )}
      {!!listEntry?.length && (
        <div className="flex flex-col -mb-4">
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
