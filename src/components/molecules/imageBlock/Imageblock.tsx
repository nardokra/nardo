import React from "react";

// Components
import Image from "next/image";

interface ImageBlockProps {
  images: string[];
}

export const ImageBlock = ({ images }: ImageBlockProps) => {
  return (
    <div>
      {images.map(() => (
        <Image key={""} src={""} alt={""} />
      ))}
    </div>
  );
};
