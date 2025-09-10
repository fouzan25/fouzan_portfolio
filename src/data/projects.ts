import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    longDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with modern technologies and best practices.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates",
    longDescription:
      "A modern task management application with real-time collaboration features, drag-and-drop functionality, and team management capabilities.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Socket.io", "MongoDB", "Express", "Material-UI"],
    liveUrl: "https://example-taskapp.com",
    githubUrl: "https://github.com/username/task-management",
    featured: true,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
