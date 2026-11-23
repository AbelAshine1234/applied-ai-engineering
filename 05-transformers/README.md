# 05. Transformers & Attention Mechanisms

> **Track:** Applied AI Engineering | **Module:** 05 | **Estimated Duration:** 30 Hours | **Domain:** Architecture

## Module Overview

Build the Transformer architecture from scratch: Scaled Dot-Product Attention, Multi-Head Attention, RoPE positional encodings, FlashAttention, and decoder-only GPT models.

---

## Core Competencies & Skills

- **Self-Attention & Scaled Dot-Product**
- **Multi-Head Attention (MHA/MQA/GQA)**
- **Positional Encodings (Learned, Sinusoidal, RoPE)**
- **Transformer Decoder Blocks & Residual Streams**
- **KV Caching & FlashAttention**

---

## Chapter Mini-Project: Mini-Project: Mini-GPT: Causal Multi-Head Attention & Decoder Model

### Project Objective
Implement a modular Transformer decoder in PyTorch from scratch, featuring scaled dot-product attention with causal triangular masks, Rotary Positional Embeddings (RoPE), and train on a domain text dataset to generate coherent text.

### Deliverables & Verification Checklist
- [ ] **Implement MultiHeadAttention layer with dynamic batching and causal triangular mask**
- [ ] **Code Rotary Positional Embedding (RoPE) tensor rotation helpers**
- [ ] **Assemble TransformerBlock with Pre-LayerNorm and MLP projection layers**
- [ ] **Train on a text corpus and implement temperature and top-k autoregressive sampling**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Let's Build GPT: from scratch, in code, spelled out
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 1h 56m
- **Direct Video Link:** [Let's Build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- **Overview:** Build a Generative Pretrained Transformer (GPT) from scratch in PyTorch following the 'Attention Is All You Need' paper and nanoGPT design.

#### Mastery Checkpoints
- [ ] Code scaled dot-product self-attention with causal triangular masking
- [ ] Assemble Multi-Head Attention, Feed-Forward MLP, and Pre-LN blocks
- [ ] Train a mini GPT model on Shakespeare and generate novel text autoregressively

### 2. Attention Is All You Need (Transformer) Code Walkthrough
- **Instructor / Channel:** Umar Jamil (Umar Jamil)
- **Duration:** 2h 15m
- **Direct Video Link:** [Attention Is All You Need (Transformer) Code Walkthrough](https://www.youtube.com/watch?v=ISNdQcPhsts)
- **Overview:** Line-by-line PyTorch implementation of the entire Transformer paper: encoder, decoder, positional embeddings, cross-attention, and projection layer.

#### Mastery Checkpoints
- [ ] Implement query, key, value projections and tensor reshapes for heads
- [ ] Understand encoder-decoder cross-attention dynamics
- [ ] Build training loop with teacher forcing and padding masks

### 3. Rotary Positional Embeddings (RoPE) Explained with Code
- **Instructor / Channel:** Umar Jamil (Umar Jamil)
- **Duration:** 45m
- **Direct Video Link:** [Rotary Positional Embeddings (RoPE) Explained with Code](https://www.youtube.com/watch?v=o29P0Kp43UM)
- **Overview:** Deep mathematical and code walkthrough of Rotary Positional Embeddings (RoPE) used in LLaMA 3, Mistral, and modern state-of-the-art LLMs.

#### Mastery Checkpoints
- [ ] Understand complex number rotations in 2D coordinate pairs
- [ ] Implement RoPE frequency tensors and apply them to Q and K tensors
- [ ] Explain why RoPE preserves relative distances and enables context extension

### 4. Visualizing Attention and Transformers
- **Instructor / Channel:** Grant Sanderson (3Blue1Brown)
- **Duration:** 30m
- **Direct Video Link:** [Visualizing Attention and Transformers](https://www.youtube.com/watch?v=eMlx5fFNoYc)
- **Overview:** Superb 3D geometric animations explaining how words transform into high-dimensional vectors, how queries and keys align, and how context transfers.

#### Mastery Checkpoints
- [ ] Visualize high-dimensional semantic vector spaces
- [ ] Understand how attention matrices route information across token sequences
- [ ] Grasp the role of the residual stream as the central information highway

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
