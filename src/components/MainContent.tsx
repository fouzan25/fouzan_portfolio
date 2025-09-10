import React from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'about.md':
        return <About />;
      case 'skills.ts':
        return <Skills />;
      case 'projects.json':
        return <Projects />;
      case 'experience.tsx':
        return <Experience />;
      case 'contact.js':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="main-content">
      <div className="editor-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;