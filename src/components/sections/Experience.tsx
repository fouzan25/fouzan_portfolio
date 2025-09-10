import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Startup",
      duration: "2023 - Present",
      description: "Leading development of scalable web applications using modern tech stack. Implemented microservices architecture, optimized database queries, and mentored junior developers.",
      skills: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Game Developer Intern",
      company: "Game Studio",
      duration: "2022 - 2023",
      description: "Developed gameplay mechanics and UI systems for mobile games using Unity. Collaborated with artists and designers to create immersive gaming experiences.",
      skills: ["Unity", "C#", "Game Design", "Mobile Development", "UI/UX"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      duration: "2021 - 2022",
      description: "Created responsive web applications and interactive user interfaces. Worked closely with design teams to implement pixel-perfect designs with optimal performance.",
      skills: ["React", "JavaScript", "CSS3", "Figma", "Performance Optimization"]
    },
    {
      title: "3D Artist & Developer",
      company: "Freelance",
      duration: "2020 - 2021",
      description: "Provided 3D modeling, animation, and game development services to various clients. Specialized in architectural visualization and game asset creation.",
      skills: ["Maya", "Blender", "Unity", "3D Modeling", "Animation", "Texturing"]
    }
  ];

  return (
    <div className="experience-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i + 1} className="line-number">{i + 1}</div>
          ))}
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="comment">/**</span>
          </div>
          <div className="code-line">
            <span className="comment"> * Professional Experience & Journey</span>
          </div>
          <div className="code-line">
            <span className="comment"> * From 3D Art to Full Stack Development</span>
          </div>
          <div className="code-line">
            <span className="comment"> * Always learning, always growing 🌱</span>
          </div>
          <div className="code-line">
            <span className="comment"> */</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">class</span> <span className="variable">ProfessionalJourney</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span> <span className="property">education</span><span className="operator">:</span> <span className="string">"BSc Game Development - ICAT Bangalore"</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span> <span className="property">yearsOfExperience</span><span className="operator">:</span> <span className="keyword">number</span> <span className="operator">=</span> <span className="string">4</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span> <span className="property">specialties</span><span className="operator">:</span> <span className="keyword">string</span><span className="bracket">[]</span> <span className="operator">=</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Full Stack Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Game Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"3D Art & Animation"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Mobile Development"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">public</span> <span className="variable">getCareerHighlights</span><span className="bracket">()</span><span className="operator">:</span> <span className="keyword">string</span><span className="bracket">[]</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Led development of scalable web applications"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Published games on mobile platforms"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Mentored junior developers and designers"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Delivered 50+ client projects successfully"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{'}'}</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">public</span> <span className="variable">getCurrentFocus</span><span className="bracket">()</span><span className="operator">:</span> <span className="keyword">string</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Building innovative solutions with cutting-edge technology"</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{'}'}</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Professional timeline below 📋</span>
          </div>
        </div>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((experience, index) => {
          const ids = ['fullstack', 'gamedev-intern', 'frontend-dev', 'freelance'];
          return (
            <div key={index} id={ids[index]} className="timeline-item">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-duration">{experience.duration}</div>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;