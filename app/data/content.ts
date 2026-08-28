import type {
  HeroeType,
  JobType,
  ProfileType,
  ProjectCaseStudy,
  ProjectType,
} from "@/types";
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
  SiNestjs,
} from "react-icons/si";
import { FiLayers, FiCode, FiCpu } from "react-icons/fi";

const tinyBlur =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

/**
 * Creates a Portable Text block object with the given text content.
 *
 * @param text - The text content for the block
 * @param key - A unique key identifier for the block
 * @returns A PortableTextBlock object with the specified text and key
 */
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

/**
 * Creates a detail object with title and body text.
 *
 * @param title - The title text
 * @param body - The body content
 * @returns An object containing title and body
 */
function detail(title: string, body: string) {
  return { title, body };
}

/**
 * Creates a feature object with comprehensive description and engineering details.
 *
 * @param title - The feature title
 * @param description - Brief description of the feature
 * @param problem - The problem the feature solves
 * @param engineering - Engineering approach and technical details
 * @returns An object containing all feature information
 */
function feature(
  title: string,
  description: string,
  problem: string,
  engineering: string
) {
  return { title, description, problem, engineering };
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

const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  elevateai: {
    type: "AI SaaS / Meeting Intelligence",
    timeline: "Built as an end-to-end product sprint, from prototype to deployed SaaS experience.",
    hero:
      "ElevateAI was built for people who want the usefulness of a meeting assistant without manually organizing every note afterward. The product lets a user create a domain-specific AI agent, meet with it in a live video session, and leave with transcripts, summaries, recordings, and a chat surface that keeps the meeting useful after the call ends.",
    overview: [
      "The motivation was to explore what an AI-native meeting workflow should feel like when the assistant is part of the product from the beginning. Instead of treating transcription, summarization, and follow-up chat as separate tools, ElevateAI connects them into one loop: prepare an agent, run a meeting, capture the conversation, then ask questions against that meeting context.",
      "The product is aimed at builders, students, creators, and small teams that need structured conversations but do not want heavyweight meeting software. The experience stays direct: choose an agent, start a session, and receive useful artifacts with minimal ceremony.",
    ],
    techStack: [
      detail("Next.js", "Used for the product shell, route-based rendering, API boundaries, and deployment-friendly performance."),
      detail("TypeScript", "Keeps agent, meeting, transcript, and summary data predictable across screens and server calls."),
      detail("Tailwind CSS", "Supports fast iteration on dense product UI such as meeting controls, panels, and empty states."),
      detail("AI APIs", "Transform raw conversation into summaries and contextual follow-up answers."),
      detail("Vercel", "Provides low-friction hosting, preview deployments, and environment configuration."),
    ],
    dataFlow: [
      "A user creates or selects an AI agent with a clear meeting role.",
      "The meeting session starts and produces transcript and recording artifacts.",
      "Transcript content is processed into a structured summary after the meeting.",
      "The chat interface receives the meeting context and answers follow-up questions from that source material.",
    ],
    features: [
      feature("Custom AI Agents", "Users can create assistants for specific meeting contexts.", "Generic assistants lose context and force users to repeat intent.", "Agent configuration gives the app a stable instruction layer that can be reused across meetings."),
      feature("Live Video Meetings", "The meeting room keeps the conversation inside the same product that will process the outcome.", "Switching between meeting tools and AI tools creates friction.", "The meeting experience is modeled as a first-class workflow state rather than an external afterthought."),
      feature("Automatic Transcripts", "Meetings produce text artifacts that can be searched, summarized, and reused.", "Useful decisions are often trapped inside recordings.", "Transcript generation turns real-time conversation into data the system can reason about."),
      feature("AI Summaries", "After the meeting, the product produces a concise summary of the important points.", "Raw transcripts are too long for quick review.", "Summarization compresses the transcript while preserving decisions and context."),
      feature("Post-Meeting Chat", "Users can continue asking questions about a completed meeting.", "Meeting knowledge is hard to retrieve later.", "The chat layer uses meeting artifacts as context so answers stay grounded in the session."),
    ],
    performance: [
      detail("Progressive Loading", "Meeting metadata can appear while slower transcript and AI work continues in the background."),
      detail("Route-Level Splitting", "Next.js keeps setup, meeting, and review screens separated so users do not load every interface at once."),
      detail("Image Reliability", "Static and remote images are configured to avoid broken production renders."),
      detail("Loading States", "AI workflows are not instant, so explicit states reduce uncertainty during processing."),
    ],
    developmentProcess: [
      "The project began with the question: what should happen after a meeting ends if the AI assistant actually understands the meeting?",
      "The first prototype focused on starting a session, capturing useful text, and producing a meaningful summary.",
      "The UI was then refactored around the journey: agent setup, live session, generated artifacts, and follow-up chat.",
      "Final polish centered on deployment behavior, image reliability, and making the post-meeting experience feel continuous.",
    ],
    challenges: [
      detail("Coordinating Real-Time and Async Work", "A meeting happens live, while transcript processing and summaries happen after the fact. Each stage needed to be explicit in the product flow."),
      detail("Keeping AI Output Useful", "Summaries need structure without sounding generic. Focused context and role-specific agents guide generation."),
      detail("Avoiding UI Overload", "Meeting tools can become crowded quickly, so controls and generated content are separated by stage."),
    ],
    deployment: [
      detail("Vercel Hosting", "Vercel keeps Next.js deployment, previews, and environment configuration straightforward."),
    ],
    futureImprovements: [
      detail("Team Workspaces", "Shared agents and meeting history would support recurring team workflows."),
      detail("Action Item Extraction", "Turning summaries into structured tasks would reduce the gap between conversation and execution."),
      detail("Search Across Meetings", "Cross-meeting search would help users retrieve decisions without remembering the exact session."),
    ],
    lessonsLearned: [
      detail("AI Products Need Workflow Design", "The hard part is not only calling a model; it is deciding when AI output appears and how users act on it."),
      detail("Async UX Matters", "Meeting artifacts arrive at different times, so loading and empty states are part of the product architecture."),
      detail("Context Is Product Value", "The post-meeting chat becomes useful only when it is grounded in the specific session."),
    ],
    finalThoughts:
      "ElevateAI is a strong example of building around a complete user loop instead of a single AI feature. It turns conversation into durable knowledge and makes the next interaction with that knowledge feel natural.",
  },
  moviesuggestion: {
    type: "Recommendation Web App",
    timeline: "Built as a focused recommendation product with emphasis on discovery, filtering, and quick feedback.",
    hero:
      "Movie Suggestion helps users move from vague viewing intent to a practical watchlist. It is designed for people who know the mood, genre, or style they want but do not want to scroll endlessly through catalogs.",
    overview: [
      "The project was built around a familiar frustration: most users do not need every movie, they need a small set of good options that match the moment. Movie Suggestion treats this as a ranking and presentation problem instead of a simple search page.",
      "The core experience is intentionally lightweight. A user expresses preferences, receives a curated set of recommendations, and can refine from there without facing a wall of filters.",
    ],
    techStack: [
      detail("React", "Powers interactive preference selection, recommendation cards, and fast UI updates."),
      detail("Next.js", "Structures the app as a production-ready web product with optimized routing."),
      detail("TypeScript", "Models movie objects, filter inputs, and API responses with fewer runtime surprises."),
      detail("Tailwind CSS", "Creates responsive movie grids, compact cards, and consistent visual states."),
      detail("Movie Data APIs", "Provide film metadata, images, ratings, and category signals for recommendations."),
    ],
    dataFlow: [
      "The user selects preferences such as genre, mood, or viewing intent.",
      "The app translates those preferences into query parameters or ranking criteria.",
      "Movie data is fetched, filtered, and ordered for relevance.",
      "The UI renders a short list of choices with enough metadata to support a decision.",
    ],
    features: [
      feature("Personalized Recommendations", "The product returns movies based on user preference rather than only popularity.", "Popular lists are often too generic.", "Preference signals are converted into filters and ranking rules before rendering results."),
      feature("Movie Cards", "Each recommendation includes visual and textual context.", "Users need enough information to decide quickly.", "Cards balance poster imagery, title, and metadata without making the grid visually noisy."),
      feature("Preference-Based Filtering", "Users can narrow results around the kind of movie they want.", "Manual search assumes the user already knows the title.", "Filters turn vague intent into structured criteria the app can process."),
      feature("Responsive Discovery Grid", "Recommendations remain easy to scan on desktop and mobile.", "Movie browsing often happens casually on smaller devices.", "The grid adapts column count and spacing while preserving readable card content."),
    ],
    performance: [
      detail("Image Loading", "Movie posters are visual-heavy assets, so sizing and lazy loading improve perceived speed."),
      detail("Client-Side Refinement", "Lightweight refinements can happen without forcing full page transitions."),
      detail("Result Limits", "Showing a focused set improves decision-making and reduces rendering work."),
      detail("Loading Feedback", "Recommendation requests need visible progress so latency does not feel like failure."),
    ],
    developmentProcess: [
      "The first decision was how much preference input the user should provide before seeing value.",
      "The prototype focused on fetching reliable metadata and rendering a clean result grid.",
      "Filtering and ranking were refined so the experience felt closer to guidance than basic search.",
      "Final polish focused on responsiveness, visual consistency, and a fast exploration loop.",
    ],
    challenges: [
      detail("Working Around Rate Limits", "One of the most frustrating parts of the build was dealing with movie API rate limits while testing recommendation flows. Repeated searches, filter changes, and poster lookups could quickly hit request ceilings, so the app needed a more careful request strategy: avoid unnecessary refetches, reuse already-fetched results where possible, limit how many movies are requested at once, and design the UI so users still get useful feedback when the API slows down or refuses a request."),
      detail("Handling Incomplete Data", "Movie APIs can return missing posters or metadata, so the UI needs fallbacks."),
      detail("Recommendation Quality", "Ranking rules need to support user intent, not just raw popularity."),
    ],
    deployment: [
      detail("Vercel", "The app fits Vercel because the frontend and lightweight server routes can ship together."),
    ],
    futureImprovements: [
      detail("User Profiles", "Profiles would let the app learn from previous choices instead of starting over each session."),
      detail("Streaming Provider Filters", "Availability filters would make recommendations immediately actionable."),
      detail("Explainable Recommendations", "Showing why a movie was recommended would build trust in the ranking."),
    ],
    lessonsLearned: [
      detail("Discovery Needs Constraints", "A smaller, better-ranked list often beats an endless catalog."),
      detail("Data Quality Shapes UX", "Fallback states are essential because external movie metadata is not always complete."),
      detail("Rate Limits Shape Architecture", "I spent a lot of time fighting the movie API rate limits while testing the app. At first I was just fetching again whenever a filter changed, but that quickly became a problem. This taught me to be more careful with repeated requests, reuse results when I already had them, and show better fallback states instead of letting the app feel broken when the API pushed back."),
      detail("Personalization Is Iterative", "Recommendation logic improves when refinement is easy."),
    ],
    finalThoughts:
      "Movie Suggestion is a compact project with a clear product lesson: good discovery is not about showing more choices, it is about helping the user make a better choice faster.",
  },
  "ai-content-generator": {
    type: "AI Writing Tool",
    timeline: "Built as a practical AI workflow product focused on prompt structure, editing, and export.",
    hero:
      "AI Content Generator helps creators turn a rough topic into usable written drafts without starting from a blank page. It is built for people who need blog posts, captions, and marketing copy quickly, while still controlling tone, length, and format.",
    overview: [
      "The project solves the gap between a generic chatbot and a focused content workflow. A blank prompt box is flexible, but it puts too much prompt-engineering burden on the user. This app packages repeatable writing patterns into templates.",
      "The product experience centers on a controlled generation loop: select a template, provide intent, generate a draft, refine it, then export the result.",
    ],
    techStack: [
      detail("Next.js", "Combines product UI, server-side AI calls, and deployment in one framework."),
      detail("TypeScript", "Types template configuration, form state, and generated content responses."),
      detail("Tailwind CSS", "Creates a clean writing interface with compact controls and responsive panels."),
      detail("AI Model API", "Acts as the generation engine while the app provides structure around prompts and output format."),
      detail("Markdown Export", "Keeps generated writing portable to blogs, docs, and publishing tools."),
    ],
    dataFlow: [
      "The user selects a content template and fills in topic, tone, and length.",
      "The app validates inputs and converts them into a structured prompt.",
      "The server calls the AI provider and receives generated content.",
      "The UI displays the draft for editing and export.",
    ],
    features: [
      feature("Template-Based Generation", "Users start from structured patterns such as blog posts, captions, or marketing copy.", "Generic prompts produce inconsistent output.", "Templates act as reusable prompt contracts that improve consistency."),
      feature("Tone and Length Controls", "Users shape the draft before generation.", "One-size-fits-all output usually needs heavy rewriting.", "Control inputs are mapped into prompt instructions so the model receives explicit constraints."),
      feature("Iterative Editing", "Generated content can be refined instead of treated as final.", "AI drafts are useful starting points, not always publish-ready text.", "The UI supports a human-in-the-loop workflow where editing remains central."),
      feature("Markdown Export", "Users can move generated content into other writing tools.", "Content loses value if it is trapped in the generator.", "Markdown keeps output portable and friendly to developer and creator workflows."),
    ],
    performance: [
      detail("Async Generation States", "AI calls have variable latency, so the UI communicates progress and prevents duplicate submissions."),
      detail("Prompt Size Control", "Templates keep requests focused, reducing unnecessary token usage."),
      detail("Component Isolation", "Inputs, output preview, and export controls can update independently."),
      detail("Production Builds", "Next.js build checks catch client/server boundary issues before deployment."),
    ],
    developmentProcess: [
      "The idea started from noticing that content generation becomes more useful when the user is guided through structure.",
      "The first prototype validated the core prompt flow: topic in, structured output out.",
      "The next iteration added tone, length, and template choices so outputs could reflect different use cases.",
      "The product was polished around editing, export, and making AI wait time feel intentional.",
    ],
    challenges: [
      detail("Prompt Consistency", "Small prompt changes can create large output differences. Templates reduce that variance."),
      detail("User Control", "Too much automation can make writing feel detached. The editor keeps the user in charge."),
      detail("Latency", "Generation delay is unavoidable, so the product needs clear feedback and duplicate-request protection."),
    ],
    deployment: [
      detail("Vercel Hosting", "The project benefits from quick preview deployments and simple environment variable management."),
    ],
    futureImprovements: [
      detail("Saved Drafts", "Persistent drafts would make the app more useful for ongoing content planning."),
      detail("Brand Voice Profiles", "Reusable voice settings would help teams produce more consistent writing."),
      detail("Version History", "Comparing generations would make refinement easier."),
    ],
    lessonsLearned: [
      detail("Structure Beats Blank Prompts", "AI feels more useful when the product guides the task."),
      detail("Editing Is Part of Generation", "The best workflow keeps humans in the loop after the first draft."),
      detail("Latency Needs Design", "Waiting for AI is part of the experience, so the UI must handle it deliberately."),
    ],
    finalThoughts:
      "AI Content Generator turns prompt engineering into a product workflow. It shows how AI tools become practical when they combine generation with constraints, editing, and export.",
  },
  "dev-spin": {
    type: "Developer Productivity Tool",
    timeline: "Independent project",
    hero:
      "A random tech topic generator for developers who want an idea for their next blog post.",
    overview: [
      "DevSpin gives you a random tech topic, challenges you to think about what you know, and encourages you to write about it. It is a simple way to build a daily habit of learning and blogging.",
      "Topics cover frontend, backend, databases, infrastructure, testing, AI, and systems design. There is no login, history, or tracking—just a topic when you need one.",
    ],
    techStack: [
      detail("Next.js", "App Router and Server Actions."),
      detail("PostgreSQL", "Stores the topic bank via Neon."),
      detail("Drizzle", "Defines the schema and handles database queries."),
      detail("Tailwind CSS", "Styles the interface."),
      detail("TypeScript", "Used across the project."),
    ],
    dataFlow: [
      "Topics are stored in PostgreSQL.",
      "The user clicks Spin.",
      "A Server Action picks a random topic from the database.",
      "The topic card displays the topic and its category.",
    ],
    features: [
      feature("Random Topic Generator", "Gets one random topic from the full topic bank.", "Choosing a topic can slow down the writing habit.", "The random query keeps the interaction quick and unpredictable."),
      feature("Curated Topic Bank", "Combines technologies and concepts from matching domains.", "Random combinations can produce topics that do not make sense.", "Domain tags keep generated topics relevant."),
      feature("Standalone Topics", "Includes systems-design topics such as CAP Theorem and OAuth 2.0.", "Some useful topics do not need a technology-and-concept pairing.", "These topics are added directly to the same bank."),
      feature("No Account Needed", "Works without login or saved history.", "A small daily tool should be easy to open and use.", "The experience stays focused on getting a topic immediately."),
    ],
    performance: [
      detail("Single Query", "Each spin only needs one random topic from the database."),
      detail("Server Actions", "Topic selection happens on the server without a separate API route."),
      detail("Small Interface", "The page only renders the current topic and the spin action."),
      detail("No Extra Services", "There are no accounts, analytics, or feeds to load."),
    ],
    developmentProcess: [
      "Started with a simple question: what should I write about today?",
      "Created a topic bank from technologies, concepts, and standalone systems-design ideas.",
      "Added domain tags so technologies and concepts are only paired when they fit together.",
      "Connected the topic bank to a simple spin action and kept the interface minimal.",
    ],
    challenges: [
      detail("Useful Randomness", "The topic needs to be surprising without being irrelevant."),
      detail("Matching Domains", "Technologies and concepts are paired only when their domain tags match."),
      detail("Keeping It Simple", "The app avoids accounts and extra screens so a topic is always one click away."),
    ],
    deployment: [
      detail("Vercel", "The live app is deployed on Vercel."),
      detail("Neon", "PostgreSQL is hosted through Neon."),
    ],
    futureImprovements: [
      detail("More Topics", "Keep growing the curated topic bank."),
      detail("Topic Filters", "Let users focus on a category when they want to."),
      detail("Shareable Topics", "Make it easy to share a good prompt with another developer."),
    ],
    lessonsLearned: [
      detail("Good Data Matters", "The quality of the topic bank shapes the usefulness of every spin."),
      detail("Constraints Help", "Matching domains prevents random combinations from becoming meaningless."),
      detail("Small Tools Can Be Useful", "A focused app can help build a habit without needing many features."),
    ],
    finalThoughts:
      "DevSpin is a small tool for getting unstuck. Spin a topic, learn something, and write about it.",
  },
};

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
    caseStudy: projectCaseStudies.elevateai,
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
    caseStudy: projectCaseStudies.moviesuggestion,
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
    caseStudy: projectCaseStudies["ai-content-generator"],
  },
  {
    _id: "project-4",
    name: "Dev×Spin",
    slug: "dev-spin",
    tagline: "Get a random tech topic for your next blog post.",
    projectUrl: "https://dev-spin.vercel.app/",
    repository: "https://github.com/rhittik12/DevSpin",
    logo: "/dev-spin-logo.svg",
    coverImage: {
      image: "/dev-spin-cover.svg",
      alt: "Dev×Spin topic generator interface",
      lqip: tinyBlur,
    },
    description: [
      block(
        "DevSpin is a random tech topic generator for a daily blog-writing habit. It picks from a curated Postgres topic bank—no login, history, or tracking.",
        "proj-4"
      ),
    ],
    caseStudy: projectCaseStudies["dev-spin"],
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
        detail: "Backend Framework",
        icon: React.createElement(SiExpress, {
          size: 20,
          className: "inline-block mr-2 text-zinc-700 dark:text-zinc-300",
        }),
      },
      {
        name: "NestJS",
        detail: "Backend Framework",
        icon: React.createElement(SiNestjs, {
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
