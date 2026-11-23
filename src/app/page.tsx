"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TableOfContents } from "../components/TableOfContents";
import { ModuleDocView } from "../components/ModuleDocView";
import { OverviewView } from "../components/OverviewView";
import { CapstonesView } from "../components/CapstonesView";
import { ContractView } from "../components/ContractView";
import { SearchModal } from "../components/SearchModal";
import { useDocs } from "../context/DocsContext";

export default function DocsPage() {
  const { activeView } = useDocs();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-accent-subtle selection:text-accent">
      {/* Top Navbar */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Mobile Subheader Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-2.5 border-b border-line bg-card">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 text-xs font-mono text-ink border border-line rounded px-2.5 py-1 bg-canvas hover:border-line-hover"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Menu & Modules
        </button>

        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-1.5 text-xs font-mono text-muted border border-line rounded px-2 py-1 bg-canvas"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </div>

      {/* Main Documentation Layout */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto">
        {/* Left Sticky Sidebar */}
        <Sidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        {/* Center Content Reading Area */}
        <main className="flex-1 min-w-0 md:ml-80">
          {activeView === "module" && <ModuleDocView />}
          {activeView === "overview" && <OverviewView />}
          {activeView === "capstones" && <CapstonesView />}
          {activeView === "contract" && <ContractView />}
        </main>

        {/* Right Sticky Table of Contents */}
        <TableOfContents />
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
