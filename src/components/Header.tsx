"use client";

import React, { useState } from "react";
import { useDocs } from "../context/DocsContext";

export function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  const {
    completedModuleCount,
    totalModules,
    priorityOnly,
    setPriorityOnly,
    theme,
    toggleTheme,
    setActiveView,
    exportProgressJSON,
    importProgressJSON,
  } = useDocs();

  const [showDataModal, setShowDataModal] = useState(false);
  const [importText, setImportText] = useState("");
  const [dataMessage, setDataMessage] = useState("");

  const percent = Math.round((completedModuleCount / totalModules) * 100);

  const handleExport = () => {
    const json = exportProgressJSON();
    navigator.clipboard.writeText(json);
    setDataMessage("Progress JSON copied to clipboard!");
    setTimeout(() => setDataMessage(""), 3000);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importProgressJSON(importText);
    if (ok) {
      setDataMessage("Progress successfully imported!");
      setTimeout(() => {
        setDataMessage("");
        setShowDataModal(false);
      }, 1500);
    } else {
      setDataMessage("Invalid JSON data format.");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-line bg-card/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo & Version */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView("overview")}
              className="flex items-center gap-2 text-left group"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded border border-line bg-canvas font-mono text-xs font-bold text-ink">
                AI
              </div>
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-ink uppercase">
                  Applied AI Engineering
                </span>
                <span className="ml-2 inline-flex items-center rounded border border-line bg-canvas px-1.5 py-0.2 font-mono text-[10px] font-medium text-muted">
                  DOCS v1.0
                </span>
              </div>
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              onClick={onOpenSearch}
              className="flex w-full items-center justify-between rounded-md border border-line bg-canvas px-3 py-1.5 text-xs text-muted hover:border-line-hover transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search modules, topics, deliverables...
              </span>
              <kbd className="rounded border border-line bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Actions & Progress Indicator */}
          <div className="flex items-center gap-3">
            {/* Priority Track Filter Toggle */}
            <button
              onClick={() => setPriorityOnly(!priorityOnly)}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium border transition-colors ${
                priorityOnly
                  ? "border-accent bg-accent-subtle text-accent"
                  : "border-line bg-card text-muted hover:text-ink hover:border-line-hover"
              }`}
              title="Filter to high-priority phases for immediate engineering hiring"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${priorityOnly ? "bg-accent" : "bg-muted"}`} />
              Priority Track
            </button>

            {/* Global Progress Pill */}
            <div className="flex items-center gap-2 rounded-md border border-line bg-canvas px-2.5 py-1 text-xs font-mono">
              <span className="text-muted hidden lg:inline">Completed:</span>
              <span className="font-semibold text-ink">
                {completedModuleCount}/{totalModules}
              </span>
              <div className="w-12 h-1.5 bg-line rounded-full overflow-hidden hidden sm:block">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-[11px] text-muted">{percent}%</span>
            </div>

            {/* Data Export/Import Button */}
            <button
              onClick={() => setShowDataModal(true)}
              className="p-1.5 text-muted hover:text-ink rounded-md hover:bg-canvas transition-colors border border-transparent hover:border-line"
              title="Export or Import Progress"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>

            {/* GitHub Repository Link */}
            <a
              href="https://github.com/AbelAshine1234/applied-ai-engineering"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-muted hover:text-ink rounded-md hover:bg-canvas transition-colors border border-transparent hover:border-line"
              title="View on GitHub"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-muted hover:text-ink rounded-md hover:bg-canvas transition-colors border border-transparent hover:border-line"
              title="Toggle Light/Dark Theme"
            >
              {theme === "light" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Data Modal */}
      {showDataModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg border border-line bg-card p-6 shadow-card">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <h3 className="font-mono text-sm font-semibold uppercase text-ink">
                Progress Backup & Sync
              </h3>
              <button
                onClick={() => setShowDataModal(false)}
                className="text-muted hover:text-ink text-sm font-mono"
              >
                ✕
              </button>
            </div>
            <p className="mt-3 text-xs text-muted leading-relaxed">
              Export your completed checklist steps to save or transfer them across machines, or paste a previously saved JSON state below.
            </p>

            {dataMessage && (
              <div className="mt-3 rounded border border-line bg-canvas p-2 text-xs font-mono text-accent">
                {dataMessage}
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleExport}
                className="flex-1 rounded-md border border-line bg-canvas py-1.5 font-mono text-xs font-medium text-ink hover:border-line-hover"
              >
                Copy Progress JSON
              </button>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-[11px] text-muted mb-1">
                Import JSON string:
              </label>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder='{"1": {"0": true, "1": true}}'
                className="w-full h-24 rounded border border-line bg-canvas p-2 font-mono text-xs text-ink focus:outline-none focus:border-accent"
              />
              <button
                onClick={handleImport}
                className="mt-2 w-full rounded-md bg-ink py-1.5 font-mono text-xs font-medium text-canvas hover:opacity-90"
              >
                Load Progress State
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
