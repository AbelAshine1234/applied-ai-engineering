"use client";

import React from "react";

export function ContractView() {
  const steps = [
    {
      step: 1,
      title: "Curated Lecture Masterclass",
      desc: "Watch the curated deep-dive video lecture, extract core architectural patterns, and document concise engineering notes.",
      standard: "Must write structured notes in README.md covering failure modes and runtime complexity.",
    },
    {
      step: 2,
      title: "Mental Model & Architectural Graph",
      desc: "Draft a clear conceptual mind map or computational diagram illustrating data flow, memory structures, and tensor transformations.",
      standard: "Include ASCII/Mermaid or documented architectural state diagrams.",
    },
    {
      step: 3,
      title: "From-Scratch Zero-Dependency Implementation",
      desc: "Implement the mathematical or logical primitives from first principles using pure Python and standard libraries before touching abstractions.",
      standard: "Zero external dependencies for core primitives (e.g. implementing attention, tokenizers, backprop).",
    },
    {
      step: 4,
      title: "Production Library Implementation",
      desc: "Re-implement or wrap using modern production tooling (PyTorch, FastAPI, Qdrant, vLLM, LangGraph).",
      standard: "Production type annotations, Pydantic schemas, and robust error handling.",
    },
    {
      step: 5,
      title: "Unit & Integration Test Suite",
      desc: "Author comprehensive test suites in pytest targeting positive paths, edge cases, malformed payloads, and timeout recovery.",
      standard: "Minimum 90% test coverage with verifiable pytest runs.",
    },
    {
      step: 6,
      title: "Latency & Memory Profiling Benchmark",
      desc: "Profile runtime throughput, latency percentiles (p50, p95, p99), memory allocations, and token consumption.",
      standard: "Record benchmark numbers in the module README.md.",
    },
    {
      step: 7,
      title: "Packaging & Deliverable Specification",
      desc: "Package the deliverable into a self-contained module directory with clean entrypoints and reproducible environments.",
      standard: "Must contain requirements.txt, pyproject.toml, and executable CLI/service scripts.",
    },
    {
      step: 8,
      title: "Claude Code Architecture Review",
      desc: "Run the provided structured Claude Code review prompt to critique code quality, latency vulnerabilities, and production readiness.",
      standard: "Refactor any high-severity findings identified during the review.",
    },
    {
      step: 9,
      title: "Git Commit & Verification Record",
      desc: "Commit clean, well-documented code with a semantic commit message and push to your public GitHub repository.",
      standard: "Public commit with green passing tests.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-10">
      <div className="border-b border-line pb-8 space-y-3">
        <div className="font-mono text-xs text-muted">
          Curriculum / Engineering Standards
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          9-Step Learning Contract
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          The non-negotiable engineering standard applied to all 55 modules. You do not progress through modules by passively watching lectures—every module requires verifiable implementations, rigorous testing, benchmarks, and architectural review.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="rounded-lg border border-line bg-card p-5 space-y-3 hover:border-line-hover transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded border border-line bg-canvas font-mono text-xs font-bold text-ink">
                0{s.step}
              </span>
              <h2 className="text-base font-bold text-ink">{s.title}</h2>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {s.desc}
            </p>
            <div className="rounded border border-line bg-canvas p-3 font-mono text-xs text-ink flex items-start gap-2">
              <span className="text-accent font-semibold flex-shrink-0">CRITERIA:</span>
              <span className="leading-relaxed">{s.standard}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
