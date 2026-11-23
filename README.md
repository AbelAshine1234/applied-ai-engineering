# Applied AI Engineering — Master Course & Production Roadmap

[![Status: Production Grade](https://img.shields.io/badge/Status-Production%20Grade-5eead4?style=for-the-badge&logo=ai)]()
[![Modules: 55 Practical Modules](https://img.shields.io/badge/Modules-55%20Modules-38bdf8?style=for-the-badge)]()
[![Phases: 16 Comprehensive Phases](https://img.shields.io/badge/Phases-16%20Phases-818cf8?style=for-the-badge)]()
[![Portfolio Projects: 4 Major Capstones](https://img.shields.io/badge/Portfolio%20Projects-4%20Major%20Systems-10b981?style=for-the-badge)]()
[![Interactive Web Tracker](https://img.shields.io/badge/Interactive%20Web%20Tracker-Live%20Checklists-f59e0b?style=for-the-badge)](https://abelashine1234.github.io/applied-ai-engineering/)

## Course Objective

Become a production-oriented Applied AI Engineer capable of designing, implementing, evaluating, deploying and optimizing modern AI systems.

Every module has specific implementation tasks, practical exercises, deliverables, and a completion test. You shouldn't move to the next module simply because you've watched a lecture or read documentation.

**Track your progress live:** [https://abelashine1234.github.io/applied-ai-engineering/](https://abelashine1234.github.io/applied-ai-engineering/)

---

## Interactive Documentation Platform

- **Production Domain:** [https://learn.weleba.tech](https://learn.weleba.tech)
- **Live Documentation (GitHub Pages):** [https://abelashine1234.github.io/applied-ai-engineering/](https://abelashine1234.github.io/applied-ai-engineering/)
- **Next.js & Docker Documentation Server:** Run locally on port `3000` via Docker Compose.

### Docker Quickstart

```bash
# Clone repository
git clone https://github.com/AbelAshine1234/applied-ai-engineering.git
cd applied-ai-engineering

# Start documentation platform in Docker
docker compose up -d

# Open in browser
http://localhost:3000
```

### Local Development (Next.js)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production standalone build
npm run build

# Static export for GitHub Pages
npm run export
```

---

## Priority Track for Two-Month Job Target

> **Strategic Priority Guidance:**  
> This is the complete 55-module curriculum. For an accelerated job target, prioritize in this order:
> 1. **Phase 1: Python for AI Engineering** (Modules 1–4)
> 2. **Phase 4 & 5: LLM Foundations & Application Engineering** (Modules 12–19)
> 3. **Phase 6: Embeddings, Vector Databases and RAG** (Modules 20–23)
> 4. **Phase 7 & 8: AI Agents & MCP Interoperability** (Modules 24–31)
> 5. **Phase 9: Evaluation and Observability** (Modules 32–35)
> 6. **Phase 10: AI Infrastructure & Model Serving** (Modules 36–39)
> 7. **Phase 16: AI Product Engineering & Architecture** (Modules 53–55)
>
> *Foundations (Phase 2 & 3), Multimodal/Voice (Phase 12), Security (Phase 13), Knowledge Graphs (Phase 14), and Advanced RL (Phase 15) should be studied alongside or as specialized deep dives.*

---

## How We Will Complete Each Module (Learning Contract)

Every module follows the exact same 9-step learning contract:

1. **Concepts:** Understand the theory, terminology and underlying mechanisms.
2. **Guided implementation:** Build a small working example.
3. **Independent tasks:** Solve problems without copying the tutorial.
4. **Module project:** Build something that demonstrates the concepts.
5. **Testing:** Write tests and investigate failure cases.
6. **Technical explanation:** Explain the architecture and trade-offs.
7. **Public progress:** Publish a technical post and relevant GitHub work.
8. **Independent review:** Have Claude review your implementation.
9. **Assessment:** Complete a practical examination before advancing.

---

## Complete 16-Phase Module Roadmap

### Phase 1 — Python for AI Engineering
> **Priority:** HIGH (Immediate Job Target) | **Domain:** Runtime & Async

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **1** | [Advanced Python](01-advanced-python/README.md) | Implement decorators, context managers, generators, iterators, type hints and Pydantic models. | `Python utilities library` |
| **2** | [Async Python](02-async-python/README.md) | Build concurrent API clients, async task queues, cancellation, timeouts and retry mechanisms. | `Async API processing service` |
| **3** | [Scientific Python](03-scientific-python/README.md) | Implement data transformations, vector operations, NumPy calculations and Pandas/Polars pipelines. | `Data processing pipeline` |
| **4** | [AI Backend Engineering](04-ai-backend-engineering/README.md) | Build FastAPI endpoints, validation, dependency injection, streaming responses and tests. | `Production-style AI backend` |

---

### Phase 2 — Mathematics and Machine Learning
> **Priority:** MEDIUM (Foundational) | **Domain:** Foundations

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **5** | [Linear Algebra](05-linear-algebra/README.md) | Implement vectors, matrices, dot products, matrix multiplication and cosine similarity from scratch. | `Linear algebra implementation` |
| **6** | [Calculus and Optimization](06-calculus-and-optimization/README.md) | Implement derivatives, gradient descent and loss minimization. | `Gradient descent visual experiment` |
| **7** | [Probability and Statistics](07-probability-and-statistics/README.md) | Implement probability distributions, sampling, confidence intervals and statistical measurements. | `Statistical analysis notebook` |
| **8** | [Machine Learning](08-machine-learning/README.md) | Train regression, classification and clustering models; evaluate and compare performance. | `End-to-end ML prediction service` |

---

### Phase 3 — Deep Learning
> **Priority:** HIGH (Core Architecture) | **Domain:** Neural Networks

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **9** | [Neural Networks](09-neural-networks/README.md) | Implement a perceptron, activation functions, forward propagation and backpropagation. | `Neural network from scratch` |
| **10** | [PyTorch](10-pytorch/README.md) | Build training loops, datasets, dataloaders, optimizers and checkpointing. | `PyTorch training pipeline` |
| **11** | [Deep Learning Architectures](11-deep-learning-architectures/README.md) | Implement and compare MLP, CNN, RNN and transformer architectures. | `Architecture comparison experiments` |

---

### Phase 4 — Large Language Models
> **Priority:** CRITICAL (Core Mastery) | **Domain:** Core LLM

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **12** | [Tokenization](12-tokenization/README.md) | Implement a simple tokenizer and explore BPE tokenization. | `Basic tokenizer` |
| **13** | [Transformer Architecture](13-transformer-architecture/README.md) | Implement positional embeddings, attention, QKV projections and transformer blocks. | `Mini GPT` |
| **14** | [LLM Training](14-llm-training/README.md) | Explore pretraining, SFT, RLHF, DPO and training data preparation. | `Small-model fine-tuning experiment` |
| **15** | [LLM Inference](15-llm-inference/README.md) | Explore sampling, KV caching, batching, quantization and inference performance. | `LLM inference benchmark` |

---

### Phase 5 — LLM Application Engineering
> **Priority:** CRITICAL (Immediate Job Target) | **Domain:** App Engineering

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **16** | [LLM APIs](16-llm-apis/README.md) | Integrate OpenAI, Anthropic and Gemini APIs with unified interfaces. | `Multi-provider LLM gateway` |
| **17** | [Prompt Engineering](17-prompt-engineering/README.md) | Implement system prompts, few-shot examples, context management and structured outputs. | `Prompt testing framework` |
| **18** | [Tool Calling](18-tool-calling/README.md) | Build function calling, validation, execution, permissions and error recovery. | `Tool-calling application` |
| **19** | [Streaming and Reliability](19-streaming-and-reliability/README.md) | Implement SSE, WebSockets, retries, fallbacks, rate limits and caching. | `Reliable streaming LLM service` |

---

### Phase 6 — Embeddings, Vector Databases and RAG
> **Priority:** CRITICAL (Immediate Job Target) | **Domain:** Search & Memory

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **20** | [Embeddings](20-embeddings/README.md) | Generate embeddings, compare similarity metrics and explore embedding models. | `Embedding search engine` |
| **21** | [Vector Databases](21-vector-databases/README.md) | Implement CRUD, metadata filtering, indexing and similarity search using pgvector or Qdrant. | `Vector search service` |
| **22** | [RAG Fundamentals](22-rag-fundamentals/README.md) | Implement document ingestion, parsing, chunking, retrieval and grounded generation. | `Document question-answering system` |
| **23** | [Advanced RAG](23-advanced-rag/README.md) | Implement hybrid search, BM25, RRF, reranking, query rewriting and metadata filtering. | `Advanced RAG platform` |

---

### Phase 7 — AI Agents
> **Priority:** CRITICAL (Immediate Job Target) | **Domain:** Agentic Systems

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **24** | [Agent Fundamentals](24-agent-fundamentals/README.md) | Build an agent with tools, state, execution loops and termination conditions. | `Basic AI agent` |
| **25** | [Agent Reasoning](25-agent-reasoning/README.md) | Implement ReAct, planning, reflection and structured workflows. | `Planning agent` |
| **26** | [Agent Memory](26-agent-memory/README.md) | Implement conversation memory, persistent memory and retrieval-based memory. | `Stateful AI agent` |
| **27** | [Agent Orchestration](27-agent-orchestration/README.md) | Build multi-step workflows, human approval and multi-agent collaboration. | `Multi-agent system` |
| **28** | [Agent Frameworks](28-agent-frameworks/README.md) | Rebuild an agent using LangGraph, PydanticAI or another framework. | `Framework comparison project` |

---

### Phase 8 — MCP and Interoperability
> **Priority:** HIGH (Standard Protocol) | **Domain:** Protocols

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **29** | [MCP Fundamentals](29-mcp-fundamentals/README.md) | Implement MCP servers, tools, resources and prompts. | `Custom MCP server` |
| **30** | [MCP Integration](30-mcp-integration/README.md) | Connect an AI client to multiple MCP servers with authentication and permission controls. | `MCP-powered assistant` |
| **31** | [Agent-to-Agent Communication](31-agent-to-agent-communication/README.md) | Explore A2A concepts, agent discovery and task delegation. | `Interoperable agent prototype` |

---

### Phase 9 — Evaluation and Observability
> **Priority:** CRITICAL (Immediate Job Target) | **Domain:** Reliability & Quality

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **32** | [LLM Evaluation](32-llm-evaluation/README.md) | Build golden datasets, automated test cases and LLM-as-judge evaluation. | `LLM evaluation framework` |
| **33** | [RAG Evaluation](33-rag-evaluation/README.md) | Measure Recall@K, Precision@K, MRR, faithfulness and groundedness. | `RAG benchmarking suite` |
| **34** | [Agent Evaluation](34-agent-evaluation/README.md) | Test tool selection, task completion, execution trajectories and failure recovery. | `Agent evaluation suite` |
| **35** | [Observability](35-observability/README.md) | Track traces, tokens, latency, errors, model costs and execution steps. | `AI observability dashboard` |

---

### Phase 10 — AI Infrastructure and Serving
> **Priority:** HIGH (Immediate Job Target) | **Domain:** Inference & Deploy

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **36** | [GPU Fundamentals](36-gpu-fundamentals/README.md) | Explore GPU architecture, CUDA, VRAM and memory constraints. | `GPU performance experiments` |
| **37** | [Model Serving](37-model-serving/README.md) | Deploy an open-source LLM using Ollama, vLLM or SGLang. | `Self-hosted inference API` |
| **38** | [Distributed AI Systems](38-distributed-ai-systems/README.md) | Implement queues, workers, batching, load balancing and asynchronous execution. | `Distributed inference service` |
| **39** | [Performance Engineering](39-performance-engineering/README.md) | Benchmark P50/P95/P99 latency, throughput, concurrency and cost. | `Performance report` |

---

### Phase 11 — Fine-Tuning
> **Priority:** MEDIUM (Specialized Track) | **Domain:** Model Adaptation

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **40** | [Fine-Tuning Fundamentals](40-fine-tuning-fundamentals/README.md) | Prepare datasets, train-validation splits and evaluation benchmarks. | `Fine-tuning dataset` |
| **41** | [LoRA and QLoRA](41-lora-and-qlora/README.md) | Fine-tune a small open-source model using PEFT. | `Adapted language model` |
| **42** | [Model Evaluation](42-model-evaluation/README.md) | Compare base and fine-tuned models using the same benchmark. | `Model comparison report` |

---

### Phase 12 — Multimodal and Voice AI
> **Priority:** HIGH (Production Advantage) | **Domain:** Audio & Vision

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **43** | [Vision-Language Models](43-vision-language-models/README.md) | Build image understanding, document extraction and visual question answering. | `Multimodal assistant` |
| **44** | [Speech Engineering](44-speech-engineering/README.md) | Integrate speech-to-text, text-to-speech and audio processing. | `Speech processing service` |
| **45** | [Real-Time Voice Agents](45-real-time-voice-agents/README.md) | Implement streaming audio, interruptions, turn detection and tool execution. | `Real-time voice AI agent` |

---

### Phase 13 — AI Security and Reliability
> **Priority:** HIGH (Enterprise Grade) | **Domain:** Hardening & Guardrails

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **46** | [AI Security](46-ai-security/README.md) | Test prompt injection, data leakage, malicious documents and insecure tool execution. | `AI security test suite` |
| **47** | [AI Reliability](47-ai-reliability/README.md) | Implement guardrails, fallbacks, validation, retries and failure recovery. | `Resilient AI application` |

---

### Phase 14 — Knowledge Graphs and Advanced Retrieval
> **Priority:** MEDIUM (Enterprise Search) | **Domain:** Knowledge Systems

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **48** | [Knowledge Graphs](48-knowledge-graphs/README.md) | Model entities, relationships and graph traversal. | `Knowledge graph` |
| **49** | [GraphRAG](49-graphrag/README.md) | Combine graph retrieval with vector search and LLM generation. | `GraphRAG application` |

---

### Phase 15 — Reinforcement Learning and Advanced Reasoning
> **Priority:** LOW (Can Come Later) | **Domain:** Reasoning & RL

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **50** | [Reinforcement Learning](50-reinforcement-learning/README.md) | Implement states, actions, rewards and a basic Q-learning agent. | `RL experiment` |
| **51** | [Preference Optimization](51-preference-optimization/README.md) | Explore reward models, DPO and GRPO through practical experiments. | `Preference optimization experiment` |
| **52** | [Advanced Reasoning](52-advanced-reasoning/README.md) | Study reasoning strategies, search, verification and inference-time compute. | `Reasoning evaluation experiment` |

---

### Phase 16 — AI Product Engineering and Architecture
> **Priority:** CRITICAL (Immediate Job Target) | **Domain:** Architecture & Systems

| Module # | Module Name | Projects and Tasks | Target Deliverable |
|---|---|---|---|
| **53** | [AI System Design](53-ai-system-design/README.md) | Design scalable AI architectures, identify bottlenecks and document trade-offs. | `AI system architecture` |
| **54** | [AI Product Development](54-ai-product-development/README.md) | Convert a business problem into an AI product with measurable success criteria. | `AI product specification` |
| **55** | [Production Readiness](55-production-readiness/README.md) | Add monitoring, authentication, deployment, documentation and operational procedures. | `Production-ready AI application` |

---

## 4 Major Portfolio Projects

These 4 major projects combine the modules into end-to-end production systems instead of isolated toys:

### 1. Enterprise AI Agent Platform
- **Combined Modules:** `16–19, 24–31, 32–35, 46–47`
- **Reference Architecture:** [Enterprise AI Agents & Orchestration Systems](https://adsp.ai/ai-orchestration?utm_source=chatgpt.com)
- **Core Architecture:**
  - Multi-provider model gateway
  - Tool execution and permissions
  - Persistent agent state
  - MCP integrations
  - Evaluation and observability
  - Human approval workflows

### 2. Enterprise Knowledge Intelligence
- **Combined Modules:** `20–23, 32–35, 48–49`
- **Reference Architecture:** [AI Internal Knowledge Search](https://dribbble.com/shots/27379062-AI-Internal-Knowledge-Search?utm_source=chatgpt.com)
- **Core Architecture:**
  - Document ingestion
  - Hybrid retrieval (BM25 + Dense embeddings)
  - Cross-encoder reranking
  - GraphRAG
  - Source citations
  - Retrieval evaluation (Ragas)

### 3. Real-Time Voice AI Platform
- **Combined Modules:** `16–19, 24–28, 43–47`
- **Reference Architecture:** [Tencent Conversational AI | Real-time Voice Interaction](https://trtc.io/document/conversational-ai-overview?utm_source=chatgpt.com)
- **Core Architecture:**
  - Real-time audio streaming (WebRTC)
  - Speech recognition and synthesis
  - Interruptions and turn detection (Silero VAD)
  - Tool-calling voice agent
  - Latency measurements (<500ms roundtrip)
  - Conversation evaluation

### 4. Self-Hosted AI Infrastructure
- **Combined Modules:** `36–42, 53–55`
- **Reference Architecture:** [Building GPU Monitoring for ML Inference](https://medium.com/@harishpillai1994/building-gpu-monitoring-for-ml-inference-without-dcgm-ba5e800ba9ca?utm_source=chatgpt.com)
- **Core Architecture:**
  - Open-source model deployment (vLLM / SGLang)
  - High-throughput inference API
  - GPU monitoring (VRAM/utilization)
  - Distributed workers
  - Load testing (p95/p99 latency)
  - Cost and throughput optimization

---

## Interactive Progress Web Application

This repository comes with a zero-dependency, responsive interactive web application:
- **Master Progress Counter:** Tracks 0/55 modules and all underlying learning contract milestones.
- **Phase Breakdown Accordions:** Track progress phase-by-phase (Phase 1: 0/4, Phase 2: 0/4, etc.).
- **Job-Target Priority Filter:** One-click filter to isolate high-priority hiring phases.
- **In-App Video Modal:** Watch curated lectures from Andrej Karpathy, 3Blue1Brown, Umar Jamil, and Harrison Chase directly in the app.
- **Offline LocalStorage Persistence:** Progress is saved automatically.
- **Export & Import JSON:** Backup and restore your progress across devices.

Launch locally with:
```bash
python3 -m http.server 8080
# Or open index.html directly in your browser
```

---

## Author & Engineering Lead

**Abel Ashine Dadi**
- Senior Systems Architect & Lead Software Engineer
- Co-Founder @ spin.tf & Weleba Technology
- Portfolio: [https://abelashine.weleba.tech](https://abelashine.weleba.tech)
- GitHub: [@AbelAshine1234](https://github.com/AbelAshine1234)
- Email: `abelashinework@gmail.com`
