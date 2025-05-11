import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  source_code_link: string;
  live_link: string | null;
}

export interface Tag {
  name: string;
  color: string;
}

export interface Experience {
  name: string;
  position: string;
  description: string;
  start: string;
  end: string;
  image: StaticImageData;
}
