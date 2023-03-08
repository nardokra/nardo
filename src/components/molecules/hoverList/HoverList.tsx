// Types
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Maybe, List } from "@/cmsTypes/hygraph";
import { SvgImageVariants } from "@/components/atoms/svgImage";

// Utils
import cx from "classnames";

type HoverListType = {
  list?: Maybe<List>;
  setItem: Dispatch<SetStateAction<SvgImageVariants | undefined>>;
};

export const HoverList = ({ list, setItem }: HoverListType) => {
  const { title, listEntry } = list || {};

  const updateSelectedItem = (event: SyntheticEvent) => {
    setItem((event.target as HTMLElement).id as SvgImageVariants);
  };

  const mainClasses = cx("bg-stone-800 rounded-lg p-4", "text-white uppercase");

  return (
    <ol className={mainClasses}>
      {title && (
        <li className="pb-4 text-blue-500 font-bold">
          <span>{title}</span>
        </li>
      )}

      {listEntry?.map((entry) => (
        <li
          className="pb-4"
          id={entry.identifier}
          key={entry.identifier}
          onMouseEnter={updateSelectedItem}
        >
          {entry.title}
        </li>
      ))}
    </ol>
  );
};
