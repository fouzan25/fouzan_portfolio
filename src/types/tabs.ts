import React from "react";

export interface TabInfo {
  name: string;
  icon: string;
  component: React.ComponentType;
}

export interface NavigationItem {
  name: string;
  icon: string;
  id: string;
}

export interface AppState {
  activeTab: string;
  openTabs: TabInfo[];
  closedTabs: TabInfo[];
  tabOrder: string[];
}

export interface DragState {
  draggedTab: string | null;
  dragOverTab: string | null;
  dropPosition: "before" | "after" | null;
}
