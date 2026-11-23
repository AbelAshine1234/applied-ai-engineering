# 13. Voice AI & Real-Time Audio

> **Track:** Applied AI Engineering | **Module:** 13 | **Estimated Duration:** 22 Hours | **Domain:** Multimodal

## Module Overview

Build ultra-low-latency real-time voice agents: OpenAI Whisper streaming STT, Silero VAD (Voice Activity Detection), modern TTS models (XTTS, Kokoro), and WebRTC with LiveKit.

---

## Core Competencies & Skills

- **Real-Time Speech-to-Text (Whisper, faster-whisper)**
- **Voice Activity Detection (Silero VAD)**
- **Text-to-Speech & Neural Vocoders**
- **WebRTC & LiveKit Voice Agent Pipelines**
- **End-to-End Latency Optimization (<500ms)**

---

## Chapter Mini-Project: Mini-Project: Sub-500ms Conversational Voice Bot with LiveKit & WebRTC

### Project Objective
Develop an end-to-end conversational voice agent using WebRTC, Silero VAD for speech interruption, faster-whisper for streaming transcription, Groq/OpenAI for fast completions, and Kokoro/Cartesia for streaming audio synthesis.

### Deliverables & Verification Checklist
- [ ] **Establish bidirectional WebRTC audio track streaming via LiveKit Agents**
- [ ] **Implement low-latency Silero VAD detecting speech boundaries and user barge-in**
- [ ] **Stream LLM token sentences into chunked neural audio synthesis**
- [ ] **Benchmark and optimize end-to-end roundtrip voice latency under 500ms**

---

## Curated Video Lectures & Code Walkthroughs

### 1. OpenAI Whisper Architecture & Streaming Transcription
- **Instructor / Channel:** AssemblyAI (AssemblyAI)
- **Duration:** 35m
- **Direct Video Link:** [OpenAI Whisper Architecture & Streaming Transcription](https://www.youtube.com/watch?v=ocP1g1aR9a0)
- **Overview:** Technical breakdown of OpenAI Whisper: log-Mel spectrogram preprocessing, sequence-to-sequence Transformer architecture, and faster-whisper CTranslate2 optimization.

#### Mastery Checkpoints
- [ ] Convert raw PCM audio streams into log-Mel spectrogram feature vectors
- [ ] Deploy faster-whisper with INT8 quantization for sub-second chunk decoding
- [ ] Implement sliding-window audio buffer handling for continuous streaming speech

### 2. Building Real-Time Voice Agents with LiveKit and WebRTC
- **Instructor / Channel:** David Zhao (LiveKit)
- **Duration:** 45m
- **Direct Video Link:** [Building Real-Time Voice Agents with LiveKit and WebRTC](https://www.youtube.com/watch?v=3Z8k1xY7r4E)
- **Overview:** How to architect sub-500ms real-time conversational voice agents using LiveKit Agents framework, WebRTC audio tracks, Silero VAD, and streaming LLM token generation.

#### Mastery Checkpoints
- [ ] Configure LiveKit room audio tracks and WebRTC client connections
- [ ] Integrate Silero VAD for low-latency speech interruption and turn-taking
- [ ] Pipe LLM token streams directly into sentence-boundary streaming TTS synthesizers

### 3. Modern Text-to-Speech (TTS): How FastSpeech, XTTS and Kokoro Work
- **Instructor / Channel:** Neural Audio Lab (DeepLearning.AI)
- **Duration:** 40m
- **Direct Video Link:** [Modern Text-to-Speech (TTS): How FastSpeech, XTTS and Kokoro Work](https://www.youtube.com/watch?v=4m6k2wY8q3A)
- **Overview:** Architecture of state-of-the-art neural speech synthesis: acoustic models, mel-spectrogram generation, duration predictors, neural vocoders (HiFi-GAN), and voice cloning.

#### Mastery Checkpoints
- [ ] Understand acoustic models and HiFi-GAN neural vocoder waveform synthesis
- [ ] Deploy lightweight open-source TTS models (Kokoro-82M, XTTS) locally
- [ ] Stream synthesized audio chunks over WebSockets to client speakers

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
