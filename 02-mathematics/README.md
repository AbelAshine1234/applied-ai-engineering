# 02. Mathematics for Machine Learning

> **Track:** Applied AI Engineering | **Module:** 02 | **Estimated Duration:** 24 Hours | **Domain:** Foundations

## Module Overview

Develop deep geometric intuition for linear algebra, vector spaces, eigenvalues, multivariable calculus, gradient descent, probability distributions, and information theory.

---

## Core Competencies & Skills

- **Vector Spaces & Linear Transformations**
- **Eigenvalues, Eigenvectors & SVD**
- **Multivariable Calculus & Partial Derivatives**
- **Gradient Descent & Optimization Landscapes**
- **Probability Distributions & Cross-Entropy**

---

## Chapter Mini-Project: Mini-Project: 2D Geometric Transformation & PCA Engine from Scratch

### Project Objective
Implement geometric coordinate projections, matrix transformations, covariance matrix calculations, power iteration for eigenvalues/eigenvectors, and dimensionality reduction in pure NumPy without Scikit-Learn.

### Deliverables & Verification Checklist
- [ ] **Implement 2D and 3D affine transformation matrices (rotation, scaling, shear)**
- [ ] **Calculate sample covariance matrices and implement power iteration for principal eigenvalues**
- [ ] **Project high-dimensional embedding vectors into 2D principal component space**
- [ ] **Verify mathematical equivalence against standard SVD formulations**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Essence of Linear Algebra: Full Masterclass Series
- **Instructor / Channel:** Grant Sanderson (3Blue1Brown)
- **Duration:** 3h 15m
- **Direct Video Link:** [Essence of Linear Algebra: Full Masterclass Series](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
- **Overview:** Visual, intuitive understanding of vectors, linear combinations, dot products, cross products, determinants, matrix multiplication as transformations, and change of basis.

#### Mastery Checkpoints
- [ ] Visualize matrices as geometric transformations of coordinate space
- [ ] Compute determinants and understand their volume-scaling intuition
- [ ] Derive eigenvalues and eigenvectors and their role in dimensionality reduction

### 2. Essence of Calculus: Derivatives, Chain Rule & Integrals
- **Instructor / Channel:** Grant Sanderson (3Blue1Brown)
- **Duration:** 3h 30m
- **Direct Video Link:** [Essence of Calculus: Derivatives, Chain Rule & Integrals](https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)
- **Overview:** Fundamental theorems of calculus, derivative intuition, chain rule for nested functions (the engine of backpropagation), and multivariate optimization.

#### Mastery Checkpoints
- [ ] Grasp the geometric intuition of derivatives as local linear approximations
- [ ] Master multivariable chain rule for forward/backward computational graphs
- [ ] Calculate gradients and directional derivatives across loss surfaces

### 3. StatQuest: Probability, Likelihood & Cross-Entropy
- **Instructor / Channel:** Josh Starmer (StatQuest with Josh Starmer)
- **Duration:** 1h 45m
- **Direct Video Link:** [StatQuest: Probability, Likelihood & Cross-Entropy](https://www.youtube.com/watch?v=p_xNWuSy5c8)
- **Overview:** Clear step-by-step breakdowns of probability density functions, maximum likelihood estimation (MLE), Bayes theorem, Shannon entropy, and cross-entropy loss.

#### Mastery Checkpoints
- [ ] Distinguish probability from likelihood in statistical estimation
- [ ] Understand Shannon entropy, KL divergence, and cross-entropy loss
- [ ] Compute Softmax activation and cross-entropy gradients analytically

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
