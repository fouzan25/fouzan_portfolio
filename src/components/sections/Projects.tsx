import React from "react";
import { useTypewriterAnimation } from "../../hooks/useTypewriterAnimation";

const Projects: React.FC = () => {
  // Use the reusable typewriter animation hook
  useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: true,
    containerSelector: ".projects-section .code-content",
    lineSelector: ".code-line",
    tabName: "projects",
  });
  const projects = [
    {
      title: "🤖 AI Game Agent",
      description:
        "Built a reinforcement learning agent using TensorFlow to play a 2D game by detecting and reacting to game state. The AI learns optimal strategies through trial and error.",
      technologies: [
        "TensorFlow",
        "Python",
        "Reinforcement Learning",
        "Game AI",
        "Computer Vision",
      ],
      github: "https://github.com/fouzan25/ai-game-agent",
      demo: "#", // Coming soon
    },
    {
      title: "🏠 IoT Control Application",
      description:
        "Cross-platform IoT control app using Flutter integrated with AWS IoT Core, Lambda, DynamoDB, and Cognito for secure device management and real-time monitoring.",
      technologies: [
        "Flutter",
        "AWS IoT Core",
        "Lambda",
        "DynamoDB",
        "Cognito",
        "Dart",
      ],
      github: "#", // Private repository
      demo: "#", // Private project
    },
    {
      title: "🛒 E-Commerce Mobile App",
      description:
        "Full-featured eCommerce mobile application for Magento store with headless architecture, providing seamless shopping experience across platforms.",
      technologies: ["Flutter", "Magento", "REST API", "Dart", "ECommerce"],
      github: "#", // Client project
      demo: "#", // Client project
    },
    {
      title: "💼 SaaS Platform with Real-time Communication",
      description:
        "Developed a SaaS platform with real-time communication using Node.js, WebSockets, and Flutter for instant messaging and live updates.",
      technologies: [
        "Node.js",
        "WebSockets",
        "Flutter",
        "Express.js",
        "Real-time",
      ],
      github: "#", // Private repository
      demo: "#", // Private project
    },
    {
      title: "📊 Back-office Management System",
      description:
        "Closed-source back-office management application for retail inventory and orders with comprehensive dashboard and reporting features.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Inventory Management"],
      github: "#", // Closed-source
      demo: "#", // Closed-source
    },
    {
      title: "🔧 Product Management System",
      description:
        "Built and maintained a product management system for Magento with image optimization using FFMPEG for enhanced performance.",
      technologies: ["Magento", "FFMPEG", "Image Optimization", "PHP", "MySQL"],
      github: "#", // Company project
      demo: "#", // Company project
    },
  ];

  return (
    <div className="projects-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content pre-animation">
          <div className="code-line">
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"portfolio"</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"projects"</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"type"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Flutter & Node.js Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"status"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Production Ready"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"focus"</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "Scalable & High-Performance Applications"
            </span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"}"}</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"type"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"AI & Machine Learning"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"technologies"</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
            <span className="string">"TensorFlow"</span>
            <span className="punctuation">,</span>{" "}
            <span className="string">"Python"</span>
            <span className="bracket">]</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"specialty"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Reinforcement Learning & Game AI"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"}"}</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"type"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Mobile Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"platforms"</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
            <span className="string">"iOS"</span>
            <span className="punctuation">,</span>{" "}
            <span className="string">"Android"</span>
            <span className="bracket">]</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"framework"</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Flutter"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="bracket">{"}"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"passion"</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "Building innovative solutions that make a difference"
            </span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{"}"}</span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
          </div>
          <div className="code-line"></div>
          <div className="code-line">
            <span className="comment">// Explore my projects below 👇</span>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const ids = [
            "unity-game",
            "ecommerce",
            "flutter-app",
            "fastapi",
            "unreal-vr",
            "vscode-ext",
          ];
          return (
            <div key={index} id={ids[index]} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Project links temporarily hidden - all projects are private for now */}
              {/* <div className="project-links">
                <a href={project.github} className="project-link">
                  GitHub
                </a>
                <a href={project.demo} className="project-link">
                  Live Demo
                </a>
              </div> */}
            </div>
          );
        })}
      </div>
      
      {/* Spacer for bottom margin */}
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Projects;
