// Types
import { ListEntry } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import { SvgImage } from "@/components/atoms/svgImage";

export const TopicMediaListItemJSX = ({ entry }: { entry: ListEntry }) => (
  <div key={entry.identifier} className="flex flex-col md:flex-row mb-4">
    <div
      className={cx(
        "mb-2 min-h-[2rem] h-[2rem] min-w-[2rem] w-[2rem]",
        "md:min-h-[4rem] md:min-w-[4rem] md:mr-4"
      )}
    >
      <SvgImage variant={entry.identifier as keyof typeof SvgImage} />
    </div>
    <div className="flex flex-col">
      <span className="text-blue-500">{entry.title}</span>
      {entry.description.map((descr) => (
        <span key={descr.slice(0, 10)}>{descr}</span>
      ))}
    </div>
  </div>
);
