import rawData from "./curriculum.json";
import { MODULE_TOPICS_MAP } from "./moduleTopics";
import {
  ContractStepDetail,
  ModuleData,
  PhaseData,
  PortfolioProject,
  RawLearningContractItem,
  RawPhase,
  RawPortfolioProject,
} from "../types/curriculum";

export const CONTRACT_STEPS: RawLearningContractItem[] = rawData.learning_contract;

export const ALL_PROJECTS: PortfolioProject[] = (rawData.portfolio_projects as RawPortfolioProject[]).map((p) => ({
  id: p.number,
  slug: p.id,
  title: p.title,
  badge: p.badge,
  mappedModules: p.modules_combined,
  hours: p.hours,
  features: p.features,
  refLink: p.ref_link,
}));

export function generateModuleChecklist(
  num: number,
  title: string,
  folder: string,
  tasks: string,
  deliverable: string,
  topics: string[]
): ContractStepDetail[] {
  const topicsStr = topics.length > 0 ? topics.join(", ") : tasks;
  return [
    {
      step: 1,
      title: "Concepts & Theoretical Foundations",
      subtitle: `Master underlying theory and mechanisms: ${topicsStr}`,
      topics: topics,
      instruction: `Watch the curated lecture and document core architectural notes covering: ${topicsStr}.`,
    },
    {
      step: 2,
      title: "Guided First-Principles Implementation",
      subtitle: `Build a zero-dependency baseline implementing ${title} primitives`,
      instruction: `Implement the foundational mathematical or algorithmic logic from scratch before using production libraries.`,
    },
    {
      step: 3,
      title: "Independent Technical Implementation",
      subtitle: tasks,
      instruction: `Implement all functional tasks: ${tasks}`,
    },
    {
      step: 4,
      title: "Production Module Deliverable",
      subtitle: `Build and package required deliverable: "${deliverable}"`,
      instruction: `Package the code into applied-ai-engineering/${folder}/ with entry points and configuration.`,
    },
    {
      step: 5,
      title: "Pytest Suite & Boundary Testing",
      subtitle: "Author unit tests covering edge cases, failure recovery, and boundary limits",
      instruction: "Write test assertions for positive paths, invalid inputs, and error states with passing pytest runs.",
    },
    {
      step: 6,
      title: "Technical Explanation & Benchmarks",
      subtitle: "Document architecture diagrams, memory footprint, and p95/p99 latency",
      instruction: "Record benchmarks, trade-offs, and architecture diagrams in README.md.",
    },
    {
      step: 7,
      title: "Public Progress & Repository Commit",
      subtitle: "Commit and push clean code to GitHub repository",
      instruction: `Push verified code and documentation to applied-ai-engineering/${folder} on GitHub.`,
    },
    {
      step: 8,
      title: "Claude Code Architecture Review",
      subtitle: "Run the structured review prompt in Claude Code and refactor findings",
      instruction: "Submit implementation to Claude Code for production readiness critique and address findings.",
    },
    {
      step: 9,
      title: "Deliverable Sign-Off Assessment",
      subtitle: `Complete practical validation and test verification for "${deliverable}"`,
      instruction: `Validate all acceptance criteria for ${deliverable} before advancing to the next module.`,
    },
  ];
}

export const CURRICULUM = {
  phases: (rawData.phases as RawPhase[]).map((p): PhaseData => {
    const isPriority = p.priority.toLowerCase().includes("high") || p.priority.toLowerCase().includes("immediate");
    return {
      id: p.phase_num,
      phaseId: p.phase_id,
      name: `Phase ${p.phase_num}: ${p.title}`,
      badge: p.badge,
      priority: p.priority,
      modules: p.modules.map((m): ModuleData => {
        const extra = MODULE_TOPICS_MAP[m.num] || {
          subtitle: m.tasks,
          topics: [m.deliverable],
        };

        const checklistSteps = generateModuleChecklist(
          m.num,
          m.title,
          m.folder,
          m.tasks,
          m.deliverable,
          extra.topics
        );

        return {
          id: m.num,
          slug: m.folder,
          phaseNum: p.phase_num,
          phaseTitle: `Phase ${p.phase_num}: ${p.title}`,
          title: m.title,
          subtitle: extra.subtitle,
          topics: extra.topics,
          tasks: m.tasks,
          deliverable: m.deliverable,
          hours: m.hours,
          videos: m.videos || [],
          checklistSteps,
          claudePrompt: `Review my implementation of Module ${m.num} (${m.title}) for production Applied AI Engineering readiness.\n\nRequired Deliverable: ${m.deliverable}\nTasks to verify: ${m.tasks}\nCore Topics: ${extra.topics.join(", ")}\n\nPlease evaluate:\n1. Architecture, memory footprint, and runtime latency\n2. Edge cases, failure recovery, and pytest coverage\n3. Production best practices and zero AI-slop code quality\n4. Benchmark metrics and trade-offs`,
          priorityTrack: isPriority,
        };
      }),
    };
  }),
  portfolioProjects: ALL_PROJECTS,
};

export const ALL_MODULES: ModuleData[] = CURRICULUM.phases.flatMap((p) => p.modules);

export function getAdjacentModules(currentId: number): { prev: ModuleData | null; next: ModuleData | null } {
  const currentIndex = ALL_MODULES.findIndex((m) => m.id === currentId);
  return {
    prev: currentIndex > 0 ? ALL_MODULES[currentIndex - 1] : null,
    next: currentIndex < ALL_MODULES.length - 1 ? ALL_MODULES[currentIndex + 1] : null,
  };
}
