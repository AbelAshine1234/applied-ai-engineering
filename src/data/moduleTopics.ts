// Detailed topics and subtitles for all 55 modules
export const MODULE_TOPICS_MAP: { [moduleId: number]: { subtitle: string; topics: string[] } } = {
  1: {
    subtitle: "Python execution internals, memory model, typing, metaprogramming, and validation",
    topics: ["Decorators & Wrappers", "Context Managers", "Generators & Iterators", "Type Hints & Generics", "Pydantic V2 Models", "Pytest Suite"]
  },
  2: {
    subtitle: "Asynchronous programming, event loops, concurrency, task scheduling, and fault tolerance",
    topics: ["AsyncIO & Event Loop", "Concurrent API Clients", "Async Task Queues", "Timeouts & Cancellation", "Exponential Backoff", "Semaphores"]
  },
  3: {
    subtitle: "Vectorized computations, high-performance dataframe pipelines, and memory optimization",
    topics: ["NumPy Vectorization", "Matrix Operations", "Pandas & Polars", "Arrow Memory Model", "Data Transformation", "Profiling"]
  },
  4: {
    subtitle: "Production ASGI architecture, schema validation, dependency injection, and SSE streaming",
    topics: ["FastAPI Routing", "Dependency Injection", "Streaming Responses (SSE)", "Pydantic Schemas", "ASGI Lifespan", "Async Middleware"]
  },
  5: {
    subtitle: "Vector spaces, dot products, matrix decompositions, eigenvalues, and similarity metrics",
    topics: ["Vectors & Dot Products", "Matrix Multiplication", "Cosine Similarity", "Eigenvalues & Eigenvectors", "SVD Decomposition", "Tensors"]
  },
  6: {
    subtitle: "Multivariate calculus, computational gradients, optimization algorithms, and loss surfaces",
    topics: ["Derivatives & Gradients", "Chain Rule & Backprop", "Gradient Descent", "Adam & AdamW", "Loss Surfaces", "Learning Rate Schedulers"]
  },
  7: {
    subtitle: "Probability distributions, Bayes theorem, entropy, sampling, and statistical inference",
    topics: ["Probability Distributions", "Bayesian Inference", "Cross-Entropy & KL Divergence", "Monte Carlo Sampling", "Confidence Intervals", "Variance"]
  },
  8: {
    subtitle: "Classical machine learning algorithms, regularizations, cross-validation, and metrics",
    topics: ["Supervised & Unsupervised", "Regression & Classification", "Clustering (K-Means/DBSCAN)", "Overfitting & Regularization", "ROC-AUC & F1-Score", "Model Packaging"]
  },
  9: {
    subtitle: "Perceptrons, forward propagation, analytical backpropagation, activations, and normalizations",
    topics: ["Perceptron to MLP", "Forward & Backpropagation", "Activation Functions (ReLU/GELU)", "Batch & Layer Normalization", "Vanishing Gradients", "Weight Init"]
  },
  10: {
    subtitle: "PyTorch tensor operations, computational graphs, autograd, dataloaders, and GPU execution",
    topics: ["Autograd Graphs", "Custom nn.Module", "Dataset & DataLoader", "Training Loops", "CUDA Acceleration", "Model Checkpointing"]
  },
  11: {
    subtitle: "Comparative analysis of Convolutional, Recurrent, Attention, and Mixture of Experts networks",
    topics: ["CNN Architectures", "RNN & LSTM / GRU", "Autoencoders & VAEs", "Transformer Fundamentals", "Mixture of Experts (MoE)", "Inductive Biases"]
  },
  12: {
    subtitle: "Byte-Pair Encoding, SentencePiece, vocabulary construction, and tokenization mechanics",
    topics: ["BPE Algorithm", "SentencePiece & WordPiece", "Vocabulary Dictionaries", "Special Tokens & Padding", "Compression Ratio", "Tiktoken"]
  },
  13: {
    subtitle: "Scaled dot-product attention, multi-head attention, rotary embeddings, and transformer blocks",
    topics: ["Self-Attention & QKV", "Multi-Head Attention (MHA)", "RoPE Positional Embeddings", "KV Cache Mechanics", "Residual Streams", "FlashAttention"]
  },
  14: {
    subtitle: "Autoregressive pretraining, instruction tuning, supervised fine-tuning, and alignment loss",
    topics: ["Causal Pretraining", "Instruction Datasets", "Supervised Fine-Tuning (SFT)", "Loss Masking", "Perplexity & Cross-Entropy", "Data Mixing"]
  },
  15: {
    subtitle: "Decoding strategies, KV caching, continuous batching, speculative decoding, and quantization",
    topics: ["Temperature & Top-p/k", "KV Cache Optimization", "Continuous Batching", "Speculative Decoding", "Quantization (INT8/FP4)", "Time to First Token (TTFT)"]
  },
  16: {
    subtitle: "Unified multi-provider client gateways, streaming protocols, token accounting, and fallbacks",
    topics: ["OpenAI & Anthropic APIs", "Gemini Interactions API", "Streaming SSE Clients", "Token Budgeting", "Rate Limit Management", "Provider Fallbacks"]
  },
  17: {
    subtitle: "System instructions, few-shot conditioning, structured schema generation, and prompt caching",
    topics: ["Few-Shot Formatting", "JSON Schema Enforcement", "Context Engineering", "Prompt Caching", "Constrained Decoding", "Injection Prevention"]
  },
  18: {
    subtitle: "Function schema definition, tool execution loops, argument validation, and error recovery",
    topics: ["Tool Definition Schemas", "Model Tool Calling Loop", "Argument Pydantic Validation", "Execution Sandboxing", "Multi-Tool Execution", "Error Handling"]
  },
  19: {
    subtitle: "Production streaming pipelines, WebSocket feeds, resilient retry policies, and cache layers",
    topics: ["Server-Sent Events (SSE)", "WebSockets", "Semantic Caching", "Exponential Backoff", "Circuit Breakers", "Timeout Policies"]
  },
  20: {
    subtitle: "Dense semantic representations, embedding models, dimensional reduction, and similarity search",
    topics: ["Dense Embeddings", "Cosine & Dot Product", "Embedding Models (OpenAI/Voyage)", "Dimensionality Reduction", "Semantic Clustering", "MRL Embeddings"]
  },
  21: {
    subtitle: "Vector indexing architectures, HNSW graphs, IVFFlat, metadata filtering, and CRUD operations",
    topics: ["HNSW & IVFFlat Indexes", "pgvector Operations", "Qdrant Vector DB", "Payload Metadata Filtering", "Vector CRUD & Upserts", "Hybrid Filtering"]
  },
  22: {
    subtitle: "Document ingestion pipelines, semantic chunking, embedding storage, and grounded generation",
    topics: ["Document Parsing", "Chunking Strategies", "Dense Retrieval", "Context Assembly", "Grounded Generation", "Source Attribution"]
  },
  23: {
    subtitle: "Hybrid search, BM25 keyword matching, Reciprocal Rank Fusion, rerankers, and query expansion",
    topics: ["BM25 Sparse Search", "Reciprocal Rank Fusion (RRF)", "Cross-Encoder Rerankers", "Query Expansion & HyDE", "Multi-Query Rewriting", "Context Pruning"]
  },
  24: {
    subtitle: "Agent control loops, environment state, execution lifecycles, and termination boundaries",
    topics: ["Agent State Machine", "Observation-Action Loop", "Tool Invocation Engine", "Termination Conditions", "Step Limits", "Loop Prevention"]
  },
  25: {
    subtitle: "ReAct reasoning loops, multi-step planning, reflection, tree-of-thought, and self-correction",
    topics: ["ReAct (Reason+Act)", "Plan-and-Solve", "Self-Reflection & Critique", "Tree-of-Thoughts", "Dynamic Replanning", "Validation Guards"]
  },
  26: {
    subtitle: "Short-term context memory, persistent episodic memory, semantic memory, and entity stores",
    topics: ["Sliding Window Buffer", "Summary Memory", "Vector-Backed Long Term", "Entity Memory Stores", "State Persistence", "Mem0 Architecture"]
  },
  27: {
    subtitle: "Multi-step agent workflows, human-in-the-loop approvals, checkpoints, and multi-agent systems",
    topics: ["Multi-Agent Routing", "Supervisor & Subagents", "Human Approval Gates", "Time-Travel Checkpoints", "Task Delegation", "Consensus Systems"]
  },
  28: {
    subtitle: "State graph architectures, cyclical execution, conditional branching, and production frameworks",
    topics: ["LangGraph StateGraph", "PydanticAI Framework", "LlamaIndex Workflows", "Graph Reducers", "State Schema Contracts", "Event-Driven Execution"]
  },
  29: {
    subtitle: "Model Context Protocol architecture, client-server protocol, JSON-RPC, tools, and resources",
    topics: ["MCP Specification", "JSON-RPC 2.0 Transport", "Tool Declarations", "Resource Templates", "Prompt Schemas", "Stdio vs SSE"]
  },
  30: {
    subtitle: "Authoring production MCP servers using FastMCP, lifecycle management, and security boundaries",
    topics: ["FastMCP SDK", "Database MCP Server", "Filesystem Server", "Authentication Tokens", "Permission Scopes", "Security Sandboxing"]
  },
  31: {
    subtitle: "Agent-to-agent negotiation, protocol discovery, federated capabilities, and task handoffs",
    topics: ["A2A Communication", "Agent Discovery Registries", "Decentralized Delegation", "Task Negotiation", "Status Synchronization", "Inter-Agent RPC"]
  },
  32: {
    subtitle: "Evaluation benchmarks, golden datasets, LLM-as-judge scoring, and rubric calibration",
    topics: ["Golden Test Datasets", "LLM-as-a-Judge", "Grading Rubrics", "Pairwise Comparison", "G-Eval Framework", "Inter-Rater Reliability"]
  },
  33: {
    subtitle: "RAG triad evaluation, Context Recall, Context Precision, Faithfulness, and Answer Relevance",
    topics: ["RAG Triad Metrics", "Ragas Framework", "TruLens Tracing", "Context Precision@K", "Faithfulness Scoring", "Hallucination Detection"]
  },
  34: {
    subtitle: "Tool selection accuracy, multi-step trajectory evaluation, task success, and recovery rates",
    topics: ["Trajectory Evaluation", "Tool Call Precision", "Task Completion Rate", "Loop Detection Rate", "Failure Recovery Score", "AgentBench"]
  },
  35: {
    subtitle: "Distributed tracing, OpenTelemetry spans, token telemetry, latency tracking, and cost analytics",
    topics: ["OpenTelemetry Spans", "Arize Phoenix", "Langfuse / LangSmith", "Token Cost Telemetry", "Latency Breakdown", "Trace Visualization"]
  },
  36: {
    subtitle: "NVIDIA GPU architecture, CUDA cores, Tensor Cores, VRAM bandwidth, and memory profiling",
    topics: ["GPU Architecture", "CUDA Kernels & Cores", "VRAM & Bandwidth", "KV Cache Sizing", "PyTorch CUDA Memory", "NVIDIA SMI Profiling"]
  },
  37: {
    subtitle: "High-throughput model serving engines, PagedAttention, vLLM, SGLang, and OpenAI compatibility",
    topics: ["vLLM Serving Engine", "PagedAttention", "OpenAI-Compatible Server", "Continuous Batching", "Tensor Parallelism", "Engine Configs"]
  },
  38: {
    subtitle: "Worker pools, queue architectures, batch aggregation, load balancers, and asynchronous pipelines",
    topics: ["RabbitMQ / Redis Queues", "Celery / Celery Workers", "Dynamic Request Batching", "Load Balancing Strategies", "Auto-Scaling Groups", "Worker Health"]
  },
  39: {
    subtitle: "Benchmarking p50/p95/p99 latency, tokens per second, concurrent stress tests, and cost analysis",
    topics: ["Throughput (tokens/sec)", "Latency (p50/p95/p99)", "Time to First Token (TTFT)", "Time Per Output Token (TPOT)", "Locust Load Testing", "Cost Per Million Tokens"]
  },
  40: {
    subtitle: "Dataset curation, formatting, tokenization splits, synthetic data generation, and cleanliness",
    topics: ["Dataset Schemas", "Instruction-Response Pairs", "Synthetic Data Generation", "De-duplication & Cleaning", "Train/Val/Test Splits", "Token Length Budgeting"]
  },
  41: {
    subtitle: "Low-Rank Adaptation (LoRA), Quantized LoRA (QLoRA), rank selection, and parameter-efficient tuning",
    topics: ["LoRA Rank & Alpha", "QLoRA 4-bit Quantization", "PEFT Library", "Unsloth Optimization", "Adapter Weights", "Merging Adapters"]
  },
  42: {
    subtitle: "Evaluating fine-tuned models, catastrophic forgetting detection, task benchmarks, and comparison",
    topics: ["Task Benchmarking", "Catastrophic Forgetting", "Base vs Fine-Tuned Eval", "Perplexity Checks", "Human Preference Evals", "Model Deployment"]
  },
  43: {
    subtitle: "Multimodal models, visual tokenization, document OCR extraction, and visual reasoning",
    topics: ["Vision Encoders (CLIP)", "Visual Question Answering", "Document Parsing & Tables", "ColPali Multi-Vector", "Image Patch Tokenization", "Bounding Box Detection"]
  },
  44: {
    subtitle: "Audio feature representation, Whisper speech-to-text, neural text-to-speech, and audio DSP",
    topics: ["Mel-Spectrograms", "Whisper STT Model", "FastSpeech / VITS TTS", "Audio Sampling & Streaming", "Voice Cloning Mechanics", "Audio Chunking"]
  },
  45: {
    subtitle: "Ultra-low latency audio pipelines, WebRTC transport, voice activity detection, and interruptions",
    topics: ["WebRTC & LiveKit", "Silero VAD (Voice Detection)", "Streaming Audio Transports", "Interruption Handling", "Turn-Taking Models", "Sub-500ms Pipelines"]
  },
  46: {
    subtitle: "Prompt injection attacks, jailbreaks, data exfiltration, indirect injection, and defenses",
    topics: ["Direct & Indirect Injection", "Jailbreak Patterns", "System Prompt Leakage", "Insecure Output Handling", "Dual-LLM Architecture", "Sandboxed Execution"]
  },
  47: {
    subtitle: "Semantic guardrails, content moderation, validation filters, retries, and output determinism",
    topics: ["Guardrails AI & NeMo", "Llama Guard Moderation", "Regex & JSON Validation", "Fallback Policies", "Deterministic Sampling", "Hallucination Bounding"]
  },
  48: {
    subtitle: "Entity extraction, relationship extraction, property graphs, and Neo4j Cypher querying",
    topics: ["Entity & Relation Extraction", "Neo4j Graph Database", "Cypher Query Language", "Graph Traversal", "Graph Schema Modeling", "Ontologies"]
  },
  49: {
    subtitle: "Graph-enhanced retrieval, community summaries, hybrid vector-graph search, and global reasoning",
    topics: ["Microsoft GraphRAG", "Hierarchical Communities", "Community Summaries", "Local vs Global Search", "Hybrid Vector-Graph", "Complex Question Answering"]
  },
  50: {
    subtitle: "Markov Decision Processes, state-action-reward loops, policy gradients, and Q-learning",
    topics: ["MDP Foundations", "Policy & Value Functions", "Q-Learning Algorithm", "Exploration vs Exploitation", "Bellman Equations", "Reward Modeling"]
  },
  51: {
    subtitle: "Reinforcement Learning from Human Feedback (RLHF), Direct Preference Optimization (DPO), and GRPO",
    topics: ["RLHF & PPO Pipeline", "Reward Model Training", "Direct Preference Optimization (DPO)", "Group Relative Policy Optimization (GRPO)", "KL Penalty", "Pairwise Preference Data"]
  },
  52: {
    subtitle: "Chain of thought, test-time compute, reasoning models, verification steps, and search algorithms",
    topics: ["Chain of Thought (CoT)", "Test-Time Compute", "Process Reward Models (PRM)", "Monte Carlo Tree Search (MCTS)", "Inference Verification", "Reasoning Traces"]
  },
  53: {
    subtitle: "End-to-end architecture design for scalable AI backends, caching, latency budgets, and resilience",
    topics: ["System Design Blueprints", "Latency Budget Allocation", "Multi-Tier Caching", "Stateless Inference Scalability", "Failure Domain Isolation", "Cost Modeling"]
  },
  54: {
    subtitle: "Translating business requirements into AI products, SLA definitions, ROI, and product telemetry",
    topics: ["Problem-Solution Mapping", "SLA & SLO Definitions", "Business Impact Metrics", "Product Telemetry", "User Feedback Loops", "Feature Rollouts"]
  },
  55: {
    subtitle: "Production readiness checklists, monitoring, runbooks, security audits, and operational procedures",
    topics: ["Production Checklists", "Prometheus & Grafana Alerts", "Runbooks & Disaster Recovery", "Security Hardening", "Automated Rollbacks", "Operational Handoff"]
  }
};
