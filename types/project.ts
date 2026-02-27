export interface Project {
  id: string;
  title: string;
  time: string;
  team: string;
  role: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  duration: string;
  teamSize: number;
  position: string;
  images: string[];
  descriptions: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    architecture?: string[];
    other?: string[];
  };
}