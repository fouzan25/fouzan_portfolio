export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 1-5
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}

// Re-export tab types
export * from './tabs';