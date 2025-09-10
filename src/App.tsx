import { useState, useCallback } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import TabBar from "./components/TabBar";
import type { TabInfo } from "./types/tabs";
import { DEFAULT_TABS } from "./config/tabs";
import {
  findTabByName,
  removeTabByName,
  getNextActiveTab,
  moveTab,
} from "./utils/tabUtils";
import { useTypewriterAnimation } from "./hooks/useTypewriterAnimation";

function App() {
  const [activeTab, setActiveTab] = useState("about.md");
  const [openTabs, setOpenTabs] = useState<TabInfo[]>(DEFAULT_TABS);
  const [closedTabs, setClosedTabs] = useState<TabInfo[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Typewriter animation for navigation
  const { triggerAnimation } = useTypewriterAnimation({
    speed: 18,
    lineDelay: 60,
    autoStart: false,
    containerSelector: `.${activeTab.replace(".", "-")}-section .code-content`,
    lineSelector: ".code-line",
  });

  const handleTabClose = useCallback(
    (tabName: string) => {
      try {
        if (openTabs.length <= 1) {
          console.warn("Cannot close the last remaining tab");
          return; // Prevent closing the last tab
        }

        const tabToClose = findTabByName(openTabs, tabName);
        if (!tabToClose) {
          console.warn(`Tab not found: ${tabName}`);
          return;
        }

        const newOpenTabs = removeTabByName(openTabs, tabName);
        const newActiveTab = getNextActiveTab(openTabs, activeTab, tabName);

        setOpenTabs(newOpenTabs);
        setClosedTabs((prev) => [...prev, tabToClose]);

        if (activeTab === tabName) {
          setActiveTab(newActiveTab);
        }
      } catch (error) {
        console.error("Error closing tab:", error);
      }
    },
    [openTabs, activeTab]
  );

  const handleTabReorder = useCallback(
    (fromIndex: number, toIndex: number) => {
      try {
        if (fromIndex === toIndex) return;

        if (
          fromIndex < 0 ||
          fromIndex >= openTabs.length ||
          toIndex < 0 ||
          toIndex >= openTabs.length
        ) {
          console.warn("Invalid tab reorder indices:", {
            fromIndex,
            toIndex,
            tabCount: openTabs.length,
          });
          return;
        }

        const newOpenTabs = moveTab(openTabs, fromIndex, toIndex);
        setOpenTabs(newOpenTabs);
      } catch (error) {
        console.error("Error reordering tabs:", error);
      }
    },
    [openTabs]
  );

  const handleTabReopen = useCallback(
    (tabName: string) => {
      const tabToReopen = findTabByName(closedTabs, tabName);
      if (!tabToReopen) return;

      const newClosedTabs = removeTabByName(closedTabs, tabName);
      setClosedTabs(newClosedTabs);
      setOpenTabs((prev) => [...prev, tabToReopen]);
      setActiveTab(tabName);
    },
    [closedTabs]
  );

  const handleNavigate = useCallback(
    (sectionId: string) => {
      // Remove highlighting from all content elements
      const allHighlighted = document.querySelectorAll(".content-highlighted");
      allHighlighted.forEach((el) =>
        el.classList.remove("content-highlighted")
      );

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Add highlighting to the target element
        setTimeout(() => {
          element.classList.add("content-highlighted");

          // Find and highlight the code editor in the current section
          const currentSection = element.closest(
            ".about-section, .skills-section, .projects-section, .experience-section, .contact-section"
          );
          if (currentSection) {
            const codeEditor = currentSection.querySelector(".code-editor");
            if (codeEditor) {
              codeEditor.classList.add("content-highlighted");

              // Trigger typewriter animation
              triggerAnimation();
            }
          }

          // Remove highlighting after animation
          setTimeout(() => {
            element.classList.remove("content-highlighted");
            if (currentSection) {
              const codeEditor = currentSection.querySelector(".code-editor");
              if (codeEditor) {
                codeEditor.classList.remove("content-highlighted");
              }
            }
          }, 4000);
        }, 500);
      }
    },
    [triggerAnimation]
  );

  // Get current tab info for mobile header
  const currentTab = openTabs.find(tab => tab.name === activeTab);
  
  return (
    <div className="app">
      {/* Mobile drawer toggle button */}
      <button 
        className="mobile-drawer-toggle"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>
      
      <div className="editor-container">
        <Sidebar
          activeTab={activeTab}
          closedTabs={closedTabs}
          openTabs={openTabs}
          onTabReopen={handleTabReopen}
          onNavigate={handleNavigate}
          onTabChange={setActiveTab}
          isDrawerOpen={isDrawerOpen}
          onDrawerClose={() => setIsDrawerOpen(false)}
        />
        <div className="main-area">
          {/* Mobile header showing current tab */}
          <div className="mobile-header">
            <div className="mobile-header-title">
              <span className="mobile-header-icon">{currentTab?.icon}</span>
              <span>{currentTab?.name}</span>
            </div>
          </div>
          
          <TabBar
            openTabs={openTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onTabClose={handleTabClose}
            onTabReorder={handleTabReorder}
          />
          <MainContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default App;
