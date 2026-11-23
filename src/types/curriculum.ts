export interface VideoItem {
  title: string;
  instructor?: string;
  channel?: string;
  youtube_id: string;
  duration?: string;
}

export interface RawModule {
  num: number;
  folder: string;
  title: string;
  tasks: string;
  deliverable: string;
  hours: number;
  videos: VideoItem[];
}

export interface RawPhase {
  phase_num: number;
  phase_id: string;
  title: string;
  badge: string;
  icon?: string;
  priority: string;
  modules: RawModule[];
}

export interface RawPortfolioProject {
  id: string;
  number: number;
  title: string;
  badge: string;
  modules_combined: string;
  hours: number;
  image_url: string;
  ref_link: string;
  features: string[];
}

export interface RawLearningContractItem {
  key: string;
  title: string;
  desc: string;
}

export interface ContractStepDetail {
  step: number;
  title: string;
  subtitle: string;
  topics?: string[];
  instruction: string;
}

export interface ModuleData {
  id: number;
  slug: string;
  phaseNum: number;
  phaseTitle: string;
  title: string;
  subtitle: string;
  topics: string[];
  tasks: string;
  deliverable: string;
  hours: number;
  videos: VideoItem[];
  checklistSteps: ContractStepDetail[];
  claudePrompt: string;
  priorityTrack: boolean;
}

export interface PhaseData {
  id: number;
  phaseId: string;
  name: string;
  badge: string;
  priority: string;
  modules: ModuleData[];
}

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  badge: string;
  mappedModules: string;
  hours: number;
  features: string[];
  refLink: string;
}
