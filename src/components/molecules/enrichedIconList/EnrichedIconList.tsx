// Types
import { List, ListEntry, Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import { SvgImage, SvgImageVariants } from "@/components/atoms/svgImage";
import { DynamicAnchor } from "../dynamicAnchor";

type EnrichedListType = {
  anchorList?: boolean;
  list?: Maybe<List>;
  titleVerticalOriented?: boolean;
};

const listItemJSX = (entry: ListEntry) => (
  <div key={entry.identifier} className="flex flex-col md:flex-row mb-4">
    <div
      className={cx(
        "mb-2 min-h-[2rem] h-[2rem] min-w-[2rem] w-[2rem]",
        "md:min-h-[4rem] md:min-w-[4rem] md:mr-4"
      )}
    >
      <SvgImage variant={entry.identifier as SvgImageVariants} />
    </div>
    <div className="flex flex-col">
      <span className="text-blue-500">{entry.title}</span>
      {entry.description.map((descr) => (
        <span key={descr.slice(0, 10)}>{descr}</span>
      ))}
    </div>
  </div>
);

export const EnrichedIconList = ({
  anchorList,
  list,
  titleVerticalOriented,
}: EnrichedListType) => {
  const { title, listEntry } = list || {};

  const wrapperClasses = cx(
    "border-2 rounded-lg text-white p-4 max-w-full",
    titleVerticalOriented && "flex"
  );

  return (
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
            listItemJSX(entry)
          ) : (
            <DynamicAnchor key={entry.identifier} href="">
              {listItemJSX(entry)}
            </DynamicAnchor>
          )
        )}
      </div>
    </div>
  );
};
