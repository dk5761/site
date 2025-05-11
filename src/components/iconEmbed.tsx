import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  url: StaticImport;
  alt: string;
};

const IconEmbed = ({ url, alt }: Props) => {
  return (
    <Image
      className="w-6 h-4 mx-1 inline-block object-contain"
      src={url}
      alt={alt}
    />
  );
};

export default IconEmbed;
