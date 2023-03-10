// Types
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Maybe, List } from "@/cmsTypes/hygraph";
import { SvgImageVariants } from "@/components/atoms/svgImage";

// Utils
import cx from "classnames";

type HoverListType = {
  list?: Maybe<List>;
  item?: SvgImageVariants;
  setItem?: Dispatch<SetStateAction<SvgImageVariants | undefined>>;
};

export const HoverList = ({ list, item, setItem }: HoverListType) => {
  const { title, listEntry } = list || {};

  const updateSelectedItem = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    setItem?.(target.id as SvgImageVariants);
  };

  const resetItems = () => setItem?.(undefined);

  return (
    <ol
      className={cx("bg-stone-800 rounded-lg p-4", "text-white uppercase")}
      onMouseLeave={resetItems}
    >
      {title && (
        <li className="pb-4 text-blue-500 font-bold">
          <span>{title}</span>
        </li>
      )}

      {listEntry?.map((entry) => (
        <li
          className="flex items-center justify-between w-full pb-4"
          id={entry.identifier}
          key={entry.identifier}
          onMouseEnter={updateSelectedItem}
        >
          {entry.title}
          <div
            className={cx(
              entry.identifier === item &&
                "h-3 w-3 bg-white rounded-lg animate-ping"
            )}
          />
        </li>
      ))}
    </ol>
  );
};
