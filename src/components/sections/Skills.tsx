import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "🌐 Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "SASS/SCSS", "Material-UI", "Bootstrap"]
    },
    {
      title: "⚙️ Backend Development", 
      skills: ["Node.js", "Express.js", "FastAPI", "PHP", "Python", "Go", "C#", "RESTful APIs", "GraphQL", "WebSocket"]
    },
    {
      title: "📱 Mobile Development",
      skills: ["Flutter", "Dart", "React Native", "Android", "iOS", "Cross-platform Development"]
    },
    {
      title: "🎮 Game Development",
      skills: ["Unity", "Unreal Engine", "C#", "C++", "3D Modeling", "Maya", "Blender", "Game Physics", "Shader Programming"]
    },
    {
      title: "🗄️ Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Docker", "Redis", "Elasticsearch"]
    },
    {
      title: "🛠️ Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Adobe Creative Suite", "Linux", "Windows", "macOS"]
    },
    {
      title: "💻 Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "C#", "C", "Go", "PHP", "Dart", "SQL"]
    },
    {
      title: "🎨 Design & 3D",
      skills: ["UI/UX Design", "3D Modeling", "Animation", "Maya", "Blender", "Photoshop", "Illustrator", "Figma", "Sketch"]
    }
  ];

  return (
    <div className="skills-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i + 1} className="line-number">{i + 1}</div>
          ))}
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="comment">// My Technical Skills & Expertise</span>
          </div>
          <div className="code-line">
            <span className="comment">// Constantly learning and evolving 🚀</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">interface</span> <span className="variable">SkillSet</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">category</span><span className="operator">:</span> <span className="keyword">string</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">technologies</span><span className="operator">:</span> <span className="keyword">string</span><span className="bracket">[]</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">proficiency</span><span className="operator">:</span> <span className="string">"Advanced"</span> <span className="operator">|</span> <span className="string">"Intermediate"</span> <span className="operator">|</span> <span className="string">"Learning"</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Full Stack Development Journey</span>
          </div>
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">mySkills</span><span className="operator">:</span> <span className="variable">SkillSet</span><span className="bracket">[]</span> <span className="operator">=</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="comment">// Interactive skills showcase below ⬇️</span>
          </div>
          <div className="code-line">
            <span className="bracket">]</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">export</span> <span className="bracket">{'{'}</span> <span className="variable">mySkills</span> <span className="bracket">{'}'}</span><span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const ids = ['frontend', 'backend', 'mobile', 'gamedev', 'database', 'tools', 'languages', 'design'];
          return (
            <div key={index} id={ids[index]} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;