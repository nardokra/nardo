import { useState } from "react";

// Types
import { Maybe, ImageBlock } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import Image from "next/image";

type ImageBlocksType = { imageBlock?: Maybe<ImageBlock> };

export const ImageBlocks = ({ imageBlock }: ImageBlocksType) => {
  const [visibleImage, setVisibleImage] = useState(0);

  const updateVisibleImage = () => {
    const nextState = (currentState: number) => {
      return currentState + 1 !== imageBlock?.imageEntry.length
        ? currentState + 1
        : 0;
    };
    setVisibleImage((currentState) => nextState(currentState));
  };

  return (
    <div className="overflow-hidden rounded-lg border-2 h-80 sm:64 md:h-56">
      {imageBlock?.imageEntry?.map(({ image, identifier, altText }, index) => (
        <div
          className={cx(
            "relative w-full h-full overflow-hidden",
            index !== visibleImage && "hidden"
          )}
          key={identifier}
          onMouseEnter={updateVisibleImage}
          onMouseLeave={updateVisibleImage}
        >
          <Image
            className="relative"
            src={image.url}
            alt={altText}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};
