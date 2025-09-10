import React, { useState } from "react";
import type { TabInfo } from "../types/tabs";

interface DraggableTabProps {
  tab: TabInfo;
  isActive: boolean;
  isDragging: boolean;
  canClose: boolean;
  onActivate: () => void;
  onClose: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

const DraggableTab: React.FC<DraggableTabProps> = ({
  tab,
  isActive,
  isDragging,
  canClose,
  onActivate,
  onClose,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dragOver, setDragOver] = useState<"before" | "after" | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    const position = e.clientX < midpoint ? "before" : "after";

    setDragOver(position);
    onDragOver(e);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    setDragOver(null);
    onDrop(e);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (canClose) {
      try {
        onClose();
      } catch (error) {
        console.error("Error closing tab:", error);
      }
    }
  };

  return (
    <div
      className={`tab ${isActive ? "active" : ""} ${
        isDragging ? "dragging" : ""
      } ${dragOver ? `drop-target drop-${dragOver}` : ""}`}
      onClick={onActivate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <span className="tab-icon">{tab.icon}</span>
      <span className="tab-name">{tab.name}</span>
      <span
        className={`tab-close ${!canClose ? "disabled" : ""} ${
          isHovered || isActive ? "visible" : ""
        }`}
        onClick={handleCloseClick}
        title={canClose ? "Close tab" : "Cannot close last tab"}
      >
        ×
      </span>
    </div>
  );
};

export default DraggableTab;
