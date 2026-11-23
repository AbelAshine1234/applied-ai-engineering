"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ALL_MODULES, CURRICULUM } from "../data/curriculum";
import { ModuleData, PortfolioProject } from "../types/curriculum";

interface ProgressState {
  [moduleId: number]: {
    [stepIndex: number]: boolean;
  };
}

interface DocsContextType {
  activeView: "module" | "overview" | "capstones" | "contract";
  activeModuleId: number;
  activeProjectSlug: string | null;
  searchQuery: string;
  priorityOnly: boolean;
  theme: "light" | "dark";
  progress: ProgressState;
  completedModuleCount: number;
  totalModules: number;
  setActiveView: (view: "module" | "overview" | "capstones" | "contract") => void;
  setActiveModuleId: (id: number) => void;
  setActiveProjectSlug: (slug: string | null) => void;
  setSearchQuery: (query: string) => void;
  setPriorityOnly: (val: boolean) => void;
  toggleTheme: () => void;
  toggleStep: (moduleId: number, stepIndex: number) => void;
  markModuleComplete: (moduleId: number) => void;
  resetModule: (moduleId: number) => void;
  isModuleCompleted: (moduleId: number) => boolean;
  getModuleCompletedStepsCount: (moduleId: number) => number;
  exportProgressJSON: () => string;
  importProgressJSON: (jsonStr: string) => boolean;
}

const DocsContext = createContext<DocsContextType | null>(null);

const STORAGE_KEY = "applied_ai_docs_progress_v2";
const THEME_KEY = "applied_ai_theme_v2";

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const [activeView, setActiveView] = useState<"module" | "overview" | "capstones" | "contract">("overview");
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityOnly, setPriorityOnly] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [progress, setProgress] = useState<ProgressState>({});
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }

      const savedProgress = localStorage.getItem(STORAGE_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
    }
    setMounted(true);
  }, []);

  // Save progress
  const saveProgress = (newProgress: ProgressState) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.error("Failed to save progress to localStorage", e);
    }
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
  };

  const toggleStep = (moduleId: number, stepIndex: number) => {
    const currentModule = progress[moduleId] || {};
    const nextModule = {
      ...currentModule,
      [stepIndex]: !currentModule[stepIndex],
    };
    const nextProgress = {
      ...progress,
      [moduleId]: nextModule,
    };
    saveProgress(nextProgress);
  };

  const markModuleComplete = (moduleId: number) => {
    const mod = ALL_MODULES.find((m) => m.id === moduleId);
    if (!mod) return;
    const completedAll: { [key: number]: boolean } = {};
    for (let i = 0; i < mod.checklist.length; i++) {
      completedAll[i] = true;
    }
    const nextProgress = {
      ...progress,
      [moduleId]: completedAll,
    };
    saveProgress(nextProgress);
  };

  const resetModule = (moduleId: number) => {
    const nextProgress = { ...progress };
    delete nextProgress[moduleId];
    saveProgress(nextProgress);
  };

  const getModuleCompletedStepsCount = (moduleId: number): number => {
    const modProgress = progress[moduleId];
    if (!modProgress) return 0;
    return Object.values(modProgress).filter(Boolean).length;
  };

  const isModuleCompleted = (moduleId: number): boolean => {
    const mod = ALL_MODULES.find((m) => m.id === moduleId);
    if (!mod) return false;
    const count = getModuleCompletedStepsCount(moduleId);
    return count >= mod.checklist.length;
  };

  const completedModuleCount = ALL_MODULES.filter((m) => isModuleCompleted(m.id)).length;

  const exportProgressJSON = (): string => {
    return JSON.stringify(progress, null, 2);
  };

  const importProgressJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      saveProgress(parsed);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <DocsContext.Provider
      value={{
        activeView,
        activeModuleId,
        activeProjectSlug,
        searchQuery,
        priorityOnly,
        theme,
        progress,
        completedModuleCount,
        totalModules: ALL_MODULES.length,
        setActiveView,
        setActiveModuleId,
        setActiveProjectSlug,
        setSearchQuery,
        setPriorityOnly,
        toggleTheme,
        toggleStep,
        markModuleComplete,
        resetModule,
        isModuleCompleted,
        getModuleCompletedStepsCount,
        exportProgressJSON,
        importProgressJSON,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
}

export function useDocs() {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error("useDocs must be used within a DocsProvider");
  }
  return context;
}
