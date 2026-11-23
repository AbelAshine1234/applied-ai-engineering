# 06. LLM Engineering & Application Architecture

> **Track:** Applied AI Engineering | **Module:** 06 | **Estimated Duration:** 25 Hours | **Domain:** Core LLM

## Module Overview

Master prompt engineering techniques, structured outputs with Pydantic and Instructor, function calling, streaming APIs, reproducing GPT-2 with Karpathy, and tokenizer internals.

---

## Core Competencies & Skills

- **Byte-Pair Encoding (BPE) Tokenization**
- **Reproducing GPT-2 (124M)**
- **Structured Outputs & Function Calling**
- **Prompt Engineering (CoT, ReAct, Few-Shot)**
- **Token Management & Cost Optimization**

---

## Chapter Mini-Project: Mini-Project: Type-Safe Structured Extractor with Self-Healing Feedback Loop

### Project Objective
Develop a production data extraction engine using Instructor and Pydantic v2 that extracts highly nested financial/invoice records from raw text, validates complex invariants, and automatically feeds schema errors back to the model for self-correction.

### Deliverables & Verification Checklist
- [ ] **Define deeply nested Pydantic schemas with custom field cross-validators**
- [ ] **Implement automatic reflection retry loop correcting invalid JSON outputs**
- [ ] **Support multi-provider switching (OpenAI, Anthropic, Ollama local)**
- [ ] **Add token cost accounting and latency telemetry per extraction run**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Let's Reproduce GPT-2 (124M): From Scratch in PyTorch
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 4h 15m
- **Direct Video Link:** [Let's Reproduce GPT-2 (124M): From Scratch in PyTorch](https://www.youtube.com/watch?v=l8pRSuU81PU)
- **Overview:** Complete 4-hour masterclass reproducing GPT-2 (124M) weights, architecture, FlashAttention optimization, cosine learning schedule, distributed DDP training, and validation.

#### Mastery Checkpoints
- [ ] Load HuggingFace GPT-2 weights into a clean custom PyTorch model
- [ ] Benchmark speedups with torch.compile, FlashAttention, and Tensor Cores
- [ ] Train on the FineWeb-Edu dataset achieving state-of-the-art validation loss

### 2. Intro to Large Language Models: Technical Overview
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 1h 00m
- **Direct Video Link:** [Intro to Large Language Models: Technical Overview](https://www.youtube.com/watch?v=zjkBMFhNj_g)
- **Overview:** Comprehensive 1-hour overview of LLM pretraining, tokenization, fine-tuning (RLHF/DPO), tool use, multimodal extensions, and security jailbreaks.

#### Mastery Checkpoints
- [ ] Distinguish Base Models from Instruction-Tuned and Thinking Models
- [ ] Understand the full data curation, pre-training, and alignment pipeline
- [ ] Analyze LLM limitations: hallucinations, context windows, and safety vectors

### 3. Structured Outputs and Function Calling with Instructor
- **Instructor / Channel:** Jason Liu (Weights & Biases)
- **Duration:** 50m
- **Direct Video Link:** [Structured Outputs and Function Calling with Instructor](https://www.youtube.com/watch?v=yj-wSRJwrrc)
- **Overview:** How to extract 100% deterministic, type-safe data from LLMs using Pydantic, Instructor, and OpenAI/Anthropic tool calling APIs with automatic retry loops.

#### Mastery Checkpoints
- [ ] Configure Instructor with OpenAI, Anthropic, and open-source models
- [ ] Implement multi-stage schema validation with custom Pydantic validators
- [ ] Handle validation errors with self-correcting LLM feedback prompts

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
