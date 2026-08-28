export type TableRow = {
  _key?: string;
  _type?: "tableRow";
  cells: string[];
};

export type PortableTextBlock = {
  _type: string;
  _key: string;
  style?: string;
  markDefs?: Array<Record<string, unknown>>;
  children?: Array<Record<string, unknown>>;
};

export interface Table {
  rows?: TableRow[];
  title?: string;
}

export interface TableValueProps {
  table?: Table;
  caption?: string;
}

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  og: string;
  usage: PortableTextBlock[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectDetailItem = {
  title: string;
  body: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
  problem: string;
  engineering: string;
};

export type ProjectCaseStudy = {
  type: string;
  timeline: string;
  hero: string;
  overview: string[];
  currentStatus?: string;
  simpleDetails?: ProjectDetailItem[];
  techStack: ProjectDetailItem[];
  dataFlow: string[];
  features: ProjectFeature[];
  performance: ProjectDetailItem[];
  developmentProcess: string[];
  challenges: ProjectDetailItem[];
  deployment: ProjectDetailItem[];
  futureImprovements: ProjectDetailItem[];
  lessonsLearned: ProjectDetailItem[];
  finalThoughts: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: PortableTextBlock[];
  caseStudy?: ProjectCaseStudy;
};

export type HeroeType = {
  _id: string;
  _createdAt: string;
  name: string;
  url: string;
  met: boolean;
};
