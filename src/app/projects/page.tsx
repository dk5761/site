import React from "react";
import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import { Project } from "@/types/app";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="w-full p-2 px-8 flex flex-col h-full mb-10">
      <h1 className="font-bold text-xl mb-6">Projects</h1>
      <div className="overflow-y-auto h-full flex flex-col md:grid md:grid-cols-2 md:gap-2 items-start px-2 ">
        {projects.map((item: Project) => {
          return <Card item={item} key={item.name} />;
        })}
      </div>
    </section>
  );
};

export default Page;
