import { useState } from "react";

// Types
import { Maybe, ImageBlock } from "@/cmsTypes/hygraph";

// Utils
import cx from "classnames";

// Components
import Image from "next/image";
import { SizeVariant } from "@/constants/sizeConstants";

type ImageBrickType = {
  imageBlock?: Maybe<ImageBlock>;
  size?: SizeVariant;
  priority?: boolean;
};

export const ImageBrick = ({
  imageBlock,
  size = SizeVariant.Small,
  priority = false,
}: ImageBrickType) => {
  const [visibleImage, setVisibleImage] = useState(0);

  const updateVisibleImage = () => {
    const nextState = (currentState: number) => {
      return currentState + 1 !== imageBlock?.imageEntry.length
        ? currentState + 1
        : 0;
    };
    setVisibleImage((currentState) => nextState(currentState));
  };

  const mainClasses = cx(
    "overflow-hidden rounded-lg max-w-full",
    size === SizeVariant.Small && "h-80 xs:h-[30rem] sm:h-56",
    size === SizeVariant.Medium && "h-[30rem] sm:h-80"
  );

  return (
    <div className={mainClasses}>
      {imageBlock?.imageEntry.map(({ image, identifier, altText }, index) => (
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
            sizes="(max-width: 768px) 100,(max-width: 1200px) 50, 33"
            priority={priority}
          />
        </div>
      ))}
    </div>
  );
};
