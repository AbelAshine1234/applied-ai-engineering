# 14. AI Security, Safety & Guardrails

> **Track:** Applied AI Engineering | **Module:** 14 | **Estimated Duration:** 16 Hours | **Domain:** Defense

## Module Overview

Secure production AI systems against OWASP Top 10 for LLMs: prompt injections, jailbreaks, data poisoning, insecure output handling, PII masking, and NeMo Guardrails.

---

## Core Competencies & Skills

- **OWASP Top 10 for LLM Applications**
- **Direct & Indirect Prompt Injection Defense**
- **Guardrails AI & NeMo Guardrails Implementation**
- **PII Redaction & Differential Privacy**
- **Red-Teaming & Adversarial Attack Simulation**

---

## Chapter Mini-Project: Mini-Project: Adversarial Prompt Firewall & NeMo Guardrails Shield

### Project Objective
Build a programmable security proxy intercepting LLM requests: detects prompt injections and jailbreak patterns with semantic classifiers, enforces Colang conversation rails, and masks PII in responses.

### Deliverables & Verification Checklist
- [ ] **Implement regex and embedding-based classifier detecting prompt injection attacks**
- [ ] **Configure NVIDIA NeMo Guardrails Colang policy enforcing strict topical boundaries**
- [ ] **Sanitize incoming text stripping PII (emails, phone numbers, API keys)**
- [ ] **Conduct automated red-teaming simulation evaluating bypass defense rates**

---

## Curated Video Lectures & Code Walkthroughs

### 1. OWASP Top 10 for LLM Applications: Full Security Breakdown
- **Instructor / Channel:** John Hammond (John Hammond)
- **Duration:** 45m
- **Direct Video Link:** [OWASP Top 10 for LLM Applications: Full Security Breakdown](https://www.youtube.com/watch?v=q0f4J0a8y0A)
- **Overview:** Practical demonstrations of critical LLM vulnerabilities: prompt injection (direct and indirect via crawled web content), sensitive info leakage, and insecure plugin design.

#### Mastery Checkpoints
- [ ] Identify direct and indirect prompt injection vectors in RAG and Agent pipelines
- [ ] Implement multi-stage input sanitization and delimiter boundary enforcement
- [ ] Audit tool calling execution boundaries to prevent remote code execution (RCE)

### 2. Implementing Programmable Guardrails with NeMo Guardrails
- **Instructor / Channel:** Traversy Media & NVIDIA (Traversy Media)
- **Duration:** 40m
- **Direct Video Link:** [Implementing Programmable Guardrails with NeMo Guardrails](https://www.youtube.com/watch?v=5w3k1y9q2A0)
- **Overview:** Building programmable guardrails using NVIDIA NeMo Guardrails: Colang dialogue modeling, topical rails, safety rails, execution rails, and input/output filters.

#### Mastery Checkpoints
- [ ] Write Colang scripts enforcing topical conversation boundaries
- [ ] Configure safety rails blocking prohibited topics and jailbreak patterns
- [ ] Implement automated PII (Personally Identifiable Information) redaction filters

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
