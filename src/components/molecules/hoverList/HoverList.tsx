// Types
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Maybe, List } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import { SvgElement } from "@/components/atoms/svgImage";

type HoverListType<T> = {
  itemDefault?: keyof T;
  list?: Maybe<List>;
  item?: keyof T;
  setItem?: Dispatch<SetStateAction<keyof T | undefined>>;
};

export const HoverList = <T,>({
  itemDefault,
  list,
  item,
  setItem,
}: HoverListType<T>) => {
  const { title, listEntry } = list || {};

  const updateSelectedItem = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    setItem?.(target.id as keyof T);
  };

  const resetItems = () => itemDefault && setItem?.(itemDefault);

  return (
    <ol
      className={cx("bg-stone-800 rounded-lg p-4", "text-white uppercase")}
      onMouseLeave={resetItems}
    >
      {title && (
        <h2 className="pb-4 text-theme-primary">
          <span>{title}</span>
        </h2>
      )}

      {listEntry?.map((entry) => (
        <li
          className="flex items-center justify-between w-full pb-4"
          id={entry.identifier}
          key={entry.identifier}
          onMouseEnter={setItem ? updateSelectedItem : undefined}
        >
          {entry.title}
          <div
            className={cx(
              (entry.identifier as keyof typeof SvgElement) === item &&
                "h-3 w-3 bg-white rounded-lg animate-ping"
            )}
          />
        </li>
      ))}
    </ol>
  );
};
