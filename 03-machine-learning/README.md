# 03. Classical Machine Learning

> **Track:** Applied AI Engineering | **Module:** 03 | **Estimated Duration:** 22 Hours | **Domain:** Core ML

## Module Overview

Implement and evaluate classical supervised and unsupervised algorithms, understand bias-variance tradeoff, regularization, decision trees, ensemble methods, and clustering.

---

## Core Competencies & Skills

- **Linear & Logistic Regression**
- **Support Vector Machines (SVM)**
- **Decision Trees, Random Forests & XGBoost**
- **K-Means & DBSCAN Clustering**
- **Scikit-Learn Production Pipelines**

---

## Chapter Mini-Project: Mini-Project: Production Scikit-Learn Predictive Pipeline with Artifact Serialization

### Project Objective
Construct a production machine learning pipeline with automated missing data imputation, categorical one-hot encoding, feature scaling, XGBoost classification, cross-validated hyperparameter tuning, and export to ONNX format.

### Deliverables & Verification Checklist
- [ ] **Build unified ColumnTransformer pipeline preventing data leakage across train/test splits**
- [ ] **Perform stratified k-fold cross-validation and optimize F1-score with hyperparameter search**
- [ ] **Analyze feature importance and SHAP values for model explainability**
- [ ] **Serialize pipeline to ONNX and Joblib formats with deterministic inference verification**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Machine Learning Specialization: Supervised Learning
- **Instructor / Channel:** Andrew Ng (DeepLearning.AI)
- **Duration:** 8h 00m
- **Direct Video Link:** [Machine Learning Specialization: Supervised Learning](https://www.youtube.com/watch?v=jGwO_UgTS7I)
- **Overview:** Andrew Ng's seminal foundational curriculum covering linear regression, cost functions, gradient descent, feature scaling, and logistic regression classification.

#### Mastery Checkpoints
- [ ] Formulate mean squared error (MSE) and binary cross-entropy cost functions
- [ ] Implement batch and mini-batch gradient descent with learning rate tuning
- [ ] Apply L1 (Lasso) and L2 (Ridge) regularization to prevent overfitting

### 2. StatQuest: Random Forests and XGBoost Step-by-Step
- **Instructor / Channel:** Josh Starmer (StatQuest with Josh Starmer)
- **Duration:** 1h 30m
- **Direct Video Link:** [StatQuest: Random Forests and XGBoost Step-by-Step](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ)
- **Overview:** Clear step-by-step breakdown of how decision trees split on Gini impurity, how bagging builds Random Forests, and how boosting sequentially minimizes residuals with XGBoost.

#### Mastery Checkpoints
- [ ] Understand decision tree splitting, tree depth, and pruning strategies
- [ ] Implement bagging and out-of-bag validation with Random Forests
- [ ] Explain gradient boosted trees and tune learning rates, tree depth, and subsampling

### 3. Scikit-Learn Production Machine Learning Pipeline
- **Instructor / Channel:** Alex Freberg (Alex The Analyst)
- **Duration:** 1h 15m
- **Direct Video Link:** [Scikit-Learn Production Machine Learning Pipeline](https://www.youtube.com/watch?v=7eh4d6sabA0)
- **Overview:** Building reproducible end-to-end data pipelines with ColumnTransformer, imputer strategies, standard scalers, model cross-validation, and hyperparameter grid search.

#### Mastery Checkpoints
- [ ] Build unified pipelines preventing data leakage across train/validation splits
- [ ] Execute k-fold stratified cross validation and analyze ROC-AUC curves
- [ ] Export model artifacts and inference schemas using joblib and ONNX

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
