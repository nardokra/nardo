// Types
import type { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Maybe, List } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

type HoverListType<T> = {
  itemDefault?: T;
  list?: Maybe<List>;
  item?: T;
  setItem?: Dispatch<SetStateAction<T | undefined>>;
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
    setItem?.(target.id as T);
  };

  const resetItems = () => setItem?.(itemDefault);

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
          onMouseEnter={setItem ? updateSelectedItem : undefined}
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
