import type { TabInfo, NavigationItem } from "../types/tabs";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

export const DEFAULT_TABS: TabInfo[] = [
  { name: "about.md", icon: "📄", component: About },
  { name: "skills.ts", icon: "⚡", component: Skills },
  { name: "projects.json", icon: "📁", component: Projects },
  { name: "experience.tsx", icon: "💼", component: Experience },
  { name: "contact.js", icon: "📞", component: Contact },
];

export const NAVIGATION_ITEMS: Record<string, NavigationItem[]> = {
  "about.md": [
    { name: "Personal Info", icon: "👨‍💻", id: "personal" },
    { name: "Education", icon: "🎓", id: "education" },
    { name: "Expertise", icon: "⚡", id: "expertise" },
    { name: "Currently Learning", icon: "📚", id: "learning" },
    { name: "Fun Fact", icon: "🎯", id: "funfact" },
  ],
  "skills.ts": [
    { name: "Mobile Development", icon: "📱", id: "mobile" },
    { name: "Backend Development", icon: "⚙️", id: "backend" },
    { name: "AWS & Cloud Services", icon: "☁️", id: "cloud" },
    { name: "Database Management", icon: "🗄️", id: "database" },
    { name: "AI & Machine Learning", icon: "🤖", id: "ai" },
    { name: "Programming Languages", icon: "💻", id: "languages" },
    { name: "Development Tools", icon: "🛠️", id: "tools" },
    { name: "Enterprise & ECommerce", icon: "🏢", id: "enterprise" },
  ],
  "projects.json": [
    { name: "Unity 3D Game", icon: "🎮", id: "unity-game" },
    { name: "E-Commerce Platform", icon: "🛒", id: "ecommerce" },
    { name: "Flutter Social App", icon: "📱", id: "flutter-app" },
    { name: "FastAPI ML Service", icon: "🚀", id: "fastapi" },
    { name: "Unreal VR Experience", icon: "🥽", id: "unreal-vr" },
    { name: "VS Code Extension", icon: "🔧", id: "vscode-ext" },
  ],
  "experience.tsx": [
    { name: "Full Stack Developer", icon: "💼", id: "fullstack" },
    { name: "3D Artist & Developer", icon: "🎨", id: "freelance" },
  ],
  "contact.js": [
    { name: "Contact Information", icon: "📞", id: "contact-info" },
    { name: "Social Links", icon: "🔗", id: "social" },
    { name: "Send Message", icon: "📧", id: "message" },
    { name: "What I'm Looking For", icon: "🎯", id: "opportunities" },
  ],
};
