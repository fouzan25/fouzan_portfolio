import type { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: 5, icon: "FaReact" },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 4,
    icon: "SiTypescript",
  },
  { name: "JavaScript", category: "frontend", proficiency: 5, icon: "FaJs" },
  { name: "HTML/CSS", category: "frontend", proficiency: 5, icon: "FaHtml5" },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 4,
    icon: "SiNextdotjs",
  },

  // Backend
  { name: "Node.js", category: "backend", proficiency: 4, icon: "FaNodeJs" },
  { name: "Express", category: "backend", proficiency: 4, icon: "SiExpress" },
  { name: "Python", category: "backend", proficiency: 3, icon: "FaPython" },
  { name: "REST APIs", category: "backend", proficiency: 5, icon: "FaServer" },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: 4,
    icon: "SiPostgresql",
  },
  { name: "MongoDB", category: "database", proficiency: 3, icon: "SiMongodb" },
  { name: "Redis", category: "database", proficiency: 3, icon: "SiRedis" },

  // Tools
  { name: "Git", category: "tools", proficiency: 5, icon: "FaGit" },
  { name: "Docker", category: "tools", proficiency: 3, icon: "FaDocker" },
  { name: "AWS", category: "tools", proficiency: 3, icon: "FaAws" },
  { name: "Vite", category: "tools", proficiency: 4, icon: "SiVite" },
];

export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((skill) => skill.category === category);
