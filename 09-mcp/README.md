# 09. Model Context Protocol (MCP)

> **Track:** Applied AI Engineering | **Module:** 09 | **Estimated Duration:** 20 Hours | **Domain:** Standard Protocol

## Module Overview

Master Anthropic's Model Context Protocol (MCP) to standardize how AI models securely connect to enterprise data sources, local desktop tools, databases, and APIs.

---

## Core Competencies & Skills

- **MCP Client-Server Architecture**
- **Standard Transports (stdio, SSE)**
- **Tools, Resources & Prompts Primitives**
- **Building MCP Servers (TypeScript & Python)**
- **Connecting MCP to Cursor, Claude & Custom Agents**

---

## Chapter Mini-Project: Mini-Project: Production SQLite & Host Metrics FastMCP Server for Claude Desktop

### Project Objective
Build a production-ready FastMCP server in Python exposing sandboxed SQL querying, file system diffing, and host CPU/RAM diagnostic tools, connected and verified live in Claude Desktop and Cursor.

### Deliverables & Verification Checklist
- [ ] **Implement FastMCP server with typed parameters, descriptions, and error handling**
- [ ] **Expose MCP Resources for database schemas and system metric telemetry logs**
- [ ] **Define parameterized Prompts for automated performance diagnostic reviews**
- [ ] **Configure claude_desktop_config.json and verify end-to-end tool execution**

---

## Curated Video Lectures & Code Walkthroughs

### 1. Introduction to Model Context Protocol (MCP): Architecture & Concepts
- **Instructor / Channel:** Anthropic Engineering (Anthropic)
- **Duration:** 45m
- **Direct Video Link:** [Introduction to Model Context Protocol (MCP): Architecture & Concepts](https://www.youtube.com/watch?v=rbtQ_E5L68A)
- **Overview:** Anthropic's official technical introduction to the Model Context Protocol, explaining the universal open standard connecting AI models to context and tools.

#### Mastery Checkpoints
- [ ] Understand MCP client, host, and server roles and responsibilities
- [ ] Explain stdio (local process) vs SSE (Server-Sent Events) network transports
- [ ] Define the three core MCP primitives: Resources, Tools, and Prompts

### 2. Build Your First MCP Server in Python with FastMCP
- **Instructor / Channel:** Alex Albert (Anthropic Developers)
- **Duration:** 35m
- **Direct Video Link:** [Build Your First MCP Server in Python with FastMCP](https://www.youtube.com/watch?v=9h4Q3x4k9E8)
- **Overview:** Hands-on guide to building a production Python MCP server using the FastMCP framework, exposing database queries, file systems, and API endpoints.

#### Mastery Checkpoints
- [ ] Install the Python MCP SDK and initialize a FastMCP server instance
- [ ] Expose typed tools with Pydantic parameter schemas and docstrings
- [ ] Publish dynamic resources and prompt templates for client consumers

### 3. Connecting MCP to Production Agent Workflows & Desktop Tools
- **Instructor / Channel:** IndyDevDan (IndyDevDan)
- **Duration:** 40m
- **Direct Video Link:** [Connecting MCP to Production Agent Workflows & Desktop Tools](https://www.youtube.com/watch?v=9gq6yWlYn0A)
- **Overview:** Practical implementation connecting custom MCP servers to Claude Desktop, Cursor IDE, and custom LangGraph / LangChain Python agents.

#### Mastery Checkpoints
- [ ] Configure claude_desktop_config.json with custom MCP servers
- [ ] Build a custom client adapter in Python consuming MCP stdio servers
- [ ] Execute secured tool invocations with strict permission sandboxing

---

## Hands-On Coding Exercises & Lab Objectives

1. **Implement Core Lecture Concepts:** Replicate the code from the curated video walkthroughs in this module directory.
2. **Execute the Chapter Mini-Project:** Complete all deliverables specified in the Chapter Mini-Project above.
3. **Deterministic Verification:** Ensure all test cases pass without mock data or shortcuts.
4. **Architecture Review:** Document latency, memory footprint, and scaling considerations for this subsystem.

---

*Part of the [Applied AI Engineering Curriculum](../README.md). Track your progress in the [Interactive Progress Web App](../index.html).*
