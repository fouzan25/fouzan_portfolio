import React from 'react';

interface TabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'about.md', icon: '📄' },
    { name: 'skills.ts', icon: '⚡' },
    { name: 'projects.json', icon: '📁' },
    { name: 'experience.tsx', icon: '💼' }
  ];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`tab ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.name)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-name">{tab.name}</span>
          <span className="tab-close">×</span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;