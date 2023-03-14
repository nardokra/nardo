import { SyntheticEvent, useState, useMemo } from "react";

// Types
import { List, Maybe } from "@/cmsTypes/hygraph";

// Constants
import { isInterActive } from "@/constants/conditionalConstants";

// Utils
import cx from "classnames";
import lodash from "lodash";

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

  const [isRotated, setIsRotated] = useState<boolean>(isInterActive);

  const updateRotation = (event: SyntheticEvent) => {
    const onOffSwitch = event.type === "mouseenter";
    setIsRotated(!onOffSwitch);
  };

  const wrapperClasses = cx(
    "flex rounded-lg text-white p-4 max-w-full",
    isSuitableForVerticalTitleOrientation ? "flex-row" : "flex-col",
    isInterActive && "transition",
    !isHighlight ? "border-2" : "bg-theme-secondary",
    isInterActive && isHighlight && isRotated && "-rotate-6"
  );

  return !title && !listEntry ? null : (
    <div
      className={wrapperClasses}
      onMouseEnter={isInterActive ? updateRotation : undefined}
      onMouseLeave={isInterActive ? updateRotation : undefined}
    >
      {title && (
        <div
          className={cx(
            "flex items-center p-4 bg-white rounded-lg",
            isSuitableForVerticalTitleOrientation
              ? "mr-4 md:mr-10"
              : "w-min mb-4"
          )}
        >
          <h3
            className={cx(
              "font-bold uppercase text-black",
              isSuitableForVerticalTitleOrientation &&
                "text-lg text-upright writing-vertical-rl"
            )}
          >
            {title}
          </h3>
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
