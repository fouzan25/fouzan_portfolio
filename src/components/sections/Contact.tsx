import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i + 1} className="line-number">{i + 1}</div>
          ))}
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="comment">// Let's connect and build something amazing together! 🚀</span>
          </div>
          <div className="code-line">
            <span className="comment">// Always open to new opportunities and collaborations</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">contactInfo</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">email</span><span className="operator">:</span> <span className="string">"your.email@example.com"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">location</span><span className="operator">:</span> <span className="string">"Bangalore, India"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">availability</span><span className="operator">:</span> <span className="string">"Open for opportunities"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">preferredCommunication</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Email"</span><span className="punctuation">,</span> <span className="string">"LinkedIn"</span><span class="punctuation">,</span> <span className="string">"Discord"</span><span className="bracket">]</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">socialLinks</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">github</span><span className="operator">:</span> <span className="string">"https://github.com/yourusername"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">linkedin</span><span className="operator">:</span> <span className="string">"https://linkedin.com/in/yourprofile"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">portfolio</span><span className="operator">:</span> <span className="string">"https://yourportfolio.com"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">twitter</span><span className="operator">:</span> <span className="string">"https://twitter.com/yourhandle"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">discord</span><span className="operator">:</span> <span className="string">"YourUsername#1234"</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">function</span> <span className="variable">sendMessage</span><span className="bracket">(</span><span className="property">message</span><span className="operator">:</span> <span className="keyword">string</span><span className="bracket">)</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">const</span> <span className="variable">response</span> <span className="operator">=</span> <span className="variable">fetch</span><span className="bracket">(</span><span className="string">'/api/contact'</span><span className="punctuation">,</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">method</span><span className="operator">:</span> <span className="string">'POST'</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">headers</span><span className="operator">:</span> <span className="bracket">{'{'}</span> <span className="string">'Content-Type'</span><span className="operator">:</span> <span className="string">'application/json'</span> <span className="bracket">{'}'}</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">body</span><span className="operator">:</span> <span className="variable">JSON</span><span className="operator">.</span><span className="variable">stringify</span><span className="bracket">(</span><span className="bracket">{'{'}</span> <span className="property">message</span> <span className="bracket">{'}'}</span><span className="bracket">)</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{'}'}</span><span className="bracket">)</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="comment">// I'll get back to you within 24 hours! ⚡</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Message sent successfully!"</span><span className="punctuation">;</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// What I'm looking for:</span>
          </div>
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">interests</span> <span className="operator">=</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"Full Stack Development Roles"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"Game Development Projects"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"Freelance Opportunities"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"Open Source Collaborations"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="string">"Tech Discussions & Mentoring"</span>
          </div>
          <div className="code-line">
            <span className="bracket">]</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">export</span> <span className="bracket">{'{'}</span> <span className="variable">contactInfo</span><span className="punctuation">,</span> <span className="variable">socialLinks</span><span className="punctuation">,</span> <span className="variable">sendMessage</span> <span className="bracket">{'}'}</span><span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '12px', 
          padding: '40px', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          <h2 style={{ color: 'var(--purple-primary)', marginBottom: '20px' }}>Let's Build Something Amazing Together! 🚀</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.6' }}>
            Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
            I'm always excited to connect with fellow developers and creators.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px', 
            marginBottom: '30px' 
          }}>
            <a 
              href="mailto:your.email@example.com" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '16px', 
                backgroundColor: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                transition: 'all 0.2s ease' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--purple-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '20px' }}>📧</span>
              <span>Email Me</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourprofile" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '16px', 
                backgroundColor: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                transition: 'all 0.2s ease' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--purple-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '20px' }}>💼</span>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '16px', 
                backgroundColor: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                transition: 'all 0.2s ease' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--purple-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '20px' }}>🐙</span>
              <span>GitHub</span>
            </a>
          </div>
          
          <p style={{ color: 'var(--text-comment)', fontSize: '14px' }}>
            💡 Quick response guaranteed within 24 hours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;