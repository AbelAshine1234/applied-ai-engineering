"use client";

import React from "react";
import { useDocs } from "../context/DocsContext";
import { ALL_MODULES } from "../data/curriculum";

export function TableOfContents() {
  const {
    activeView,
    activeModuleId,
    markModuleComplete,
    resetModule,
    isModuleCompleted,
    getModuleCompletedStepsCount,
  } = useDocs();

  if (activeView !== "module") {
    return null;
  }

  const module = ALL_MODULES.find((m) => m.id === activeModuleId) || ALL_MODULES[0];
  const completedSteps = getModuleCompletedStepsCount(module.id);
  const isDone = isModuleCompleted(module.id);
  const percent = Math.round((completedSteps / 9) * 100);

  const sections = [
    { id: "overview", label: "01. Topics & Scope" },
    { id: "lecture", label: "02. Curated Lecture" },
    { id: "tasks", label: "03. Implementation Tasks" },
    { id: "deliverable", label: "04. Deliverable Target" },
    { id: "contract", label: "05. 9-Step Contract" },
    { id: "prompt", label: "06. Claude Code Prompt" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0 p-6 space-y-6 text-xs sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
      {/* Module Completion Widget */}
      <div className="rounded-lg border border-line bg-card p-4 space-y-3 shadow-doc">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
            Module Status
          </span>
          <span
            className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
              isDone
                ? "bg-green-500/10 text-green-600 border border-green-600/20"
                : "bg-canvas text-muted border border-line"
            }`}
          >
            {isDone ? "COMPLETE" : `${completedSteps}/9 STEPS`}
          </span>
        </div>

        <div className="w-full h-1.5 bg-line rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${isDone ? "bg-green-600" : "bg-accent"}`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <button
          onClick={() => (isDone ? resetModule(module.id) : markModuleComplete(module.id))}
          className="w-full rounded border border-line bg-canvas py-1.5 font-mono text-xs font-medium text-ink hover:border-line-hover transition-colors"
        >
          {isDone ? "Reset Steps" : "Mark All Done"}
        </button>
      </div>

      {/* On This Page Index */}
      <div className="space-y-2">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
          On This Page
        </div>
        <nav className="space-y-1">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="block w-full text-left py-1 text-muted hover:text-ink transition-colors truncate"
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Quick External Links */}
      <div className="pt-4 border-t border-line space-y-2 font-mono text-[11px]">
        <div className="text-muted uppercase tracking-wider text-[10px] font-semibold">
          Repository Links
        </div>
        <div>
          <a
            href={`https://github.com/AbelAshine1234/applied-ai-engineering/tree/main/${module.slug}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
          >
            <span>View Module Folder</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AbelAshine1234/applied-ai-engineering"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
          >
            <span>Master Repository</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
