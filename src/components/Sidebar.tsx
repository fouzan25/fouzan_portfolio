import React from "react";
import ClosedTabsSection from "./ClosedTabsSection";
import type { TabInfo } from "../types/tabs";
import { NAVIGATION_ITEMS } from "../config/tabs";

interface SidebarProps {
  activeTab: string;
  closedTabs: TabInfo[];
  openTabs: TabInfo[];
  onTabReopen: (tabName: string) => void;
  onNavigate: (sectionId: string) => void;
  onTabChange: (tabName: string) => void;
  isDrawerOpen?: boolean;
  onDrawerClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  closedTabs,
  openTabs,
  onTabReopen,
  onNavigate,
  onTabChange,
  isDrawerOpen = false,
  onDrawerClose,
}) => {
  const [activeNavItem, setActiveNavItem] = React.useState<string>("");

  const getNavigationItems = () => {
    return NAVIGATION_ITEMS[activeTab] || [];
  };

  const navigationItems = getNavigationItems();

  const scrollToSection = (id: string) => {
    setActiveNavItem(id);
    onNavigate(id);
    // Close drawer on mobile when navigation item is selected
    if (onDrawerClose) {
      onDrawerClose();
    }
  };
  
  const handleTabSwitch = (tabName: string) => {
    onTabChange(tabName);
    // Close drawer on mobile when tab is switched
    if (onDrawerClose) {
      onDrawerClose();
    }
  };

  // Reset active nav item when tab changes
  React.useEffect(() => {
    setActiveNavItem("");
  }, [activeTab]);

  return (
    <>
      {/* Mobile drawer overlay */}
      {isDrawerOpen && (
        <div 
          className="mobile-drawer-overlay active"
          onClick={onDrawerClose}
        />
      )}
      
      <div className={`sidebar ${isDrawerOpen ? 'drawer-open' : ''}`}>
        <div className="sidebar-header">
        <h3>EXPLORER</h3>
      </div>
      <div className="file-explorer">
        {/* Files Section - Show all tabs on mobile */}
        <div className="folder files-folder">
          <div className="folder-header">
            <span className="folder-icon">📁</span>
            <span>Files</span>
          </div>
          <div className="file-list">
            {openTabs.map((tab) => (
              <div
                key={tab.name}
                className={`file-item tab-file ${
                  activeTab === tab.name ? "active" : ""
                }`}
                onClick={() => handleTabSwitch(tab.name)}
              >
                <span className="file-icon">{tab.icon}</span>
                <span className="file-name">{tab.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Outline Section - Current tab navigation */}
        <div className="folder outline-folder">
          <div className="folder-header">
            <span className="folder-icon">📋</span>
            <span>Outline</span>
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
        
        {/* Hide closed tabs section on mobile */}
        <div className="desktop-only">
          <ClosedTabsSection closedTabs={closedTabs} onTabReopen={onTabReopen} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
