# 01. Python for AI Engineering

> **Track:** Applied AI Engineering | **Module:** 01 | **Estimated Duration:** 20 Hours | **Domain:** Core Runtime

## Module Overview

Master modern Python 3.12+, asynchronous concurrency, vector computing with NumPy, PyTorch tensor manipulation, and clean architectural design patterns for AI systems.

---

## Core Competencies & Skills

- **Python 3.12+ (Type Hinting, Generics)**
- **Asyncio & Concurrent Futures**
- **NumPy Vectorization & Broadcasting**
- **PyTorch Tensor Internals & Autograd**
- **Pydantic v2 & Fast Serialization**

---

## Chapter Mini-Project: Mini-Project: High-Throughput Async LLM Stream Dispatcher & Batcher

### Project Objective
Build a resilient, non-blocking asynchronous pipeline using asyncio.Queue, TaskGroup, and Pydantic v2 that handles 200+ concurrent LLM streaming requests with sliding-window rate limiting.

### Deliverables & Verification Checklist
- [ ] **Implement an AsyncLLMDispatcher queue handling concurrent stream requests**
- [ ] **Enforce token bucket rate limiting preventing provider rate-limit errors**
- [ ] **Validate and parse incoming payloads using strict Pydantic v2 schemas**
- [ ] **Write async unit tests benchmarking throughput and memory efficiency**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Python Asynchronous Programming (Asyncio Complete Tutorial)
- **Instructor / Channel:** ArjanCodes (ArjanCodes)
- **Duration:** 45m
- **Direct Video Link:** [Python Asynchronous Programming (Asyncio Complete Tutorial)](https://www.youtube.com/watch?v=2IW-ZEui4h4)
- **Overview:** Deep dive into async/await, event loops, tasks, and non-blocking IO critical for high-throughput LLM streaming and API routing.

#### Mastery Checkpoints
- [ ] Understand Python event loop internals and task scheduling
- [ ] Implement async context managers and async iterators
- [ ] Handle concurrent LLM streaming requests with asyncio.gather and TaskGroup

### 2. NumPy Full Course: Vectorized Computing & Memory Layout
- **Instructor / Channel:** Keith Galli (freeCodeCamp.org)
- **Duration:** 1h 00m
- **Direct Video Link:** [NumPy Full Course: Vectorized Computing & Memory Layout](https://www.youtube.com/watch?v=QUT1VHiLmmI)
- **Overview:** Comprehensive tutorial covering multidimensional array manipulation, broadcasting rules, indexing tricks, and vectorized math without Python loops.

#### Mastery Checkpoints
- [ ] Master array shape, stride, and contiguous C vs Fortran memory layout
- [ ] Implement multi-axis tensor broadcasting for batch calculations
- [ ] Compute dot products, matrix multiplications, and cosine similarity from scratch

### 3. PyTorch for Deep Learning & Tensor Operations Bootcamp
- **Instructor / Channel:** Daniel Bourke (freeCodeCamp.org)
- **Duration:** 25h 00m
- **Direct Video Link:** [PyTorch for Deep Learning & Tensor Operations Bootcamp](https://www.youtube.com/watch?v=V_xro1bcAuA)
- **Overview:** Zero to mastery in PyTorch: tensor creation, CUDA device placement, automatic differentiation (autograd), neural network modules, and data loaders.

#### Mastery Checkpoints
- [ ] Perform tensor operations across CPU and CUDA device hardware
- [ ] Understand torch.autograd dynamic computational graphs and backward passes
- [ ] Build custom torch.nn.Module layers, losses, and optimization loops

### 4. Pydantic V2 Deep Dive: Data Validation and Structured Outputs
- **Instructor / Channel:** Dave Ebbelaar (Dave Ebbelaar)
- **Duration:** 40m
- **Direct Video Link:** [Pydantic V2 Deep Dive: Data Validation and Structured Outputs](https://www.youtube.com/watch?v=Vj-QUss3o0Y)
- **Overview:** Mastering Pydantic v2 rust-powered validation for LLM structured outputs, JSON schema generation, and strict typing.

#### Mastery Checkpoints
- [ ] Define nested Pydantic models with field validators and custom types
- [ ] Generate OpenAI and Anthropic compatible JSON schemas
- [ ] Parse and enforce deterministic structured outputs from LLM responses

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
