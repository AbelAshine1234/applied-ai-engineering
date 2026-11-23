# 16. Capstone Engineering Projects

> **Track:** Applied AI Engineering | **Module:** 16 | **Estimated Duration:** 50 Hours | **Domain:** Portfolio

## Module Overview

Five comprehensive, production-ready capstone projects that demonstrate mastery of the entire Applied AI Engineering curriculum for your resume and portfolio.

---

## Core Competencies & Skills

- **Full-Stack AI Architecture**
- **MCP Server & Client Integration**
- **Enterprise Hybrid RAG**
- **Real-Time WebRTC Voice Bots**
- **Distributed High-Throughput Model Serving**

---

## Chapter Mini-Project: Capstone Portfolio Suite: 5 Production Deployments

### Project Objective
Deliver and deploy all 5 enterprise-grade portfolio applications to demonstrate master-level Applied AI Engineering competency.

### Deliverables & Verification Checklist
- [ ] **Capstone 1: Multi-Modal Autonomous Agent with Model Context Protocol (MCP)**
- [ ] **Capstone 2: Enterprise Production RAG with Hybrid Search & Neural Reranker**
- [ ] **Capstone 3: Real-Time Sub-500ms Conversational Voice Agent**
- [ ] **Capstone 4: Domain-Specialized LLM Fine-Tuning Pipeline with QLoRA & DPO**
- [ ] **Capstone 5: High-Throughput vLLM Inference Gateway with Semantic Cache**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Project 1: Multi-Modal Autonomous Agent with Model Context Protocol (MCP)
- **Instructor / Channel:** Applied AI Engineering Team (Applied AI Engineering)
- **Duration:** Project Guide
- **Direct Video Link:** [Project 1: Multi-Modal Autonomous Agent with Model Context Protocol (MCP)](https://www.youtube.com/watch?v=rbtQ_E5L68A)
- **Overview:** Build an autonomous desktop and web research agent that connects via MCP to local filesystem, PostgreSQL database, and external search tools to execute complex research briefs.

#### Mastery Checkpoints
- [ ] Implement a custom FastMCP server exposing structured database and file tools
- [ ] Build a stateful LangGraph agent orchestrating multi-step research execution
- [ ] Implement human-in-the-loop confirmation before running destructive actions

### 2. Project 2: Enterprise Production RAG with Hybrid Search & Neural Reranker
- **Instructor / Channel:** Applied AI Engineering Team (Applied AI Engineering)
- **Duration:** Project Guide
- **Direct Video Link:** [Project 2: Enterprise Production RAG with Hybrid Search & Neural Reranker](https://www.youtube.com/watch?v=wd7TZ4w1mSw)
- **Overview:** Architect a high-performance RAG pipeline indexing 100,000+ technical documents using PGVector HNSW, BM25 hybrid fusion, and Cohere neural reranking with RAGAS evaluation.

#### Mastery Checkpoints
- [ ] Build semantic chunking and metadata extraction pipeline with Pydantic
- [ ] Implement Reciprocal Rank Fusion combining dense embeddings and BM25
- [ ] Add automated RAGAS evaluation suite testing Faithfulness and Relevance in CI/CD

### 3. Project 3: Real-Time Sub-500ms Conversational Voice Agent
- **Instructor / Channel:** Applied AI Engineering Team (Applied AI Engineering)
- **Duration:** Project Guide
- **Direct Video Link:** [Project 3: Real-Time Sub-500ms Conversational Voice Agent](https://www.youtube.com/watch?v=3Z8k1xY7r4E)
- **Overview:** Develop a real-time voice-to-voice bot using WebRTC, LiveKit Agents, Silero VAD, streaming Faster-Whisper transcription, and Kokoro neural speech synthesis.

#### Mastery Checkpoints
- [ ] Establish low-latency WebRTC audio streaming pipeline with LiveKit
- [ ] Implement conversational turn-taking and user speech interruption handling
- [ ] Optimize end-to-end voice roundtrip latency below 500ms

### 4. Project 4: Domain-Specialized LLM Fine-Tuning Pipeline with QLoRA & DPO
- **Instructor / Channel:** Applied AI Engineering Team (Applied AI Engineering)
- **Duration:** Project Guide
- **Direct Video Link:** [Project 4: Domain-Specialized LLM Fine-Tuning Pipeline with QLoRA & DPO](https://www.youtube.com/watch?v=PXERunGBUaA)
- **Overview:** Fine-tune an open-source 8B parameter model (LLaMA 3 or Mistral) on technical code and API documentation using QLoRA 4-bit quantization, followed by DPO alignment.

#### Mastery Checkpoints
- [ ] Curate and clean a domain dataset with strict instruction-response pairs
- [ ] Fine-tune with Unsloth / Hugging Face TRL using QLoRA adapters
- [ ] Execute DPO alignment and evaluate win-rate against the base foundation model

### 5. Project 5: High-Throughput vLLM Inference Gateway with Semantic Cache
- **Instructor / Channel:** Applied AI Engineering Team (Applied AI Engineering)
- **Duration:** Project Guide
- **Direct Video Link:** [Project 5: High-Throughput vLLM Inference Gateway with Semantic Cache](https://www.youtube.com/watch?v=5ZlavRFn988)
- **Overview:** Deploy an enterprise-grade OpenAI-compatible inference gateway fronted by FastAPI, Redis semantic vector caching, continuous batching on vLLM, and Prometheus metrics.

#### Mastery Checkpoints
- [ ] Serve 4-bit quantized open model with vLLM PagedAttention continuous batching
- [ ] Implement two-tier semantic caching layer reducing redundant API costs by 60%
- [ ] Expose Prometheus metrics for latency p95/p99, throughput (tokens/sec), and queue depth

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
