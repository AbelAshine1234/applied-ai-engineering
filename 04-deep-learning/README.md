# 04. Deep Learning & Neural Networks

> **Track:** Applied AI Engineering | **Module:** 04 | **Estimated Duration:** 28 Hours | **Domain:** Neural Nets

## Module Overview

Build neural networks from scratch in raw Python, dissect backpropagation step-by-step, build micrograd and makemore with Andrej Karpathy, and master CNNs.

---

## Core Competencies & Skills

- **Manual Backpropagation & Autograd**
- **Multi-Layer Perceptrons (MLP)**
- **Batch Normalization & Layer Normalization**
- **Convolutional Neural Networks (CNNs)**
- **Loss Landscapes & Optimizers (AdamW, SGD)**

---

## Chapter Mini-Project: Mini-Project: Micro-PyTorch: Custom Autograd Scalar Engine & 2-Layer MLP

### Project Objective
Construct a scalar-valued automatic differentiation engine supporting dynamic computational graphs, backward gradient passes for basic arithmetic and activations, and train an MLP to classify the non-linear two moons dataset.

### Deliverables & Verification Checklist
- [ ] **Implement a Value class with parent DAG tracking and backward gradient closures**
- [ ] **Support operators: +, *, -, /, tanh, relu, pow, and exp**
- [ ] **Build Neuron, Layer, and MLP modules with zero_grad() and parameters() helpers**
- [ ] **Train on non-linear synthetic dataset and plot decision boundary convergence**

---

## Curated Video Lectures & Code Walkthroughs

### 1. The Spelled-Out Intro to Neural Networks and Backpropagation: Building Micrograd
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 2h 25m
- **Direct Video Link:** [The Spelled-Out Intro to Neural Networks and Backpropagation: Building Micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0)
- **Overview:** The gold standard deep learning tutorial. Building a scalar-valued autograd engine (micrograd) and neural network from pure scratch in Python.

#### Mastery Checkpoints
- [ ] Implement a Value class tracking children operations and gradients
- [ ] Manually derive backward methods for +, *, tanh, relu, and pow
- [ ] Train an MLP on a toy dataset and inspect computed gradients

### 2. Building Makemore Part 1: Bigram Language Model
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 1h 55m
- **Direct Video Link:** [Building Makemore Part 1: Bigram Language Model](https://www.youtube.com/watch?v=PaCmpygFfXo)
- **Overview:** Introduction to autoregressive character-level language modeling: counting bigrams, probability lookup matrices, sampling, and negative log-likelihood loss.

#### Mastery Checkpoints
- [ ] Construct character tokenization vocabulary and lookup index mapping
- [ ] Compute transition probability matrices with smoothing
- [ ] Train a single-layer linear neural network using cross-entropy loss

### 3. Building Makemore Part 2 & 3: MLP, Activations & Batch Normalization
- **Instructor / Channel:** Andrej Karpathy (Andrej Karpathy)
- **Duration:** 2h 15m
- **Direct Video Link:** [Building Makemore Part 2 & 3: MLP, Activations & Batch Normalization](https://www.youtube.com/watch?v=TCH_1BHYA8I)
- **Overview:** Bengio et al. 2003 neural language model implementation, embedding tables, vanishing/exploding gradients, weight initialization, and batch normalization internals.

#### Mastery Checkpoints
- [ ] Implement multi-dimensional token embedding lookups
- [ ] Analyze activation distributions, dead ReLUs, and Kaiming initialization
- [ ] Build manual BatchNorm layer tracking running mean and variance

### 4. MIT 6.S191: Introduction to Deep Learning
- **Instructor / Channel:** Alexander Amini (Alexander Amini)
- **Duration:** 55m
- **Direct Video Link:** [MIT 6.S191: Introduction to Deep Learning](https://www.youtube.com/watch?v=QDX-1M5NjAQ)
- **Overview:** MIT's flagship course lecture on neural network foundations, perceptron mathematics, loss surfaces, and gradient descent optimization dynamics.

#### Mastery Checkpoints
- [ ] Understand geometric interpretation of non-linear decision boundaries
- [ ] Analyze momentum, RMSProp, and Adam optimization algorithms
- [ ] Evaluate regularization methods including dropout and weight decay

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
