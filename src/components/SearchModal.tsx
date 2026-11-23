"use client";

import React, { useEffect, useState } from "react";
import { useDocs } from "../context/DocsContext";
import { ALL_MODULES, ALL_PROJECTS } from "../data/curriculum";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { setActiveView, setActiveModuleId } = useDocs();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingModules = ALL_MODULES.filter((m) => {
    if (!q) return false;
    return (
      m.title.toLowerCase().includes(q) ||
      m.deliverable.toLowerCase().includes(q) ||
      m.phaseTitle.toLowerCase().includes(q) ||
      m.tasks.toLowerCase().includes(q) ||
      String(m.id) === q
    );
  }).slice(0, 8);

  const matchingProjects = ALL_PROJECTS.filter((p) => {
    if (!q) return false;
    return (
      p.title.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q) ||
      p.features.some((f) => f.toLowerCase().includes(q))
    );
  }).slice(0, 4);

  const selectModule = (id: number) => {
    setActiveView("module");
    setActiveModuleId(id);
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectProjects = () => {
    setActiveView("capstones");
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-lg border border-line bg-card shadow-card overflow-hidden">
        {/* Search Input */}
        <div className="relative border-b border-line p-3 flex items-center">
          <svg className="h-4 w-4 text-muted mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across all 55 modules, topics, deliverables..."
            className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none font-sans"
          />
          <kbd className="font-mono text-[10px] text-muted border border-line rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* Results Box */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {!query && (
            <div className="p-4 text-center text-xs text-muted font-mono">
              Type to search 55 modules, 16 phases, and 4 capstones...
            </div>
          )}

          {query && matchingModules.length === 0 && matchingProjects.length === 0 && (
            <div className="p-4 text-center text-xs text-muted font-mono">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {matchingModules.length > 0 && (
            <div className="space-y-1">
              <div className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                Modules
              </div>
              {matchingModules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => selectModule(m.id)}
                  className="flex w-full items-center justify-between rounded p-2 text-left text-xs hover:bg-canvas transition-colors"
                >
                  <div className="truncate mr-2">
                    <div className="font-medium text-ink flex items-center gap-1.5 truncate">
                      <span className="font-mono text-[10px] text-muted">
                        {m.id < 10 ? `0${m.id}` : m.id}
                      </span>
                      <span className="truncate">{m.title}</span>
                    </div>
                    <div className="font-mono text-[10px] text-muted truncate">
                      {m.phaseTitle} · {m.deliverable}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-muted flex-shrink-0">
                    Jump →
                  </span>
                </button>
              ))}
            </div>
          )}

          {matchingProjects.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-line">
              <div className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                Portfolio Capstones
              </div>
              {matchingProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={selectProjects}
                  className="flex w-full items-center justify-between rounded p-2 text-left text-xs hover:bg-canvas transition-colors"
                >
                  <div>
                    <div className="font-medium text-ink">
                      Project 0{p.id}: {p.title}
                    </div>
                    <div className="font-mono text-[10px] text-muted truncate">
                      Modules {p.mappedModules}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-muted flex-shrink-0">
                    Jump →
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
