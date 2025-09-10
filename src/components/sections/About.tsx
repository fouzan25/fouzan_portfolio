import React from 'react';

const About: React.FC = () => {
  React.useEffect(() => {
    // Add typewriter animation on component load
    const timer = setTimeout(() => {
      const codeLines = document.querySelectorAll('.about-section .code-line');
      let cumulativeDelay = 0;
      
      codeLines.forEach((line) => {
        const element = line as HTMLElement;
        const textContent = element.textContent || '';
        const charCount = Math.max(textContent.length, 1);
        const typingTime = charCount * 25; // Much faster for initial load
        
        // Set timing variables
        element.style.setProperty('--char-count', charCount.toString());
        element.style.setProperty('--cumulative-delay', `${cumulativeDelay}ms`);
        
        // Add typing class
        element.classList.add('typing');
        
        // Show cursor at the start of typing for this line
        setTimeout(() => {
          // Remove cursor from all other lines
          codeLines.forEach(l => l.classList.remove('active-cursor'));
          // Add cursor to current line
          element.classList.add('active-cursor');
          
          // Auto-scroll to keep the typing line in view
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, cumulativeDelay);
        
        // Remove cursor and finish typing for this line
        setTimeout(() => {
          element.classList.remove('typing', 'active-cursor');
          element.classList.add('finished');
        }, cumulativeDelay + typingTime + 100);
        
        // Update cumulative delay for next line
        cumulativeDelay += typingTime + 80; // Very short pause between lines
      });
    }, 300); // Start faster too
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about-section">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i + 1} className="line-number">{i + 1}</div>
          ))}
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="comment">// Welcome to my portfolio</span>
          </div>
          <div className="code-line">
            <span className="comment">// Full Stack Developer | Game Developer | UI/UX Enthusiast</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">name</span><span className="operator">:</span> <span className="string">"Your Name"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">role</span><span className="operator">:</span> <span className="string">"Full Stack Developer"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">location</span><span className="operator">:</span> <span className="string">"Bangalore, India"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">passion</span><span className="operator">:</span> <span className="string">"Creating amazing digital experiences"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">education</span><span className="operator">:</span> <span className="bracket">{'{'}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">degree</span><span className="operator">:</span> <span className="string">"BSc Game Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">college</span><span className="operator">:</span> <span className="string">"ICAT Design and Media College"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">location</span><span className="operator">:</span> <span className="string">"Bangalore"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">specialization</span><span className="operator">:</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Game Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"3D Modeling & Animation"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Interactive Media Design"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">{'}'}</span><span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">expertise</span><span className="operator">:</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Full Stack Web Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Mobile App Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Game Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"3D Modeling & Animation"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"API Development"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Database Design"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span><span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">currentlyLearning</span><span className="operator">:</span> <span className="bracket">[</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Advanced React Patterns"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Cloud Architecture"</span><span className="punctuation">,</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"AI/ML Integration"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="bracket">]</span><span className="punctuation">,</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">funFact</span><span className="operator">:</span> <span className="string">"I love creating immersive experiences both in web and game development!"</span>
          </div>
          <div className="code-line">
            <span className="bracket">{'}'}</span><span className="punctuation">;</span>
          </div>
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Let's build something amazing together! 🚀</span>
          </div>
          <div className="code-line">
            <span className="keyword">export</span> <span className="keyword">default</span> <span className="variable">developer</span><span className="punctuation">;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;