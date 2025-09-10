import React from "react";
import { useTypewriterAnimation } from "../../hooks/useTypewriterAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
  // Use the reusable typewriter animation hook
  useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: true,
    containerSelector: ".contact-section .code-content",
    lineSelector: ".code-line",
    tabName: "contact",
  });
  return (
    <div className="contact-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content pre-animation">
          <div className="code-line">
            <span className="comment">
              // Let's connect and build something amazing together! 🚀
            </span>
          </div>
          <div className="code-line">
            <span className="comment">
              // Always open to new opportunities and collaborations
            </span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">contactInfo</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">phone</span>
            <span className="operator">:</span>{" "}
            <span className="string">"+91 82819 22982"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">email</span>
            <span className="operator">:</span>{" "}
            <span className="string">"mohkvfouzan@gmail.com"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">location</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Kerala, India"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">availability</span>
            <span className="operator">:</span>{" "}
            <span className="string">"Open for opportunities"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">preferredCommunication</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">[</span>
            <span className="string">"Email"</span>
            <span className="punctuation">,</span>{" "}
            <span className="string">"LinkedIn"</span>
            <span className="bracket">]</span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">socialLinks</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">github</span>
            <span className="operator">:</span>{" "}
            <span className="string">"https://github.com/fouzan25"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">linkedin</span>
            <span className="operator">:</span>{" "}
            <span className="string">
              "https://www.linkedin.com/in/fouzan-kv"
            </span>
            <span className="punctuation">,</span>
          </div>
          {/* <div className="code-line">
            &nbsp;&nbsp;<span className="property">portfolio</span>
            <span className="operator">:</span>{" "}
            <span className="string">"https://fouzankv.dev"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">twitter</span>
            <span className="operator">:</span>{" "}
            <span className="string">"https://twitter.com/fouzankv"</span>
          </div> */}
          <div className="code-line">
            <span className="bracket">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">function</span>{" "}
            <span className="variable">sendMessage</span>
            <span className="bracket">(</span>
            <span className="property">message</span>
            <span className="operator">:</span>{" "}
            <span className="keyword">string</span>
            <span className="bracket">)</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">const</span>{" "}
            <span className="variable">response</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="variable">fetch</span>
            <span className="bracket">(</span>
            <span className="string">'/api/contact'</span>
            <span className="punctuation">,</span>{" "}
            <span className="bracket">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">method</span>
            <span className="operator">:</span>{" "}
            <span className="string">'POST'</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">headers</span>
            <span className="operator">:</span>{" "}
            <span className="bracket">{"{"}</span>{" "}
            <span className="string">'Content-Type'</span>
            <span className="operator">:</span>{" "}
            <span className="string">'application/json'</span>{" "}
            <span className="bracket">{"}"}</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">body</span>
            <span className="operator">:</span>{" "}
            <span className="variable">JSON</span>
            <span className="operator">.</span>
            <span className="variable">stringify</span>
            <span className="bracket">(</span>
            <span className="bracket">{"{"}</span>{" "}
            <span className="property">message</span>{" "}
            <span className="bracket">{"}"}</span>
            <span className="bracket">)</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{"}"}</span>
            <span className="bracket">)</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">&nbsp;&nbsp;</div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="comment">
              // I'll get back to you within 24 hours! ⚡
            </span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">return</span>{" "}
            <span className="string">"Message sent successfully!"</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line">
            <span className="bracket">{"}"}</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="comment">// What I'm looking for:</span>
          </div>
          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">interests</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="string">"Full Stack Development Roles"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="string">"Game Development Projects"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="string">"Freelance Opportunities"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="string">"Open Source Collaborations"</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
            <span className="string">"Tech Discussions & Mentoring"</span>
          </div>
          <div className="code-line">
            <span className="bracket">]</span>
            <span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>

          <div className="code-line">
            <span className="keyword">export</span>{" "}
            <span className="bracket">{"{"}</span>{" "}
            <span className="variable">contactInfo</span>
            <span className="punctuation">,</span>{" "}
            <span className="variable">socialLinks</span>
            <span className="punctuation">,</span>{" "}
            <span className="variable">sendMessage</span>{" "}
            <span className="bracket">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="contact-container">
          <h2 style={{ color: "var(--purple-primary)", marginBottom: "20px" }}>
            Let's Build Something Amazing Together! 🚀
          </h2>
          <p
            style={{
              color: "var(--ocean-blue)",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Whether you have a project in mind, want to collaborate, or just
            want to chat about technology, I'm always excited to connect with
            fellow developers and creators.
          </p>

          <div className="contact-links">
            <a
              href="mailto:fouzan.kv@example.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                textDecoration: "none",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--purple-primary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MdEmail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/fouzan-kv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                textDecoration: "none",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
                cursor: "pointer",
                position: "relative",
                zIndex: 10,
                pointerEvents: "auto",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--purple-primary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/fouzan25"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                textDecoration: "none",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
                cursor: "pointer",
                position: "relative",
                zIndex: 10,
                pointerEvents: "auto",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--purple-primary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <p style={{ color: "var(--ocean-blue)", fontSize: "14px" }}>
            💡 Quick response guaranteed within 24 hours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
