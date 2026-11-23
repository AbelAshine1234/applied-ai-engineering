"use client";

import React from "react";
import { ALL_PROJECTS } from "../data/curriculum";

export function CapstonesView() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-12">
      <div className="border-b border-line pb-8 space-y-3">
        <div className="font-mono text-xs text-muted">
          Curriculum / Portfolio Projects
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          Production Portfolio Capstones
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Four full-scale production platforms designed to integrate multiple technical modules into verifiable, interview-ready systems demonstrating production AI engineering competence.
        </p>
      </div>

      <div className="space-y-8">
        {ALL_PROJECTS.map((proj) => (
          <section
            key={proj.id}
            id={proj.slug}
            className="rounded-lg border border-line bg-card p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-2 border-b border-line pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-line bg-canvas text-ink">
                  CAPSTONE 0{proj.id}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-line bg-card text-muted">
                  {proj.badge}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent/20 bg-accent-subtle text-accent font-medium">
                  Modules: {proj.mappedModules}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-line bg-canvas text-muted">
                  {proj.hours} Hours
                </span>
              </div>
              <h2 className="text-2xl font-bold text-ink">{proj.title}</h2>
            </div>

            {/* Core Features & Deliverables */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                Platform Specifications & Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {proj.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-md border border-line bg-canvas p-3 text-xs text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {proj.refLink && (
              <div className="pt-2">
                <a
                  href={proj.refLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                >
                  <span>Reference Architecture & Resources</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
