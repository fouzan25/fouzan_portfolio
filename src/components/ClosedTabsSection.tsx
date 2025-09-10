import React from "react";
import type { TabInfo } from "../types/tabs";

interface ClosedTabsSectionProps {
  closedTabs: TabInfo[];
  onTabReopen: (tabName: string) => void;
}

const ClosedTabsSection: React.FC<ClosedTabsSectionProps> = ({
  closedTabs,
  onTabReopen,
}) => {
  if (closedTabs.length === 0) {
    return null;
  }

  return (
    <div className="closed-files-section">
      <div className="folder-header">
        <span className="folder-icon">📋</span>
        <span>Closed Files</span>
      </div>
      <div className="file-list">
        {closedTabs.map((tab) => (
          <div
            key={tab.name}
            className="file-item closed-file-item"
            onClick={() => onTabReopen(tab.name)}
            title={`Reopen ${tab.name}`}
          >
            <span className="file-icon">{tab.icon}</span>
            <span className="file-name">{tab.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClosedTabsSection;
