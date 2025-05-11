"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/experience": {
    name: "experience",
  },
};

type Props = {};

export default function Sidebar({}: Props) {
  let pathname = usePathname() || "/";

  return (
    <aside className="px-8 py-4 md:px-2 md:py-0 md:w-[150px]">
      <LayoutGroup>
        <div className="flex flex-row md:flex-col ">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                  {
                    "text-neutral-500": !isActive,
                    "font-bold": isActive,
                  }
                )}
              >
                <span className="relative py-[5px] px-[10px]">
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </LayoutGroup>
    </aside>
  );
}
