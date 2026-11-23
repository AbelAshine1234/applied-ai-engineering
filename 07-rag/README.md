# 07. Retrieval Augmented Generation (RAG)

> **Track:** Applied AI Engineering | **Module:** 07 | **Estimated Duration:** 26 Hours | **Domain:** Search & Memory

## Module Overview

Build production-grade RAG systems: chunking strategies, dense embeddings, vector databases (PGVector, Qdrant), hybrid search with BM25, and neural rerankers (Cohere).

---

## Core Competencies & Skills

- **Document Parsing & Semantic Chunking**
- **Dense Embeddings & Vector Search**
- **Hybrid Search (Dense + BM25 Sparse)**
- **Neural Reranking (Cross-Encoders, Cohere)**
- **Context Compression & HyDE**

---

## Chapter Mini-Project: Mini-Project: Hybrid RAG Engine with Reciprocal Rank Fusion & Neural Reranker

### Project Objective
Build a technical documentation search and synthesis engine combining BM25 keyword matching with PGVector HNSW dense embeddings, fused via Reciprocal Rank Fusion (RRF) and reranked using a cross-encoder model.

### Deliverables & Verification Checklist
- [ ] **Implement semantic sliding-window chunking preserving Markdown headers and code blocks**
- [ ] **Deploy PostgreSQL with pgvector extension and build HNSW index**
- [ ] **Implement Reciprocal Rank Fusion (RRF) algorithm combining dense and sparse candidate lists**
- [ ] **Integrate cross-encoder neural reranker and format cited source references**

---

## Curated Video Lectures & Code Walkthroughs

### 1. RAG From Scratch: Complete Architecture Masterclass
- **Instructor / Channel:** Lance Martin & Harrison Chase (LangChain)
- **Duration:** 2h 30m
- **Direct Video Link:** [RAG From Scratch: Complete Architecture Masterclass](https://www.youtube.com/watch?v=wd7TZ4w1mSw)
- **Overview:** Complete ground-up RAG architecture series: query translation (Multi-query, RAG-fusion, Decomposition), routing, indexing, retrieval, and synthesis.

#### Mastery Checkpoints
- [ ] Implement semantic document chunking with metadata preservation
- [ ] Index document vectors in vector stores with cosine & dot-product distance
- [ ] Execute query decomposition, HyDE (Hypothetical Document Embeddings), and routing

### 2. Advanced RAG: Hybrid Search and Re-Ranking Explained
- **Instructor / Channel:** James Briggs (James Briggs)
- **Duration:** 45m
- **Direct Video Link:** [Advanced RAG: Hybrid Search and Re-Ranking Explained](https://www.youtube.com/watch?v=kl6NYuhkvbk)
- **Overview:** Overcoming vector search failures with Reciprocal Rank Fusion (RRF), BM25 keyword matching, and cross-encoder neural rerankers.

#### Mastery Checkpoints
- [ ] Combine BM25 sparse keyword scores with dense vector similarity via RRF
- [ ] Integrate Cohere or BGE cross-encoder rerankers on top-k candidates
- [ ] Benchmark precision@k and recall@k improvements on technical queries

### 3. PostgreSQL Vector Search with PGVector and Supabase
- **Instructor / Channel:** Greg Richardson (Supabase)
- **Duration:** 35m
- **Direct Video Link:** [PostgreSQL Vector Search with PGVector and Supabase](https://www.youtube.com/watch?v=Yhtjd7yGGGA)
- **Overview:** Implementing production vector search inside relational PostgreSQL using the pgvector extension, HNSW indexing, and IVFFlat indices.

#### Mastery Checkpoints
- [ ] Install and configure pgvector extension in PostgreSQL / Supabase
- [ ] Build HNSW (Hierarchical Navigable Small World) indexes for sub-10ms search
- [ ] Write SQL functions performing hybrid vector and relational metadata filtering

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
