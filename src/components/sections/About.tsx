import React from "react";
import { useTypewriterAnimation } from "../../hooks/useTypewriterAnimation";

const About: React.FC = () => {
  // Use the reusable typewriter animation hook
  useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: true,
    containerSelector: ".about-section .code-content",
    lineSelector: ".code-line",
    tabName: "about",
  });
  return (
    <div className="about-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content pre-animation">
          <div className="code-line">
            <span className="comment">// Welcome to my portfolio</span>
          </div>
          <div className="code-line">
            <span className="comment">
              // Software Engineer | Flutter & Node.js | AI & Automation | AWS &
              WebSockets
            </span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">developer</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">name</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Fouzan KV"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">role</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Software Engineer"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">location</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Kerala, India"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">experience</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "4+ years in scalable application development"
            </span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">summary</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "Results-driven Software Developer specializing in Flutter,
              Node.js, and Python"
            </span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="property">education</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">degree</span>
            <span className="operator">:</span>{" "}
            <span className="string">"BSc (Hons) Game Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">university</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Bharathiar University"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">duration</span>
            <span className="operator">:</span>{" "}
            <span className="string">"2015 - 2018"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="property">focus</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Game Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Software Engineering"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{"}"}</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="property">expertise</span>
            <span className="operator">:</span>{" "}
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
            <span className="string">"AWS Cloud Services & IoT"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"WebSocket Real-time Communication"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"AI & Machine Learning"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Database Management & APIs"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="property">currentlyLearning</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Advanced AWS Services"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"TensorFlow & AI Development"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="string">"Microservices Architecture"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            &nbsp;&nbsp;<span className="property">funFact</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "Built an AI game agent using TensorFlow that can play 2D games
              autonomously!"
            </span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="comment">
              // Let's build something amazing together! 🚀
            </span>
          </div>
          <div className="code-line">
            <span className="keyword">export</span>{" "}
            <span className="keyword">default</span>{" "}
            <span className="variable">developer</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
