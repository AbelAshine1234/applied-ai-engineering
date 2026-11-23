"use client";

import React, { useState } from "react";
import { useDocs } from "../context/DocsContext";
import { ALL_MODULES, getAdjacentModules } from "../data/curriculum";

export function ModuleDocView() {
  const {
    activeModuleId,
    setActiveModuleId,
    progress,
    toggleStep,
    markModuleComplete,
    resetModule,
    isModuleCompleted,
    getModuleCompletedStepsCount,
  } = useDocs();

  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const module = ALL_MODULES.find((m) => m.id === activeModuleId) || ALL_MODULES[0];
  const { prev, next } = getAdjacentModules(module.id);
  const completedSteps = getModuleCompletedStepsCount(module.id);
  const isDone = isModuleCompleted(module.id);

  const primaryVideo = module.videos && module.videos.length > 0 ? module.videos[0] : null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(module.claudePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <article className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-muted">
        <span>Curriculum</span>
        <span>/</span>
        <span className="truncate">{module.phaseTitle}</span>
        <span>/</span>
        <span className="text-ink font-medium">
          Module {module.id < 10 ? `0${module.id}` : module.id}
        </span>
      </nav>

      {/* Module Title Header */}
      <header className="border-b border-line pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded border border-line bg-canvas px-2 py-0.5 font-mono text-xs font-semibold text-ink">
            MODULE {module.id < 10 ? `0${module.id}` : module.id} OF 55
          </span>
          <span className="inline-flex items-center rounded border border-line bg-card px-2 py-0.5 font-mono text-xs text-muted">
            {module.phaseTitle}
          </span>
          <span className="inline-flex items-center rounded border border-line bg-canvas px-2 py-0.5 font-mono text-xs text-muted">
            {module.hours} Hours Target
          </span>
          {module.priorityTrack && (
            <span className="inline-flex items-center rounded border border-accent/20 bg-accent-subtle px-2 py-0.5 font-mono text-xs font-medium text-accent">
              Priority Track
            </span>
          )}
          {isDone && (
            <span className="inline-flex items-center gap-1 rounded border border-green-600/30 bg-green-500/10 px-2 py-0.5 font-mono text-xs font-medium text-green-600">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Completed
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          {module.title}
        </h1>

        <div className="rounded-lg border border-line bg-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
              Required Deliverable
            </div>
            <div className="text-sm font-semibold text-ink mt-0.5">
              {module.deliverable}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted">
              Contract: <strong className="text-ink">{completedSteps}/9</strong>
            </span>
            <button
              onClick={() => (isDone ? resetModule(module.id) : markModuleComplete(module.id))}
              className="rounded border border-line bg-canvas px-2.5 py-1 font-mono text-xs font-medium text-ink hover:border-line-hover transition-colors"
            >
              {isDone ? "Reset Steps" : "Mark Complete"}
            </button>
          </div>
        </div>
      </header>

      {/* Implementation Tasks & Topics */}
      <section id="tasks" className="space-y-4 scroll-mt-20">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span className="font-mono text-xs text-muted">01</span>
          Technical Scope & Implementation Tasks
        </h2>
        <div className="rounded-lg border border-line bg-card p-5 space-y-3">
          <div className="text-sm text-ink leading-relaxed font-medium">
            {module.tasks}
          </div>
          <div className="pt-3 border-t border-line text-xs text-muted flex items-center gap-2 font-mono">
            <span>Target Effort: {module.hours} Hours</span>
            <span>·</span>
            <span>Production Quality Standard</span>
          </div>
        </div>
      </section>

      {/* Curated Video Lecture */}
      {primaryVideo && (
        <section id="lecture" className="space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink flex items-center gap-2">
              <span className="font-mono text-xs text-muted">02</span>
              Curated Video Lecture & Masterclass
            </h2>
            <a
              href={`https://www.youtube.com/watch?v=${primaryVideo.youtube_id}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
            >
              <span>Watch on YouTube</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="rounded-lg border border-line bg-card overflow-hidden">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${primaryVideo.youtube_id}`}
                title={primaryVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="p-4 border-t border-line bg-canvas flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-ink">
                  {primaryVideo.title}
                </div>
                <div className="font-mono text-xs text-muted">
                  Channel: {primaryVideo.channel || primaryVideo.instructor} · Duration: {primaryVideo.duration || "Full lecture"}
                </div>
              </div>
              <span className="font-mono text-[11px] text-muted">
                Step 1 of Learning Contract
              </span>
            </div>
          </div>

          {module.videos.length > 1 && (
            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs text-muted">
                Additional Recommended Video Lectures:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {module.videos.slice(1).map((v, idx) => (
                  <a
                    key={idx}
                    href={`https://www.youtube.com/watch?v=${v.youtube_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col p-3 rounded-md border border-line bg-card hover:border-line-hover text-xs transition-colors"
                  >
                    <span className="font-medium text-ink truncate">{v.title}</span>
                    <span className="font-mono text-[10px] text-muted mt-1">
                      {v.channel || v.instructor} · {v.duration}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Deliverable Target */}
      <section id="deliverable" className="space-y-4 scroll-mt-20">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span className="font-mono text-xs text-muted">03</span>
          Module Deliverable Specification
        </h2>
        <div className="rounded-lg border border-line bg-card p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <span className="font-mono text-xs font-semibold uppercase text-ink">
              Production Target
            </span>
            <span className="font-mono text-xs text-accent font-medium">
              Self-Contained Module
            </span>
          </div>

          <p className="text-sm text-ink font-semibold">
            {module.deliverable}
          </p>

          <div className="space-y-2">
            <div className="font-mono text-xs text-muted">Repository Directory Structure:</div>
            <pre className="p-3 text-xs">
              <code>{`applied-ai-engineering/${module.slug}/
├── src/
├── tests/
│   └── test_${module.slug.replace(/^\d+-/, "").replace(/-/g, "_")}.py
├── README.md
└── requirements.txt`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive 9-Step Verification Contract */}
      <section id="contract" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink flex items-center gap-2">
            <span className="font-mono text-xs text-muted">04</span>
            Interactive 9-Step Verification Contract
          </h2>
          <span className="font-mono text-xs text-muted">
            {completedSteps} of 9 Completed
          </span>
        </div>

        <p className="text-xs text-muted leading-relaxed">
          Verify each requirement before advancing. Checklist states persist automatically in your browser.
        </p>

        <div className="space-y-2">
          {module.checklist.map((item, idx) => {
            const isChecked = Boolean(progress[module.id]?.[idx]);
            return (
              <label
                key={idx}
                className={`flex items-start gap-3 rounded-lg border p-3.5 transition-all cursor-pointer ${
                  isChecked
                    ? "border-green-600/30 bg-green-500/5 text-ink"
                    : "border-line bg-card hover:border-line-hover text-ink"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleStep(module.id, idx)}
                  className="mt-0.5 h-4 w-4 rounded border-line text-accent focus:ring-accent"
                />
                <div className="flex-1 text-xs sm:text-sm">
                  <span className="font-mono text-[11px] text-muted mr-2">
                    Step {idx + 1}
                  </span>
                  <span className={isChecked ? "line-through text-muted" : "text-ink"}>
                    {item}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* Claude Code Review Prompt */}
      <section id="prompt" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink flex items-center gap-2">
            <span className="font-mono text-xs text-muted">05</span>
            Claude Code Review Prompt
          </h2>
          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-1.5 rounded border border-line bg-canvas px-2.5 py-1 font-mono text-xs font-medium text-ink hover:border-line-hover transition-colors"
          >
            {copiedPrompt ? (
              <span className="text-accent font-bold">Copied!</span>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Prompt
              </>
            )}
          </button>
        </div>

        <pre className="p-4 text-xs whitespace-pre-wrap leading-relaxed">
          <code>{module.claudePrompt}</code>
        </pre>
      </section>

      {/* Adjacent Modules Navigation Footer */}
      <footer className="pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <button
            onClick={() => {
              setActiveModuleId(prev.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-start p-4 rounded-lg border border-line bg-card hover:border-line-hover transition-colors text-left group"
          >
            <span className="font-mono text-[11px] text-muted flex items-center gap-1">
              ← Previous Module
            </span>
            <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors mt-1">
              {prev.id < 10 ? `0${prev.id}` : prev.id}. {prev.title}
            </span>
          </button>
        ) : (
          <div />
        )}

        {next ? (
          <button
            onClick={() => {
              setActiveModuleId(next.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-end p-4 rounded-lg border border-line bg-card hover:border-line-hover transition-colors text-right group"
          >
            <span className="font-mono text-[11px] text-muted flex items-center gap-1">
              Next Module →
            </span>
            <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors mt-1">
              {next.id < 10 ? `0${next.id}` : next.id}. {next.title}
            </span>
          </button>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
