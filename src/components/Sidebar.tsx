import React from "react";
import ClosedTabsSection from "./ClosedTabsSection";
import type { TabInfo } from "../types/tabs";
import { NAVIGATION_ITEMS } from "../config/tabs";

interface SidebarProps {
  activeTab: string;
  closedTabs: TabInfo[];
  onTabReopen: (tabName: string) => void;
  onNavigate: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  closedTabs,
  onTabReopen,
  onNavigate,
}) => {
  const [activeNavItem, setActiveNavItem] = React.useState<string>("");

  const getNavigationItems = () => {
    return NAVIGATION_ITEMS[activeTab] || [];
  };

  const navigationItems = getNavigationItems();

  const scrollToSection = (id: string) => {
    setActiveNavItem(id);
    onNavigate(id);
  };

  // Reset active nav item when tab changes
  React.useEffect(() => {
    setActiveNavItem("");
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
                className={`file-item nav-item ${
                  activeNavItem === item.id ? "nav-active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="file-icon">{item.icon}</span>
                <span className="file-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <ClosedTabsSection closedTabs={closedTabs} onTabReopen={onTabReopen} />
      </div>
    </div>
  );
};

export default Sidebar;
