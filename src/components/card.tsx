import React from "react";

import { Project } from "@/types/app";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: Project;
}

const Card = ({ item }: Props) => {
  return (
    <div
      className="p-4 flex flex-col justify-center sm:w-[100%]  md:w-[100%] border rounded-lg border-[#afafaf]/40 mb-2"
      key={item.name}
    >
      <Image
        src={item.image}
        className="rounded-lg overflow-hidden border  border-[#afafaf]/20 mb-2"
        alt={item.name}
      />
      <h2 className="font-bold text-lg mb-2">{item.name}</h2>
      <p className="font-thin text-sm">{item.description}</p>
      <Link
        href={item.live_link ?? item.source_code_link}
        className="border border-[#afafaf]/22 px-3 py-1 font-normal text-sm max-w-max rounded-xl mt-2 hover:bg-slate-600 hover:text-black"
      >
        Open Live or Source
      </Link>
    </div>
  );
};

export default Card;
