"use client";

import React from "react";
import { useDocs } from "../context/DocsContext";
import { CURRICULUM } from "../data/curriculum";

export function OverviewView() {
  const {
    completedModuleCount,
    totalModules,
    setActiveView,
    setActiveModuleId,
    isModuleCompleted,
  } = useDocs();

  const percent = Math.round((completedModuleCount / totalModules) * 100);

  const navigateToModule = (id: number) => {
    setActiveView("module");
    setActiveModuleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-8 space-y-12">
      {/* Hero / Overview Header */}
      <div className="border-b border-line pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>PRODUCTION-ORIENTED ROADMAP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
          Applied AI Engineering
        </h1>

        <p className="text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
          Comprehensive 16-phase production curriculum designed to transition software engineers into world-class Applied AI Engineers. Spanning 55 modules, each accompanied by curated video lectures, real-world deliverables, and rigorous verification contracts.
        </p>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="rounded-lg border border-line bg-card p-4">
            <div className="font-mono text-[10px] text-muted uppercase">Curriculum Modules</div>
            <div className="text-2xl font-bold font-mono text-ink mt-1">55</div>
            <div className="text-[11px] text-muted mt-0.5">End-to-end deliverables</div>
          </div>
          <div className="rounded-lg border border-line bg-card p-4">
            <div className="font-mono text-[10px] text-muted uppercase">Curriculum Phases</div>
            <div className="text-2xl font-bold font-mono text-ink mt-1">16</div>
            <div className="text-[11px] text-muted mt-0.5">Foundations to Production</div>
          </div>
          <div className="rounded-lg border border-line bg-card p-4">
            <div className="font-mono text-[10px] text-muted uppercase">Portfolio Capstones</div>
            <div className="text-2xl font-bold font-mono text-ink mt-1">4</div>
            <div className="text-[11px] text-muted mt-0.5">Enterprise platforms</div>
          </div>
          <div className="rounded-lg border border-line bg-card p-4">
            <div className="font-mono text-[10px] text-muted uppercase">Overall Progress</div>
            <div className="text-2xl font-bold font-mono text-accent mt-1">{percent}%</div>
            <div className="text-[11px] text-muted mt-0.5">
              {completedModuleCount} of {totalModules} Completed
            </div>
          </div>
        </div>
      </div>

      {/* 16-Phase Matrix */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span className="font-mono text-xs text-muted">01</span>
            16-Phase Curriculum Matrix
          </h2>
          <span className="font-mono text-xs text-muted">
            Click any module to inspect documentation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CURRICULUM.phases.map((phase) => {
            const phaseCompleted = phase.modules.filter((m) => isModuleCompleted(m.id)).length;
            const isAllDone = phaseCompleted === phase.modules.length;

            return (
              <div
                key={phase.id}
                className="rounded-lg border border-line bg-card p-5 space-y-4 hover:border-line-hover transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                      Phase {phase.id < 10 ? `0${phase.id}` : phase.id}
                    </span>
                    <h3 className="text-base font-bold text-ink mt-0.5">
                      {phase.name.replace(/^Phase \d+:\s*/, "")}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[11px] rounded bg-canvas border border-line px-2 py-0.5 text-muted">
                        {phase.badge}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        {phase.priority}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border flex-shrink-0 ${
                      isAllDone
                        ? "border-green-600/30 bg-green-500/10 text-green-600 font-semibold"
                        : "border-line bg-canvas text-muted"
                    }`}
                  >
                    {phaseCompleted}/{phase.modules.length}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-line">
                  {phase.modules.map((m) => {
                    const done = isModuleCompleted(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => navigateToModule(m.id)}
                        className="flex w-full items-center justify-between rounded p-2 text-left text-xs hover:bg-canvas transition-colors group"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[10px] text-muted">
                            {m.id < 10 ? `0${m.id}` : m.id}
                          </span>
                          <span className="truncate group-hover:text-accent transition-colors font-medium text-ink">
                            {m.title}
                          </span>
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="font-mono text-[10px] text-muted hidden sm:inline truncate max-w-[140px]">
                            {m.deliverable}
                          </span>
                          {done && (
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Four Portfolio Capstones Section */}
      <section className="space-y-6 pt-4 border-t border-line">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span className="font-mono text-xs text-muted">02</span>
            Enterprise Portfolio Capstones
          </h2>
          <button
            onClick={() => {
              setActiveView("capstones");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-xs text-accent hover:underline"
          >
            View Full Architectural Specs →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CURRICULUM.portfolioProjects?.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                setActiveView("capstones");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded-lg border border-line bg-card p-5 space-y-3 cursor-pointer hover:border-line-hover transition-colors group"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                Project 0{proj.id} · Modules {proj.mappedModules}
              </div>
              <h3 className="text-base font-bold text-ink group-hover:text-accent transition-colors">
                {proj.title}
              </h3>
              <div className="font-mono text-xs text-muted">
                {proj.badge} · {proj.hours} Hours
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.features.slice(0, 3).map((feat, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] rounded border border-line bg-canvas px-2 py-0.5 text-muted truncate max-w-[200px]"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
