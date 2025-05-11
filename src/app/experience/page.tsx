import { Experience } from "@/types/app";
// Make sure this path is correct and 'experience' is the updated data I'll provide below
import { experience } from "@/utils/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="w-full p-2 px-8 flex flex-col h-full">
      <h1 className="font-bold text-xl mb-6">Experience</h1>
      <div className="overflow-y-auto h-full flex flex-col items-start px-2 ">
        {experience.map((item: Experience) => {
          // 1. Split by the actual newline character "\n"
          // 2. Filter out any empty strings that might result from trailing newlines
          //    or multiple newlines in the data.
          const descLines = item.description
            .split("\n")
            .filter((line) => line.trim() !== "");

          return (
            <div className="flex flex-col my-2 w-full mb-4" key={item.name}>
              <div className="flex flex-row mb-2">
                <Image
                  src={item.image} // Ensure 'item.image' resolves to a valid image source
                  className="rounded-xl overflow-hidden border w-12 h-12 border-[#afafaf]/20 mr-4"
                  alt={item.name}
                  width={48} // Explicit width for Next/Image
                  height={48} // Explicit height for Next/Image
                />
                <div>
                  <h2 className="font-bold text-md">{item.name}</h2>
                  <div className="flex items-center">
                    <h3 className="text-xs font-thin">{item.position}</h3>
                    <span className="mx-2 font-thin"> :</span>
                    <h3 className="text-xs font-thin">
                      {item.start} - {item.end}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Ensure there are lines to render before creating the ul */}
              {descLines.length > 0 && (
                <ul className="text-sm w-full font-light list-disc text-white  rounded-md px-6 py-2 mt-1">
                  {descLines.map((line, idx) => {
                    return <li key={idx}>{line}</li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page; // Assuming this is a page component
