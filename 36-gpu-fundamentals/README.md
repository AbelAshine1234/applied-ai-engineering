# Module 36: GPU Fundamentals

> **Phase 10:** AI Infrastructure and Serving | **Track:** Applied AI Engineering  
> **Priority:** HIGH (Immediate Job Target) | **Estimated Duration:** 12 Hours  
> **Mandatory Deliverable:** `GPU performance experiments`

---

## 1. Module Overview & Problem Statement

This module is designed to build production competence in **GPU Fundamentals**.

### Core Projects and Tasks
Explore GPU architecture, CUDA, VRAM and memory constraints.

### Target Deliverable
**GPU performance experiments**

---

## 2. Learning Contract Checklist

You must complete all 9 stages of the learning contract before advancing:

- [ ] **1. Concepts:** Understand the theory, terminology and underlying mechanisms.
- [ ] **2. Guided Implementation:** Build a working prototype from first principles.
- [ ] **3. Independent Tasks:** Explore GPU architecture, CUDA, VRAM and memory constraints.
- [ ] **4. Module Project:** Build `GPU performance experiments` satisfying all functional requirements.
- [ ] **5. Testing:** Write unit and integration tests covering edge cases and failures.
- [ ] **6. Technical Explanation:** Document architectural choices, trade-offs, and scaling limits.
- [ ] **7. Public Progress:** Commit code to GitHub and share an engineering progress log.
- [ ] **8. Independent Review:** Execute the Claude Review Prompt below and address feedback.
- [ ] **9. Assessment:** Complete a hands-on verification test before progressing.

---

## 3. Curated Video Lectures & Code Walkthroughs

### 1. CUDA and GPU Architecture for Deep Learning
- **Instructor / Channel:** Tim Dettmers (Weights & Biases)
- **Duration:** 55m
- **Direct Video Link:** [CUDA and GPU Architecture for Deep Learning](https://www.youtube.com/watch?v=4m6k2wY8q3B)

---

## 4. Claude Code Review Prompt

When your `GPU performance experiments` is implemented, run this prompt with Claude / LLM auditor:

```text
Please review my implementation of Module 36 (GPU Fundamentals) for the Applied AI Engineering Master Track.

Deliverable: GPU performance experiments
Tasks Covered: Explore GPU architecture, CUDA, VRAM and memory constraints.

Review criteria:
1. Architectural soundness: Is this designed for production scale, low latency, and maintainability?
2. Edge case resilience: Are timeouts, error boundaries, and null cases cleanly handled?
3. Code quality: Idiomatic Python/AI patterns, strict typing, zero mock shortcuts.
4. Test coverage: Are unit tests comprehensive with realistic assertions?

Highlight any performance bottlenecks or architectural gaps.
```

---

*Part of the [Applied AI Engineering Master Roadmap](../README.md).*
