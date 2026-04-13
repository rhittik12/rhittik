import type { HeroeType, JobType, ProfileType, ProjectType } from "@/types";
import type { PortableTextBlock } from "@/types";

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
      "",
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
      "",
    url: "",
    description:
      "Building production web applications and collaborating with teams on modern front-end architecture.",
    startDate: "2022-01-01",
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
    name: "Quiznote",
    slug: "quiznote",
    tagline: "Turn notes or PDFs into interactive quizzes with AI.",
    projectUrl: "https://quiznote.app",
    repository: "https://github.com/Evavic44/quiznote",
    logo:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
    coverImage: {
      image:
        "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
      alt: "Quiznote project cover",
      lqip: tinyBlur,
    },
    description: [
      block(
        "Quiznote is a web app powered by Google Gemini AI that takes your notes as text input or PDF upload and converts them into interactive quizzes.",
        "proj-1"
      ),
      block(
        "The project was built during the GDG Lagos hackathon and is open to contributions.",
        "proj-2"
      ),
    ],
  },
];

export type UsageItem = {
  name: string;
  detail: string;
};

export type UsageSection = {
  title: string;
  items: UsageItem[];
};

export const usageSections: UsageSection[] = [
  {
    title: "Technologies",
    items: [
      { name: "React", detail: "UI Library" },
      { name: "Next.js", detail: "React Framework" },
      { name: "Redux", detail: "Production-grade State Management" },
      { name: "Zustand", detail: "State Management (personal projects)" },
      { name: "Tailwind CSS", detail: "Styling Library" },
      { name: "TypeScript", detail: "Typed Superset of JavaScript" },
      { name: "Sass", detail: "CSS Preprocessor" },
      { name: "Python", detail: "Programming Language" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Visual Studio Code", detail: "Text Editor" },
      { name: "PyCharm", detail: "Python IDE" },
      { name: "IntelliJ IDEA", detail: "Java IDE" },
      { name: "Postman", detail: "API Testing" },
      { name: "Hoppscotch", detail: "API Testing/Development" },
      { name: "Figma", detail: "Design Tool" },
      { name: "Notion", detail: "Note taking and organization" },
    ],
  },
  {
    title: "Platform",
    items: [
      { name: "GitHub", detail: "Version control/hosting service" },
      { name: "GitLab", detail: "Version control/hosting service" },
      { name: "Vercel", detail: "Hosting and database" },
      { name: "Netlify", detail: "Static Jamstack hosting" },
      { name: "Spotify", detail: "Music streaming" },
      { name: "Steam", detail: "Gaming" },
    ],
  },
];