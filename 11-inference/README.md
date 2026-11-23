# 11. High-Throughput Inference & Model Serving

> **Track:** Applied AI Engineering | **Module:** 11 | **Estimated Duration:** 24 Hours | **Domain:** Performance

## Module Overview

Deploy high-throughput, low-latency LLM serving engines: vLLM, PagedAttention, KV-cache management, continuous batching, quantization (GGUF, AWQ), and FastAPI gateways.

---

## Core Competencies & Skills

- **vLLM Engine & PagedAttention**
- **Continuous Batching & Speculative Decoding**
- **Quantization (GGUF, AWQ, GPTQ, BitsAndBytes)**
- **FastAPI High-Throughput Streaming Gateways**
- **Ollama & Local Model Deployment**

---

## Chapter Mini-Project: Mini-Project: High-Throughput FastAPI Streaming Gateway with Semantic Cache

### Project Objective
Architect an OpenAI-compatible high-performance LLM gateway backed by vLLM/Ollama, featuring Server-Sent Events (SSE) token streaming, two-tier Redis semantic vector caching, and Prometheus latency metrics.

### Deliverables & Verification Checklist
- [ ] **Implement asynchronous FastAPI endpoints mirroring OpenAI /v1/chat/completions**
- [ ] **Build two-tier cache: exact SHA256 prompt matching + Redis cosine vector similarity**
- [ ] **Deploy local 4-bit quantized model and benchmark continuous batching speedup**
- [ ] **Expose Prometheus metrics for TTFT (Time to First Token), latency p99, and token/sec**

---

## Curated Video Lectures & Code Walkthroughs

### 1. vLLM and PagedAttention Explained: How to Serve LLMs 20x Faster
- **Instructor / Channel:** Umar Jamil (Umar Jamil)
- **Duration:** 45m
- **Direct Video Link:** [vLLM and PagedAttention Explained: How to Serve LLMs 20x Faster](https://www.youtube.com/watch?v=5ZlavRFn988)
- **Overview:** Deep technical analysis of memory fragmentation in KV caches, how virtual memory and OS paging inspired PagedAttention, and how continuous batching maximizes GPU utilization.

#### Mastery Checkpoints
- [ ] Explain memory bottlenecks caused by redundant KV cache pre-allocation
- [ ] Understand PagedAttention virtual block tables and non-contiguous memory allocations
- [ ] Deploy vLLM server with continuous batching and benchmark token throughput

### 2. Quantization Explained: GGUF, AWQ, GPTQ and 4-Bit Precision
- **Instructor / Channel:** Tanishq Abraham (Weights & Biases)
- **Duration:** 50m
- **Direct Video Link:** [Quantization Explained: GGUF, AWQ, GPTQ and 4-Bit Precision](https://www.youtube.com/watch?v=TPcXVJ1VSRI)
- **Overview:** Comprehensive explanation of post-training quantization (PTQ): FP16 vs INT8 vs INT4, zero-point and scale factors, activation-aware quantization (AWQ), and GGUF format.

#### Mastery Checkpoints
- [ ] Calculate memory requirements across FP16, INT8, and INT4 precision formats
- [ ] Explain the difference between weight-only and weight-activation quantization
- [ ] Convert and run 4-bit quantized open-source models using llama.cpp and Ollama

### 3. Building a Production LLM API Gateway with FastAPI and LiteLLM
- **Instructor / Channel:** ArjanCodes (ArjanCodes)
- **Duration:** 40m
- **Direct Video Link:** [Building a Production LLM API Gateway with FastAPI and LiteLLM](https://www.youtube.com/watch?v=d8WwR2Q2_wE)
- **Overview:** Architecting an enterprise LLM proxy with load balancing, fallback providers, rate limiting, semantic response caching with Redis, and SSE streaming.

#### Mastery Checkpoints
- [ ] Implement asynchronous SSE (Server-Sent Events) streaming responses in FastAPI
- [ ] Configure LiteLLM proxy for automated multi-provider failover routing
- [ ] Implement Redis semantic caching for repetitive query optimization

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
