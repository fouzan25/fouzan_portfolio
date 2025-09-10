import { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    role: "Senior Full Stack Developer",
    startDate: "2022-01",
    description:
      "Led development of enterprise web applications using React and Node.js",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Mentored 3 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "2",
    company: "Digital Agency Co.",
    role: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description:
      "Developed custom web solutions for various clients across different industries",
    achievements: [
      "Built 15+ client websites with 99.9% uptime",
      "Reduced client onboarding time by 50% through automation",
      "Implemented responsive designs improving mobile engagement by 35%",
    ],
    technologies: ["React", "Express", "MongoDB", "JavaScript", "CSS"],
  },
];
