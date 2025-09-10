import type { TabInfo } from "../types/tabs";

export const findTabByName = (
  tabs: TabInfo[],
  name: string
): TabInfo | undefined => {
  return tabs.find((tab) => tab.name === name);
};

export const removeTabByName = (tabs: TabInfo[], name: string): TabInfo[] => {
  return tabs.filter((tab) => tab.name !== name);
};

export const addTabAtIndex = (
  tabs: TabInfo[],
  tab: TabInfo,
  index: number
): TabInfo[] => {
  const newTabs = [...tabs];
  newTabs.splice(index, 0, tab);
  return newTabs;
};

export const moveTab = (
  tabs: TabInfo[],
  fromIndex: number,
  toIndex: number
): TabInfo[] => {
  const newTabs = [...tabs];
  const [movedTab] = newTabs.splice(fromIndex, 1);
  newTabs.splice(toIndex, 0, movedTab);
  return newTabs;
};

export const getNextActiveTab = (
  tabs: TabInfo[],
  currentActiveTab: string,
  closingTab: string
): string => {
  if (currentActiveTab !== closingTab) {
    return currentActiveTab;
  }

  const currentIndex = tabs.findIndex((tab) => tab.name === closingTab);
  const remainingTabs = tabs.filter((tab) => tab.name !== closingTab);

  if (remainingTabs.length === 0) {
    return "";
  }

  // If closing the last tab, select the previous one
  if (currentIndex >= remainingTabs.length) {
    return remainingTabs[remainingTabs.length - 1].name;
  }

  // Otherwise, select the next tab
  return remainingTabs[currentIndex].name;
};

export const reorderTabsByNames = (
  tabs: TabInfo[],
  orderedNames: string[]
): TabInfo[] => {
  const tabMap = new Map(tabs.map((tab) => [tab.name, tab]));
  return orderedNames
    .map((name) => tabMap.get(name))
    .filter(Boolean) as TabInfo[];
};
