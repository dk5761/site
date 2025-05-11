import github from "@/assets/images/icons/github.png";
import linkedin from "@/assets/images/icons/linkedin.png";
import twitter from "@/assets/images/icons/twitter.png";
import gmail from "@/assets/images/icons/gmail.png";
import { medium, videoChat, ytClone, rezolv } from "./image";
import { Experience, Project } from "@/types/app";
import youth from "@/assets/images/company/youth.jpg";
import cybertech from "@/assets/images/company/cybertech.jpg";
import ld from "@/assets/images/company/ld.png";

export const connectMap = [
  {
    iconUrl: github,
    url: "https://github.com/dk5761",
    alt: "Github",
    label: "Github",
  },
  {
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/dk5761/",
    alt: "Linked In",
    label: "Linked In",
  },
  {
    iconUrl: twitter,
    url: "https://twitter.com/dk5761",
    alt: "Twitter",
    label: "Twitter",
  },
  {
    iconUrl: gmail,
    url: "mailto:darshankadam714@gmail.com",
    alt: "Gmail",
    label: "Gmail",
  },
];

export const projects: Project[] = [
  {
    name: "Youtube Clone",
    description:
      "Youtube clone created using React.js, MUI5, Vite, TypeScript. It has a UI like Youtube made using Material-ui 5 and also uses Rapid API for fetching the video data from the Youtube API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI-V5",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: ytClone,
    source_code_link: "https://github.com/",
    live_link: "https://video-sharing-dk5761.netlify.app/",
  },
  {
    name: "Video Calling",
    description:
      "Video Calling site using React, Socket.io, simple-peer and MUI v5. It also has a backend server which is responsible for handling socket calls created using Node/Express.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI-V5",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: videoChat,
    source_code_link: "https://github.com/dk5761/react-vc-ui",
    live_link: "https://video-calling-dk5761.netlify.app/",
  },
  {
    name: "Medium Clone",
    description: "Medium clone, where we can create a blog and view the blog.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    source_code_link: "https://github.com/dk5761/nextjs-blog",
    live_link: null,
  },
];

export const experience: Experience[] = [
  {
    name: "Rezolv Ai",
    position: "Software Developer (Frontend & Mobile)",
    description:
      "Pioneered the development of user-centric web and mobile applications, taking full ownership of the frontend lifecycle from concept to deployment.\n\
Architecting and building responsive and interactive web application UIs from scratch using React.js, TypeScript, and TailwindCSS, ensuring high performance and scalability.\n\
Designing and implementing engaging user experiences with smooth animations and transitions leveraging Framer Motion.\n\
Developing a cross-platform mobile application for iOS and Android using React Native and Expo, incorporating native device functionalities.\n\
Leading the optimization efforts for the web application, significantly improving loading times and overall user satisfaction to meet critical business needs.\n\
Collaborating closely with backend teams to define API requirements and integrate frontend components with Node.js, Express.js, and MongoDB services.\n\
Contributing to the backend by developing and maintaining APIs, and notably integrating cutting-edge GenAI features to enhance application capabilities.\n\
Actively participating in agile development cycles, code reviews, and troubleshooting to maintain high code quality and deliver robust solutions.",
    image: rezolv,
    start: "Jan, 2024",
    end: "Present",
  },
  {
    name: "Liquid Diamonds",
    position: "Software Developer (Frontend Focus)",
    description:
      "Developed full-stack solutions with a primary focus on React.js for the frontend and Node.js for backend services. Key contributions include:\n\
Designing and implementing a critical tool for diamond traders, enabling effective comparison between supplier and market diamond data.\n\
Engineering a Node.js and React application to automate the parsing of Excel sheets, fetching corresponding videos from supplier clouds, and uploading them to proprietary cloud storage, significantly streamlining data management.",
    image: ld,
    start: "May, 2023",
    end: "Present", // Ensure this is correct if also working at Rezolv Ai
  },
  {
    name: "Cybertech Systems and Software LTD.",
    position: "UI Developer - React.js",
    description:
      "Specialized as a React Developer, delivering multiple projects for diverse clients, primarily within the GIS industry and for ESRI-based solutions. Key achievements include:\n\
Successfully integrating complex mapping and GIS technologies with React to build highly performant, interactive, and functional websites.\n\
Developing an internal management tool using React Native, enhancing operational efficiency for managers.",
    image: cybertech,
    start: "Nov, 2020",
    end: "May, 2023",
  },
  {
    name: "Youth Technologies",
    position: "Backend Developer - Django",
    description:
      "Contributed as a Backend Developer using Python and Django.\n\
Key responsibilities included implementing a robust authentication system for Django REST APIs.\n\
Additionally, provided valuable assistance to the frontend team on React Native development tasks, demonstrating versatility across the stack.",
    image: youth,
    start: "Aug, 2020",
    end: "Dec, 2020",
  },
];
