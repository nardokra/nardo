// Types
import { ListEntry } from "@/cmsTypes/hygraph";

// Constants
import { isInterActive } from "@/constants/conditionalConstants";

// Utils
import cx from "classnames";

// Components
import { SvgImage, SvgElement } from "@/components/atoms/svgImage";

type TopicMediaListItemJSXType = {
  isAnchor?: boolean;
  entry: ListEntry;
  textColorClass?: string;
};

export const TopicMediaListItemJSX = ({
  entry,
  isAnchor,
  textColorClass,
}: TopicMediaListItemJSXType) =>
  isInterActive && entry.private ? null : (
    <div key={entry.identifier} className="flex flex-row mb-4">
      {!!SvgElement[entry.identifier as keyof typeof SvgElement] && (
        <div
          className={cx(
            "flex justify-center mb-1 min-h-8 h-8 min-w-8 w-8",
            isInterActive
              ? "md:min-h-[4rem] md:min-w-[4rem] mr-4"
              : "md:min-h-[2rem] md:min-w-[2rem] mr-2"
          )}
        >
          <SvgImage
            variant={entry.identifier as keyof typeof SvgElement}
            hexColorCode={textColorClass ? "#000" : undefined}
          />
        </div>
      )}
      <div className="flex flex-col">
        <h3
          className={cx(
            textColorClass
              ? `${textColorClass} font-bold`
              : "text-theme-primary"
          )}
        >
          {entry.title}
        </h3>
        {entry.description.map((descr) => (
          <span
            key={descr.slice(0, 10)}
            className={cx(
              "break-all",
              !!isAnchor && "underline",
              textColorClass || "text-white"
            )}
          >
            {descr}
          </span>
        ))}
      </div>
    </div>
  );
