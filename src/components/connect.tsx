"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  iconUrl: StaticImport;
  url: string;
  labelText?: string;
  alt: string;
};

const Connect = ({ iconUrl, url, labelText, alt }: Props) => {
  return (
    <div
      className="max-w-[160px] border border-[#cbcbcb] bg-black rounded-md
      flex flex-row justify-around py-2 px-4 mr-2 mb-2
      items-center cursor-pointer
      "
    >
      <Image
        className="w-12 h-10 mr-2 object-contain"
        src={iconUrl}
        alt={alt}
      />
      {url.includes("mailto") ? (
        <a href={url} className="font-medium text-sm">
          {" "}
          Click to connect
        </a>
      ) : (
        <Link href={url}>{labelText ?? "Click to connect!"}</Link>
      )}
    </div>
  );
};

export default Connect;
