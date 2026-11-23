# 10. Evaluation, Testing & Observability

> **Track:** Applied AI Engineering | **Module:** 10 | **Estimated Duration:** 18 Hours | **Domain:** Reliability

## Module Overview

Implement systematic evaluation for LLMs and RAG: RAG Triad (Faithfulness, Relevance, Recall), Ragas, Promptfoo automated CI/CD testing, and LangSmith tracing.

---

## Core Competencies & Skills

- **RAG Triad & RAGAS Metric Framework**
- **Automated Prompt Evaluation in CI/CD (Promptfoo)**
- **LLM-as-a-Judge Design & Calibration**
- **Tracing & Observability (LangSmith, Phoenix)**
- **Red-Teaming & Benchmark Datasets**

---

## Chapter Mini-Project: Mini-Project: Automated RAG Quality Gate in CI/CD with Ragas & Promptfoo

### Project Objective
Establish an automated quality-assurance gate for a RAG application: generate synthetic golden question-answer pairs, compute Ragas faithfulness/relevance scores, and fail CI/CD builds if regressions occur.

### Deliverables & Verification Checklist
- [ ] **Synthesize a benchmark evaluation dataset of 50 technical query-context pairs**
- [ ] **Compute automated Ragas metrics: Faithfulness, Answer Relevance, and Context Precision**
- [ ] **Configure Promptfoo test matrix evaluating prompt variations against target models**
- [ ] **Integrate GitHub Actions workflow enforcing minimum quality score thresholds**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Evaluating RAG Applications: The RAG Triad and Ragas
- **Instructor / Channel:** Aparna Dhinakaran (Arize AI)
- **Duration:** 45m
- **Direct Video Link:** [Evaluating RAG Applications: The RAG Triad and Ragas](https://www.youtube.com/watch?v=2KkU_wA5m9A)
- **Overview:** How to measure and debug RAG pipelines using Context Relevance, Groundedness (Faithfulness), and Answer Relevance with automated evaluation metrics.

#### Mastery Checkpoints
- [ ] Understand the RAG Triad failure modes and diagnostic metrics
- [ ] Generate synthetic golden test datasets from production documents
- [ ] Compute RAGAS scores (Faithfulness, Answer Relevance, Context Recall)

### 2. Automated Testing for LLMs with Promptfoo in GitHub Actions
- **Instructor / Channel:** Ian Webster (Promptfoo)
- **Duration:** 35m
- **Direct Video Link:** [Automated Testing for LLMs with Promptfoo in GitHub Actions](https://www.youtube.com/watch?v=8P2g0k7l1wA)
- **Overview:** Setting up deterministic regression testing, hallucination checks, and red-teaming test suites for prompt and model changes in CI/CD pipelines.

#### Mastery Checkpoints
- [ ] Configure promptfoo.yaml test matrix with assertions (similarity, contains, js)
- [ ] Run automated regression tests detecting prompt degradation
- [ ] Integrate test suites into GitHub Actions PR verification checks

### 3. LLM Observability and Tracing with LangSmith
- **Instructor / Channel:** Harrison Chase (LangChain)
- **Duration:** 40m
- **Direct Video Link:** [LLM Observability and Tracing with LangSmith](https://www.youtube.com/watch?v=Qn0_9k0pP9M)
- **Overview:** Deep tracing of multi-turn agent runs, latency bottlenecks, token consumption, intermediate tool outputs, and user feedback tagging in production.

#### Mastery Checkpoints
- [ ] Instrument Python applications with LangSmith / OpenTelemetry tracing
- [ ] Inspect execution trees, latency profiles, and token costs per step
- [ ] Collect user feedback and tag edge cases for evaluation test suites

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
