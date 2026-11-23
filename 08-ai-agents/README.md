# 08. AI Agents & Autonomous Workflows

> **Track:** Applied AI Engineering | **Module:** 08 | **Estimated Duration:** 30 Hours | **Domain:** Agentic Systems

## Module Overview

Design stateful multi-agent systems using LangGraph, ReAct loops, deterministic state machines, human-in-the-loop approvals, and parallel agent swarms.

---

## Core Competencies & Skills

- **ReAct (Reasoning + Acting) Loops**
- **LangGraph Stateful Execution Graphs**
- **Multi-Agent Coordination & Swarms**
- **Human-in-the-Loop & Time Travel State**
- **Dynamic Tool Calling & Sandboxed Execution**

---

## Chapter Mini-Project: Mini-Project: Multi-Agent Automated Code Review & Repair Swarm in LangGraph

### Project Objective
Construct a cyclical stateful agent workflow in LangGraph where a Tester Agent runs test suites against Python modules, a Diagnostician Agent analyzes stack traces, and a Coder Agent patches code iteratively until all tests pass.

### Deliverables & Verification Checklist
- [ ] **Define shared agent State schema tracking execution history, diffs, and test reports**
- [ ] **Build cyclical graph nodes for TestRunner, Diagnostician, and CodePatcher**
- [ ] **Add human-in-the-loop breakpoint before git commit / code overwrite operations**
- [ ] **Implement persistent checkpointing to SQLite allowing execution replay and rewind**

---

## Curated Video Lectures & Code Walkthroughs

### 1. LangGraph Tutorial: Building State-of-the-Art Multi-Agent Systems
- **Instructor / Channel:** Harrison Chase (LangChain)
- **Duration:** 1h 40m
- **Direct Video Link:** [LangGraph Tutorial: Building State-of-the-Art Multi-Agent Systems](https://www.youtube.com/watch?v=PqS1kIb74zU)
- **Overview:** Architecting cyclical, stateful AI workflows with LangGraph: graph nodes, edges, conditional routing, shared state schemas, and checkpointing.

#### Mastery Checkpoints
- [ ] Define typed state schemas using TypedDict and Pydantic
- [ ] Build cyclic graphs with conditional routing edges and tool nodes
- [ ] Implement persistence checkpoints allowing rewind and time-travel debugging

### 2. Agentic Design Patterns: What Every AI Engineer Needs to Know
- **Instructor / Channel:** Andrew Ng (Sequoia Capital)
- **Duration:** 40m
- **Direct Video Link:** [Agentic Design Patterns: What Every AI Engineer Needs to Know](https://www.youtube.com/watch?v=sal78ACtGTc)
- **Overview:** Andrew Ng details the 4 fundamental agentic design patterns that outperform zero-shot prompting: Reflection, Tool Use, Planning, and Multi-Agent Collaboration.

#### Mastery Checkpoints
- [ ] Implement self-reflection and iterative critique loops
- [ ] Build multi-step plan-and-solve execution workflows
- [ ] Coordinate specialized agent personas (Researcher, Coder, Reviewer)

### 3. Build a Research Multi-Agent Team from Scratch
- **Instructor / Channel:** David Ondrej (David Ondrej)
- **Duration:** 50m
- **Direct Video Link:** [Build a Research Multi-Agent Team from Scratch](https://www.youtube.com/watch?v=b-P4z3qF_K0)
- **Overview:** Step-by-step code tutorial building a team of autonomous agents that browse the web, aggregate sources, cross-verify data, and write executive reports.

#### Mastery Checkpoints
- [ ] Equip agents with web browsing and document extraction tools
- [ ] Implement inter-agent message passing and validation handoffs
- [ ] Generate structured output reports with source attribution

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
