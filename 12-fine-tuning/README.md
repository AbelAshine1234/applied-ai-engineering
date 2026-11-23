# 12. Fine-Tuning & Model Alignment

> **Track:** Applied AI Engineering | **Module:** 12 | **Estimated Duration:** 26 Hours | **Domain:** Model Adaptation

## Module Overview

Adapt foundation models to specialized domain tasks using PEFT, LoRA, QLoRA, Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), and Unsloth.

---

## Core Competencies & Skills

- **LoRA & QLoRA Mathematical Foundations**
- **Hugging Face TRL & SFTTrainer**
- **Dataset Preparation & Formatting (ShareGPT, Alpaca)**
- **Direct Preference Optimization (DPO)**
- **High-Speed Training with Unsloth**

---

## Chapter Mini-Project: Mini-Project: Specialized Domain Model Fine-Tuning with QLoRA & DPO

### Project Objective
Curate an instruction-response dataset, train 4-bit QLoRA adapters on an open 8B model using Unsloth/TRL, perform Direct Preference Optimization (DPO) to align stylistic preferences, and merge weights for deployment.

### Deliverables & Verification Checklist
- [ ] **Clean and tokenize custom domain dataset with strict instruction formatting**
- [ ] **Configure FastLanguageModel and train LoRA adapters with gradient checkpointing**
- [ ] **Execute DPO alignment step using chosen vs rejected response pairs**
- [ ] **Merge LoRA adapter weights and export GGUF model for local inference testing**

---

## Curated Video Lectures & Code Walkthroughs

### 1. LoRA & QLoRA Explained with Code from Scratch
- **Instructor / Channel:** Umar Jamil (Umar Jamil)
- **Duration:** 1h 10m
- **Direct Video Link:** [LoRA & QLoRA Explained with Code from Scratch](https://www.youtube.com/watch?v=PXERunGBUaA)
- **Overview:** Deep mathematical and implementation breakdown of Low-Rank Adaptation (LoRA) and 4-bit NormalFloat QLoRA: low-rank decomposition matrices, adapter fusion, and memory savings.

#### Mastery Checkpoints
- [ ] Understand low-rank matrix decomposition W + A*B with rank r
- [ ] Explain NF4 (NormalFloat 4) data type and double quantization in QLoRA
- [ ] Inject custom LoRA adapters into PyTorch attention projection layers

### 2. Fine-Tuning LLaMA 3 5x Faster with Unsloth
- **Instructor / Channel:** Daniel Han (Unsloth AI)
- **Duration:** 45m
- **Direct Video Link:** [Fine-Tuning LLaMA 3 5x Faster with Unsloth](https://www.youtube.com/watch?v=hBbzIomVqL0)
- **Overview:** Hands-on tutorial fine-tuning LLaMA 3 and Mistral using Unsloth's optimized manual backprop derivations, reducing VRAM usage by 80% and increasing training throughput.

#### Mastery Checkpoints
- [ ] Format custom datasets into instruction-response conversation templates
- [ ] Configure FastLanguageModel and PeftModel with targeted LoRA parameters
- [ ] Export fine-tuned LoRA weights to 16-bit and GGUF formats for deployment

### 3. RLHF and Direct Preference Optimization (DPO) Explained
- **Instructor / Channel:** Yannic Kilcher (Yannic Kilcher)
- **Duration:** 55m
- **Direct Video Link:** [RLHF and Direct Preference Optimization (DPO) Explained](https://www.youtube.com/watch?v=2KkU_wA5m9B)
- **Overview:** Deep dive into model alignment: why traditional RLHF with reward models is complex and unstable, and how DPO mathematically optimizes preferences directly with cross-entropy.

#### Mastery Checkpoints
- [ ] Compare SFT baseline with preference pairs (chosen vs rejected responses)
- [ ] Derive the DPO objective function bypassing external reward models
- [ ] Train a DPOTrainer on preference datasets and measure alignment win-rates

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
