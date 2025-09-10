import React from "react";
import { useTypewriterAnimation } from "../../hooks/useTypewriterAnimation";

const Experience: React.FC = () => {
  // Use the reusable typewriter animation hook
  useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: true,
    containerSelector: ".experience-section .code-content",
    lineSelector: ".code-line",
    tabName: "experience",
  });
  const experiences = [
    {
      title: "Software Developer",
      company: "Sahaba Solutions LLP",
      duration: "November 2020 - Present",
      description:
        "Led the Research and Development team, conducted code reviews, and maintained codebase integrity. Developed cross-platform IoT control app using Flutter integrated with AWS IoT Core, Lambda, DynamoDB, and Cognito. Built product management system for Magento with image optimization using FFMPEG.",
      skills: [
        "Flutter",
        "AWS",
        "Node.js",
        "IoT",
        "DynamoDB",
        "Lambda",
        "Cognito",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      duration: "2020 - Present",
      description:
        "Built full-featured eCommerce mobile app for Magento store. Developed SaaS platform with real-time communication using Node.js, WebSockets, and Flutter. Delivered closed-source back-office management app for retail inventory and orders.",
      skills: [
        "Flutter",
        "Node.js",
        "WebSockets",
        "Magento",
        "SaaS",
        "ECommerce",
      ],
    },
  ];

  return (
    <div className="experience-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content pre-animation">
          <div className="code-line">
            <span className="comment">/**</span>
          </div>
          <div className="code-line">
            <span className="comment">
              {" "}
              * Professional Experience & Journey
            </span>
          </div>
          <div className="code-line">
            <span className="comment">
              {" "}
              * Software Engineer specializing in Flutter & Node.js
            </span>
          </div>
          <div className="code-line">
            <span className="comment">
              {" "}
              * Always learning, always growing 🌱
            </span>
          </div>
          <div className="code-line">
            <span className="comment"> */</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">class</span>{" "}
            <span className="variable">ProfessionalJourney</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span>{" "}
            <span className="property">education</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "BSc (Hons) Game Development - Bharathiar University"
            </span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span>{" "}
            <span className="property">yearsOfExperience</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">number</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="string">4</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">private</span>{" "}
            <span className="property">specialties</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>
            <span className="bracket">[]</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Flutter Mobile Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Node.js Backend Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"AWS Cloud & IoT Solutions"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"AI & Automation"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">public</span>{" "}
            <span className="variable">getCareerHighlights</span>
            <span className="bracket">()</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>
            <span className="bracket">[]</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Enhanced IoT Performance using AWS"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">
              "Reduced code defects by 30% via efficient code reviews"
            </span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">
              "Created eCommerce app with headless architecture"
            </span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">
              "Built SaaS platform with WebSocket-based real-time updates"
            </span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{"}"}</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">public</span>{" "}
            <span className="variable">getCurrentFocus</span>
            <span className="bracket">()</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span>{" "}
            <span className="string">
              "Building innovative solutions with cutting-edge technology"
            </span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{"}"}</span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="comment">// Professional timeline below 📋</span>
          </div>
        </div>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => {
          const ids = [
            "fullstack",
            "gamedev-intern",
            "frontend-dev",
            "freelance",
          ];
          return (
            <div key={index} id={ids[index]} className="timeline-item">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-duration">
                    {experience.duration}
                  </div>
                </div>
                <p className="experience-description">
                  {experience.description}
                </p>
                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
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

export default Experience;
