import { SyntheticEvent, useState } from "react";

// Types
import { List, Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

type TopicDescriptionListType = {
  list?: Maybe<List>;
  titleVerticalOriented?: boolean;
};

export const TopicDescriptionList = ({
  list,
  titleVerticalOriented,
}: TopicDescriptionListType) => {
  const { title, listEntry } = list || {};
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const updateBounceState = (event: SyntheticEvent) => {
    const onOffSwitch = event.type === "mouseenter";
    setIsBouncing(onOffSwitch);
    setHasShadow(onOffSwitch);
  };
  const updateShadowState = () => setHasShadow(false);

  const mainClasses = cx(
    "border-2 rounded-lg text-white p-4",
    titleVerticalOriented && "flex",
    isBouncing && "animate-bounce",
    hasShadow && "shadow-md shadow-white"
  );

  return (
    <div
      className={mainClasses}
      onMouseEnter={updateBounceState}
      onMouseLeave={updateBounceState}
      onAnimationEnd={updateShadowState}
    >
      {title && (
        <h3
          className={cx(
            "font-bold uppercase",
            titleVerticalOriented &&
              "text-2xl text-upright writing-vertical-rl mr-4"
          )}
        >
          {title}
        </h3>
      )}
      <div className="flex-col">
        {listEntry?.map((entry) => (
          <div className={cx("flex flex-col pb-3")} key={entry.identifier}>
            <span className="text-theme-primary">{entry.title}</span>

            {entry.description.map((descr) => (
              <span key={descr.slice(0, 10)}>{descr}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
