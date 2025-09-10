import React from "react";
import { useTypewriterAnimation } from "../../hooks/useTypewriterAnimation";

const Skills: React.FC = () => {
  // Use the reusable typewriter animation hook
  useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: true,
    containerSelector: ".skills-section .code-content",
    lineSelector: ".code-line",
    tabName: "skills",
  });
  const skillCategories = [
    {
      title: "📱 Mobile Development",
      skills: [
        "Flutter",
        "Dart",
        "Cross-platform Development",
        "iOS",
        "Android",
      ],
    },
    {
      title: "⚙️ Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "REST APIs",
        "WebSockets",
        "JSON",
      ],
    },
    {
      title: "☁️ AWS & Cloud Services",
      skills: [
        "AWS",
        "AWS Lambda",
        "AWS Cognito",
        "AWS IoT Core",
        "DynamoDB",
        "Docker",
      ],
    },
    {
      title: "🗄️ Database Management",
      skills: ["MongoDB", "DynamoDB", "SQLite", "SQL", "Google Firebase"],
    },
    {
      title: "🤖 AI & Machine Learning",
      skills: ["TensorFlow", "Python", "Reinforcement Learning", "Game AI"],
    },
    {
      title: "💻 Programming Languages",
      skills: ["Dart", "Python", "C/C++", "C#", "JavaScript", "TypeScript", "Go", "PHP", "SQL"],
    },
    {
      title: "🛠️ Development Tools",
      skills: ["Git", "GitHub", "Postman", "Docker", "FFMPEG"],
    },
    {
      title: "🏢 Enterprise & ECommerce",
      skills: ["ECommerce", "Magento", "SaaS Development", "IoT Solutions"],
    },
  ];

  return (
    <div className="skills-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content pre-animation">
          <div className="code-line">
            <span className="comment">// My Technical Skills & Expertise</span>
          </div>
          <div className="code-line">
            <span className="comment">
              // Constantly learning and evolving 🚀
            </span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">interface</span>{" "}
            <span className="variable">SkillSet</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">category</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">technologies</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>
            <span className="bracket">[]</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">proficiency</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Advanced"</span>{" "}
            <span className="operator">|</span>{" "}
            <span className="string">"Intermediate"</span>{" "}
            <span className="operator">|</span>{" "}
            <span className="string">"Learning"</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="comment">
              // 4+ Years Software Engineering Journey
            </span>
          </div>
          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">mySkills</span>
            <span className="operator">:</span>{" "}
            <span className="variable">SkillSet</span>
            <span className="bracket">[]</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="comment">
              // Interactive skills showcase below ⬇️
            </span>
          </div>
          <div className="code-line">
            <span className="bracket">]</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">export</span>{" "}
            <span className="bracket">{"{"}</span>{" "}
            <span className="variable">mySkills</span>{" "}
            <span className="bracket">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const ids = [
            "mobile",
            "backend", 
            "cloud",
            "database",
            "ai",
            "languages",
            "tools",
            "enterprise",
          ];
          return (
            <div key={index} id={ids[index]} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Spacer for bottom margin */}
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Skills;
