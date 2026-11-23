"use client";

import React, { useState, useMemo } from "react";
import { useDocs } from "../context/DocsContext";
import { CURRICULUM } from "../data/curriculum";

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const {
    activeView,
    activeModuleId,
    priorityOnly,
    setActiveView,
    setActiveModuleId,
    isModuleCompleted,
    getModuleCompletedStepsCount,
  } = useDocs();

  const [localSearch, setLocalSearch] = useState("");
  const [collapsedPhases, setCollapsedPhases] = useState<{ [phaseId: number]: boolean }>({});

  const togglePhaseCollapse = (phaseId: number) => {
    setCollapsedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
  };

  // Filter phases and modules based on search and priority filter
  const filteredPhases = useMemo(() => {
    return CURRICULUM.phases
      .map((phase) => {
        const filteredModules = phase.modules.filter((m) => {
          if (priorityOnly && !m.priorityTrack) return false;
          if (!localSearch.trim()) return true;
          const query = localSearch.toLowerCase();
          return (
            m.title.toLowerCase().includes(query) ||
            m.deliverable.toLowerCase().includes(query) ||
            m.tasks.toLowerCase().includes(query) ||
            String(m.id).includes(query)
          );
        });
        return {
          ...phase,
          modules: filteredModules,
        };
      })
      .filter((phase) => phase.modules.length > 0);
  }, [priorityOnly, localSearch]);

  const selectModule = (id: number) => {
    setActiveView("module");
    setActiveModuleId(id);
    onClose();
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/50 md:hidden backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed top-14 bottom-0 left-0 z-30 w-72 md:w-80 border-r border-line bg-sidebar flex flex-col transition-transform duration-200 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Search Bar */}
        <div className="p-3 border-b border-line bg-sidebar">
          <div className="relative">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Filter 55 modules..."
              className="w-full rounded-md border border-line bg-card py-1.5 pl-8 pr-3 text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
            />
            <svg
              className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {localSearch && (
              <button
                onClick={() => setLocalSearch("")}
                className="absolute right-2.5 top-2 text-[10px] text-muted hover:text-ink font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Scroll Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {/* Main Core Links */}
          <div className="space-y-1">
            <button
              onClick={() => {
                setActiveView("overview");
                onClose();
              }}
              className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                activeView === "overview"
                  ? "bg-card text-ink shadow-doc font-semibold border border-line"
                  : "text-muted hover:bg-card/60 hover:text-ink"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Course Overview & Roadmap
              </span>
              <span className="font-mono text-[10px] text-muted">55 Mod</span>
            </button>

            <button
              onClick={() => {
                setActiveView("capstones");
                onClose();
              }}
              className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                activeView === "capstones"
                  ? "bg-card text-ink shadow-doc font-semibold border border-line"
                  : "text-muted hover:bg-card/60 hover:text-ink"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Portfolio Capstones
              </span>
              <span className="font-mono text-[10px] text-muted">4 Projects</span>
            </button>

            <button
              onClick={() => {
                setActiveView("contract");
                onClose();
              }}
              className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                activeView === "contract"
                  ? "bg-card text-ink shadow-doc font-semibold border border-line"
                  : "text-muted hover:bg-card/60 hover:text-ink"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                9-Step Learning Contract
              </span>
              <span className="font-mono text-[10px] text-muted">Standard</span>
            </button>
          </div>

          {/* Curriculum Phases Tree */}
          <div className="space-y-4 pt-2 border-t border-line">
            <div className="flex items-center justify-between px-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                Curriculum Modules
              </span>
              {priorityOnly && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20">
                  Priority Active
                </span>
              )}
            </div>

            {filteredPhases.map((phase) => {
              const isCollapsed = collapsedPhases[phase.id];
              const phaseCompletedCount = phase.modules.filter((m) => isModuleCompleted(m.id)).length;
              const isAllPhaseDone = phaseCompletedCount === phase.modules.length && phase.modules.length > 0;

              return (
                <div key={phase.id} className="space-y-1">
                  {/* Phase Header Collapsible Trigger */}
                  <button
                    onClick={() => togglePhaseCollapse(phase.id)}
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-semibold text-ink hover:bg-card/40 transition-colors group"
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="font-mono text-[10px] text-muted">
                        P{phase.id < 10 ? `0${phase.id}` : phase.id}
                      </span>
                      <span className="truncate group-hover:text-accent transition-colors">
                        {phase.name.replace(/^Phase \d+:\s*/, "")}
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.2 rounded border ${
                          isAllPhaseDone
                            ? "border-green-600/30 bg-green-500/10 text-green-600"
                            : "border-line bg-card text-muted"
                        }`}
                      >
                        {phaseCompletedCount}/{phase.modules.length}
                      </span>
                      <svg
                        className={`h-3 w-3 text-muted transition-transform ${
                          isCollapsed ? "-rotate-90" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Modules List */}
                  {!isCollapsed && (
                    <div className="ml-2 pl-2 border-l border-line space-y-0.5">
                      {phase.modules.map((module) => {
                        const isCurrent = activeView === "module" && activeModuleId === module.id;
                        const isDone = isModuleCompleted(module.id);
                        const completedSteps = getModuleCompletedStepsCount(module.id);

                        return (
                          <button
                            key={module.id}
                            onClick={() => selectModule(module.id)}
                            className={`flex w-full items-center justify-between rounded px-2 py-1.5 text-xs text-left transition-colors ${
                              isCurrent
                                ? "bg-card text-ink font-semibold border-l-2 border-l-accent shadow-doc"
                                : "text-muted hover:bg-card/50 hover:text-ink"
                            }`}
                          >
                            <span className="flex items-center gap-2 truncate">
                              <span className="font-mono text-[10px] text-muted">
                                {module.id < 10 ? `0${module.id}` : module.id}
                              </span>
                              <span className="truncate">{module.title}</span>
                            </span>

                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              {isDone ? (
                                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                              ) : completedSteps > 0 ? (
                                <span className="font-mono text-[9px] text-muted">
                                  {completedSteps}/9
                                </span>
                              ) : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-line bg-sidebar text-[11px] font-mono text-muted flex items-center justify-between">
          <span>55 Technical Modules</span>
          <a
            href="https://github.com/AbelAshine1234/applied-ai-engineering"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink underline"
          >
            GitHub v1.0
          </a>
        </div>
      </aside>
    </>
  );
}
