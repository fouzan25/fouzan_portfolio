import React from 'react';

interface SidebarProps {
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const [activeNavItem, setActiveNavItem] = React.useState<string>('');

  const getNavigationItems = () => {
    switch (activeTab) {
      case 'about.md':
        return [
          { name: 'Personal Info', icon: '👨‍💻', id: 'personal' },
          { name: 'Education', icon: '🎓', id: 'education' },
          { name: 'Expertise', icon: '⚡', id: 'expertise' },
          { name: 'Currently Learning', icon: '📚', id: 'learning' },
          { name: 'Fun Fact', icon: '🎯', id: 'funfact' }
        ];
      case 'skills.ts':
        return [
          { name: 'Frontend Development', icon: '🌐', id: 'frontend' },
          { name: 'Backend Development', icon: '⚙️', id: 'backend' },
          { name: 'Mobile Development', icon: '📱', id: 'mobile' },
          { name: 'Game Development', icon: '🎮', id: 'gamedev' },
          { name: 'Database & Cloud', icon: '🗄️', id: 'database' },
          { name: 'Tools & Technologies', icon: '🛠️', id: 'tools' },
          { name: 'Programming Languages', icon: '💻', id: 'languages' },
          { name: 'Design & 3D', icon: '🎨', id: 'design' }
        ];
      case 'projects.json':
        return [
          { name: 'Unity 3D Game', icon: '🎮', id: 'unity-game' },
          { name: 'E-Commerce Platform', icon: '🛒', id: 'ecommerce' },
          { name: 'Flutter Social App', icon: '📱', id: 'flutter-app' },
          { name: 'FastAPI ML Service', icon: '🚀', id: 'fastapi' },
          { name: 'Unreal VR Experience', icon: '🥽', id: 'unreal-vr' },
          { name: 'VS Code Extension', icon: '🔧', id: 'vscode-ext' }
        ];
      case 'experience.tsx':
        return [
          { name: 'Full Stack Developer', icon: '💼', id: 'fullstack' },
          { name: 'Game Developer Intern', icon: '🎯', id: 'gamedev-intern' },
          { name: 'Frontend Developer', icon: '🌐', id: 'frontend-dev' },
          { name: '3D Artist & Developer', icon: '🎨', id: 'freelance' }
        ];
      case 'contact.js':
        return [
          { name: 'Contact Information', icon: '📞', id: 'contact-info' },
          { name: 'Social Links', icon: '🔗', id: 'social' },
          { name: 'Send Message', icon: '📧', id: 'message' },
          { name: 'What I\'m Looking For', icon: '🎯', id: 'opportunities' }
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  const scrollToSection = (id: string) => {
    setActiveNavItem(id);
    
    // Remove highlighting from all content elements
    const allHighlighted = document.querySelectorAll('.content-highlighted');
    allHighlighted.forEach(el => el.classList.remove('content-highlighted'));
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add highlighting to the target element
      setTimeout(() => {
        element.classList.add('content-highlighted');
        
        // Find and highlight the code editor in the current section
        const currentSection = element.closest('.about-section, .skills-section, .projects-section, .experience-section, .contact-section');
        if (currentSection) {
          const codeEditor = currentSection.querySelector('.code-editor');
          if (codeEditor) {
            codeEditor.classList.add('content-highlighted');
            
            // Add typewriter effect to code lines with single moving cursor
            const codeLines = codeEditor.querySelectorAll('.code-line');
            let cumulativeDelay = 0;
            
            codeLines.forEach((line) => {
              const element = line as HTMLElement;
              const textContent = element.textContent || '';
              const charCount = Math.max(textContent.length, 1);
              const typingTime = charCount * 30; // 30ms per character - much faster
              
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
              cumulativeDelay += typingTime + 100; // 100ms pause between lines - shorter
            });
          }
        }
        
        // Remove highlighting after animation
        setTimeout(() => {
          element.classList.remove('content-highlighted');
          if (currentSection) {
            const codeEditor = currentSection.querySelector('.code-editor');
            if (codeEditor) {
              codeEditor.classList.remove('content-highlighted');
              // Remove typewriter classes
              const codeLines = codeEditor.querySelectorAll('.code-line');
              codeLines.forEach(line => line.classList.remove('typing'));
            }
          }
        }, 4000);
      }, 500);
    }
  };

  // Reset active nav item when tab changes
  React.useEffect(() => {
    setActiveNavItem('');
  }, [activeTab]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>OUTLINE</h3>
      </div>
      <div className="file-explorer">
        <div className="folder">
          <div className="folder-header">
            <span className="folder-icon">📋</span>
            <span>{activeTab}</span>
          </div>
          <div className="file-list">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`file-item nav-item ${activeNavItem === item.id ? 'nav-active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="file-icon">{item.icon}</span>
                <span className="file-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;