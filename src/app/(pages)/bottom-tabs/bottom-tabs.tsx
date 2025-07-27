"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
  children: ReactNode;
  defaultTab?: string;
}

export const TabProvider: React.FC<TabProviderProps> = ({
  children,
  defaultTab = "tab1",
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

interface TabProps {
  id: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ id, children }) => {
  const { activeTab } = useTab();
  return activeTab === id ? children : null;
};

export interface TabBarProps {
  tabs: Array<{
    id: string;
    label: string;
    icon?: ReactNode;
  }>;
}

export const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 shadow-2xl bg-zinc-100 border-zinc-200 backdrop-blur-xs rounded-full border">
      <div className="flex justify-around gap-2 px-2 items-center min-h-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col px-2.5 py-2 items-center shrink-0 justify-center h-full transition-colors duration-150
              ${
                activeTab === tab.id
                  ? "text-blue-500"
                  : "text-zinc-600 hover:text-white"
              }`}
          >
            {tab.icon && <div className="mb-1">{tab.icon}</div>}
            <span className="text-[0.65rem] font-medium whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

interface TabContainerProps {
  children: ReactNode;
  className?: string;
}

export const TabContainer: React.FC<TabContainerProps> = ({
  children,
  className,
}) => {
  return <div className={cn("pb-16", className)}>{children}</div>;
};
