import { useRef, useEffect, useState } from "react";

// Types
import { Maybe } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";
import { useSyntheticEventState } from "@/utils/reactHooks/animations";

type TitleCircleType = {
  className?: string;
  title?: Maybe<string>;
};

export const TextCircle = ({ className, title }: TitleCircleType) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isActive, activate, deactivate } = useSyntheticEventState();

  const [circleProps, setCircleProps] = useState<{
    firstWordLetters: string;
    titleSplit: string[];
    rotation: number;
    size: number;
  }>();

  useEffect(() => {
    const firstWordLetters =
      title
        ?.split(" ")
        .map((word) => word[0])
        .join("") || "";
    const titleSplit = `${title} `?.split("") || [];
    const rotation = 360 / titleSplit.length;
    const parentWidth = wrapperRef?.current?.clientWidth || 0;
    const parentHeight = wrapperRef?.current?.clientHeight || 0;
    const circleSize = Math.min(parentWidth, parentHeight);
    const minimumSize = 180;
    const size = circleSize < minimumSize ? minimumSize : circleSize;

    setCircleProps({
      firstWordLetters,
      titleSplit,
      rotation,
      size,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrapperClasses = cx(
    className,
    "relative flex flex-col grow w-full h-full items-center justify-center",
    isActive && "animate-spin"
  );

  return (
    <div
      className={wrapperClasses}
      ref={wrapperRef}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
    >
      {circleProps?.titleSplit?.map((titleCharacter, index) => {
        return (
          <div
            key={`${index}: ${titleCharacter}`}
            className="text-white font-medium absolute origin-center"
            style={{
              height: `${circleProps.size}px`,
              transform: `rotate(${circleProps.rotation * index}deg)`,
            }}
          >
            {titleCharacter}
          </div>
        );
      })}
      {circleProps?.firstWordLetters && (
        <div className="flex items-center justify-center lowercase text-white h-8 w-8 bg-black rounded-lg mb-2">
          <span>{circleProps.firstWordLetters}</span>
        </div>
      )}
    </div>
  );
};
