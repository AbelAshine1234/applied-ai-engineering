import rawData from "./curriculum.json";
import {
  ModuleData,
  PhaseData,
  PortfolioProject,
  RawLearningContractItem,
  RawPhase,
  RawPortfolioProject,
} from "../types/curriculum";

export const CONTRACT_STEPS: RawLearningContractItem[] = rawData.learning_contract;

const DEFAULT_CHECKLIST = CONTRACT_STEPS.map((s) => `${s.title}: ${s.desc}`);

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

export const CURRICULUM = {
  phases: (rawData.phases as RawPhase[]).map((p): PhaseData => {
    const isPriority = p.priority.toLowerCase().includes("high") || p.priority.toLowerCase().includes("immediate");
    return {
      id: p.phase_num,
      phaseId: p.phase_id,
      name: `Phase ${p.phase_num}: ${p.title}`,
      badge: p.badge,
      priority: p.priority,
      modules: p.modules.map((m): ModuleData => ({
        id: m.num,
        slug: m.folder,
        phaseNum: p.phase_num,
        phaseTitle: `Phase ${p.phase_num}: ${p.title}`,
        title: m.title,
        tasks: m.tasks,
        deliverable: m.deliverable,
        hours: m.hours,
        videos: m.videos || [],
        checklist: DEFAULT_CHECKLIST,
        claudePrompt: `Review my implementation of Module ${m.num} (${m.title}) for production Applied AI Engineering readiness.\n\nRequired Deliverable: ${m.deliverable}\nTasks to verify: ${m.tasks}\n\nPlease evaluate:\n1. Architecture, memory footprint, and runtime latency\n2. Edge cases, failure recovery, and pytest coverage\n3. Production best practices and zero AI-slop code quality\n4. Benchmark metrics and trade-offs`,
        priorityTrack: isPriority,
      })),
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
