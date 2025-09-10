import React, { useState } from "react";
import DraggableTab from "./DraggableTab";
import type { TabInfo } from "../types/tabs";

interface TabBarProps {
  openTabs: TabInfo[];
  activeTab: string;
  onTabChange: (tabName: string) => void;
  onTabClose: (tabName: string) => void;
  onTabReorder: (fromIndex: number, toIndex: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({
  openTabs,
  activeTab,
  onTabChange,
  onTabClose,
  onTabReorder,
}) => {
  const [draggedTab, setDraggedTab] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent,
    tabName: string,
    index: number
  ) => {
    setDraggedTab(tabName);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", tabName);
  };

  const handleDragEnd = () => {
    setDraggedTab(null);
    setDraggedIndex(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();

    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      const rect = e.currentTarget.getBoundingClientRect();
      const midpoint = rect.left + rect.width / 2;
      const dropIndex = e.clientX < midpoint ? targetIndex : targetIndex + 1;

      // Adjust drop index if dragging from left to right
      const finalDropIndex =
        draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;

      onTabReorder(draggedIndex, finalDropIndex);
    }

    handleDragEnd();
  };

  return (
    <div className="tab-bar">
      {openTabs.map((tab, index) => (
        <DraggableTab
          key={tab.name}
          tab={tab}
          isActive={activeTab === tab.name}
          isDragging={draggedTab === tab.name}
          canClose={openTabs.length > 1}
          onActivate={() => onTabChange(tab.name)}
          onClose={() => onTabClose(tab.name)}
          onDragStart={(e) => handleDragStart(e, tab.name, index)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        />
      ))}
    </div>
  );
};

export default TabBar;
