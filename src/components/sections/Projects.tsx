import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "🎮 Unity 3D Adventure Game",
      description: "A 3D adventure game with immersive gameplay mechanics, custom shaders, and advanced physics systems. Features include character progression, inventory management, and dynamic lighting.",
      technologies: ["Unity", "C#", "Blender", "Maya", "HLSL Shaders", "ProBuilder"],
      github: "#",
      demo: "#"
    },
    {
      title: "🌐 Full Stack E-Commerce Platform",
      description: "Modern e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Built with microservices architecture for scalability.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "📱 Flutter Social Media App",
      description: "Cross-platform social media application with real-time messaging, post sharing, and user authentication. Optimized for both iOS and Android platforms.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "🚀 FastAPI ML Service",
      description: "High-performance API service for machine learning model deployment with automatic scaling, monitoring, and real-time predictions.",
      technologies: ["FastAPI", "Python", "Docker", "PostgreSQL", "Redis", "MLflow"],
      github: "#",
      demo: "#"
    },
    {
      title: "🎯 Unreal Engine VR Experience",
      description: "Immersive VR experience showcasing architectural visualization with interactive elements and realistic physics simulations.",
      technologies: ["Unreal Engine", "C++", "Blueprint", "VR SDK", "3ds Max"],
      github: "#",
      demo: "#"
    },
    {
      title: "💻 VS Code Extension",
      description: "Developer productivity extension with code snippets, automated workflows, and integration with popular development tools.",
      technologies: ["TypeScript", "VS Code API", "Node.js", "JSON", "Git"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="projects-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i + 1} className="line-number">{i + 1}</div>
          ))}
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"portfolio"</span><span className="operator">:</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"projects"</span><span className="operator">:</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"type"</span><span className="operator">:</span> <span className="string">"Full Stack Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"status"</span><span className="operator">:</span> <span className="string">"Production Ready"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"focus"</span><span className="operator">:</span> <span className="string">"User Experience & Performance"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'}'}</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"type"</span><span className="operator">:</span> <span className="string">"Game Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"engines"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Unity"</span><span className="punctuation">,</span> <span className="string">"Unreal Engine"</span><span className="bracket">]</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"specialty"</span><span className="operator">:</span> <span className="string">"3D Games & VR Experiences"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'}'}</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"type"</span><span className="operator">:</span> <span className="string">"Mobile Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"platforms"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"iOS"</span><span className="punctuation">,</span> <span className="string">"Android"</span><span className="bracket">]</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"framework"</span><span className="operator">:</span> <span className="string">"Flutter"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'}'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"passion"</span><span className="operator">:</span> <span className="string">"Building innovative solutions that make a difference"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{'}'}</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span>
          </div>
          <div className="code-line"></div>
          <div className="code-line">
            <span className="comment">// Explore my projects below 👇</span>
          </div>
        </div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => {
          const ids = ['unity-game', 'ecommerce', 'flutter-app', 'fastapi', 'unreal-vr', 'vscode-ext'];
          return (
            <div key={index} id={ids[index]} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">GitHub</a>
                <a href={project.demo} className="project-link">Live Demo</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;