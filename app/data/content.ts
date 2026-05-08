import type { HeroeType, JobType, ProfileType, ProjectType } from "@/types";
import type { PortableTextBlock } from "@/types";
import * as React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiPostman,
  SiFigma,
  SiNotion,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiNetlify,
  SiSpotify,
  SiSteam,
} from "react-icons/si";
import { FiLayers, FiCode, FiCpu } from "react-icons/fi";

const tinyBlur =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

function block(text: string, key: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${key}-span`,
        marks: [],
        text,
      },
    ],
  } as PortableTextBlock;
}

export const profile: ProfileType = {
  _id: "profile-1",
  fullName: "Rhittik Kumar Barman",
  headline: "Full-Stack developer and Open-source contributor",
  profileImage: {
    image:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/v1778221087/ChatGPT_Image_May_8_2026_11_47_15_AM_vnueq0.png",
    lqip: tinyBlur,
    alt: "Portrait of Rhittik Kumar Barman",
  },
  shortBio:
    "I'm Rhittik Kumar Barman, a software developer passionate about learning and contributing to open-source software that is beneficial to developers and the world at large.",
  email: "rittikbarman20@gmail.com",
  fullBio: [
    block(
      "I am a self-driven, career-oriented software developer specializing in full-stack web development and open-source, currently working as a freelancer. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript, Node.js and Python.",
      "bio-1"
    ),
    block(
      "I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.",
      "bio-2"
    ),
    block(
      "Beyond learning, I enjoy writing technical articles and creating projects that both inspire and benefit fellow developers.",
      "bio-3"
    ),
    {
    _type: "block",
    _key: "bio-4",
    style: "blockquote",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "bio-4-span",
        marks: [],
        text:
          "If you ever spot me in the wild, don't hesitate to say hello. Let's grab a drink and geek out over the latest advancements in software development.",
      },
    ],
  } as PortableTextBlock,
  ],
  location: "India",
  resumeURL: "",
  og: "",
  usage: [
    block(
      "Tools, technologies and gadgets I use on a daily basis but not limited to.",
      "usage-1"
    ),
  ],
};

export const jobs: JobType[] = [
  {
    _id: "job-1",
    name: "Freelance",
    jobTitle: "Full-Stack Developer",
    logo:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve,e_sharpen/v1778165429/ChatGPT_Image_May_7_2026_08_19_57_PM_j3rxxh.png",
    url: "https://www.peopleperhour.com/",
    description:
      "I’ve built and launched complete web applications for clients as a freelance Full-Stack Developer. I turn business ideas into fast, scalable, and easy-to-maintain products. I work on both frontend and backend, handle deployment, and optimize performance. I also stay in close touch with clients, improving the product step by step and providing ongoing support.",
    startDate: "2025-04-01",
    endDate: "",
  },
];

export const heroes: HeroeType[] = [
  {
    _id: "heroe-1",
    _createdAt: "2024-01-01",
    name: "Guillermo Rauch",
    url: "https://twitter.com/rauchg",
    met: false,
  },
  {
    _id: "heroe-2",
    _createdAt: "2024-01-03",
    name: "Addy Osmani",
    url: "https://twitter.com/addyosmani",
    met: false,
  },
];

export const projects: ProjectType[] = [
  {
    _id: "project-1",
    name: "ElevateAI",
    slug: "elevateai",
    tagline: "Create AI meeting agents: live video, automatic transcripts, summaries, and ongoing chat.",
    projectUrl: "https://elevateai-five.vercel.app/",
    repository: "https://github.com/rhittik12/elevateai",
    logo:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/v1778135404/ChatGPT_Image_May_7_2026_11_59_38_AM_kx1ysq.png",
    coverImage: {
      image:
        "https://res.cloudinary.com/ds8wsxe7d/image/upload/v1778133693/Screenshot_2026-05-07_113108_fyvayv.png",
      alt: "ElevateAI project cover",
      lqip: tinyBlur,
    },
    description: [
      block(
        "ElevateAI is a full-stack SaaS platform that enables users to create custom AI agents and have real-time video meetings with them. Each meeting is automatically transcribed, recorded, and summarized by AI. After a meeting ends, users can continue chatting with the agent about the meeting content through an integrated chat interface.",
        "proj-1"
      ),
    ],
  },
  {
    _id: "project-2",
    name: "Movie Suggestion",
    slug: "moviesuggestion",
    tagline: "Get personalized movie recommendations based on your preferences.",
    projectUrl: "https://moviesuggestion-green.vercel.app/",
    repository: "https://github.com/rhittik12/moviesuggestion",
    logo:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/v1778136590/ChatGPT_Image_May_7_2026_12_19_19_PM_a5k7tv.png",
    coverImage: {
      image:
        "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve,e_sharpen/v1778136956/Screenshot_2026-05-07_122530_mmjaob.png",
      alt: "Movie Suggestion project cover",
      lqip: tinyBlur,
    },
    description: [
      block(
        "Movie Suggestion is a web application that provides personalized movie recommendations based on user preferences. It uses a combination of collaborative filtering and content-based filtering to suggest movies that users are likely to enjoy.",
        "proj-2"
      ),
    ],
  },
  {
    _id: "project-3",
    name: "AI Content Generator",
    slug: "ai-content-generator",
    tagline: "Generate high-quality blog posts, marketing copy, and social content with configurable AI templates.",
    projectUrl: "https://ai-content-generator-33ec.vercel.app/",
    repository: "https://github.com/rhittik12/ai-content-generator",
    logo:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve,e_sharpen/v1778138789/ChatGPT_Image_May_7_2026_12_55_36_PM_tiwo0h.png",
    coverImage: {
      image:
        "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve,e_sharpen/v1778138475/Screenshot_2026-05-07_125030_uvejap.png",
      alt: "AI Content Generator project cover",
      lqip: tinyBlur,
    },
    description: [
      block(
        "AI Content Generator is a web app that helps creators and teams produce polished, SEO‑friendly written content quickly. Users provide a topic and choose tone, length, and templates; the app generates blog posts, social captions, and marketing copy with iterative editing, exportable Markdown, and built-in prompt presets to tune results. Built with Next.js and TypeScript, it integrates OpenAI-style models for fast, customizable content workflows",
        "proj-3"
      ),
    ],
  },
  {
    _id: "project-4",
    name: "Typing Battle Game",
    slug: "typing-battle-game",
    tagline: "Challenge your typing speed and accuracy in real-time battles.",
    projectUrl: "https://typing-battle-game.vercel.app/",
    repository: "https://github.com/rhittik12/typing-battle-game",
    logo:
      "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve/v1778139601/ChatGPT_Image_May_7_2026_01_09_43_PM_chbgag.png",
    coverImage: {
      image:
        "https://res.cloudinary.com/ds8wsxe7d/image/upload/e_improve/v1778139438/Screenshot_2026-05-07_130328_ktubll.png",
      alt: "Typing Battle Game project cover",
      lqip: tinyBlur,
    },
    description: [
      block(
        "Typing Battle Game is a hacker-style typing game where falling words test your speed, accuracy, and combo streaks",
        "proj-4"
      ),
    ],
  },
];

export type UsageItem = {
  name: string;
  detail: string;
  icon?: React.ReactNode;
};

export type UsageSection = {
  title: string;
  items: UsageItem[];
};

export const usageSections: UsageSection[] = [
  {
    title: "Technologies",
    items: [
      {
        name: "React",
        detail: "UI Library",
        icon: React.createElement(SiReact, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Next.js",
        detail: "React Framework",
        icon: React.createElement(SiNextdotjs, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Redux",
        detail: "Production-grade State Management",
        icon: React.createElement(SiRedux, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Zustand",
        detail: "State Management (personal projects)",
        icon: React.createElement(FiLayers, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Tailwind CSS",
        detail: "Styling Library",
        icon: React.createElement(SiTailwindcss, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "TypeScript",
        detail: "Typed Superset of JavaScript",
        icon: React.createElement(SiTypescript, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Sass",
        detail: "CSS Preprocessor",
        icon: React.createElement(SiSass, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Python",
        detail: "Programming Language",
        icon: React.createElement(SiPython, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Django",
        detail: "Python Web Framework",
        icon: React.createElement(SiDjango, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Node.js",
        detail: "JavaScript Runtime",
        icon: React.createElement(SiNodedotjs, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Express.js",
        detail: "Node.js Web Framework",
        icon: React.createElement(SiExpress, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "MongoDB",
        detail: "NoSQL Database",
        icon: React.createElement(SiMongodb, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "PostgreSQL",
        detail: "Relational Database",
        icon: React.createElement(SiPostgresql, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        detail: "Text Editor",
        icon: React.createElement(SiVisualstudiocode, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "PyCharm",
        detail: "Python IDE",
        icon: React.createElement(SiPycharm, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "IntelliJ IDEA",
        detail: "Java IDE",
        icon: React.createElement(SiIntellijidea, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Postman",
        detail: "API Testing",
        icon: React.createElement(SiPostman, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Hoppscotch",
        detail: "API Testing/Development",
        icon: React.createElement(FiCode, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Figma",
        detail: "Design Tool",
        icon: React.createElement(SiFigma, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Notion",
        detail: "Note taking and organization",
        icon: React.createElement(SiNotion, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Cursor",
        detail: "AI-powered code editor",
        icon: React.createElement(FiCpu, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        name: "GitHub",
        detail: "Version control/hosting service",
        icon: React.createElement(SiGithub, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "GitLab",
        detail: "Version control/hosting service",
        icon: React.createElement(SiGitlab, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Vercel",
        detail: "Hosting and database",
        icon: React.createElement(SiVercel, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Netlify",
        detail: "Static Jamstack hosting",
        icon: React.createElement(SiNetlify, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Spotify",
        detail: "Music streaming",
        icon: React.createElement(SiSpotify, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "Steam",
        detail: "Gaming",
        icon: React.createElement(SiSteam, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
    ],
  },
];