import workflowSteps from "./workflow-steps.json";

export const PATTERN_TAGS: string[] = [
  "Hero",
  "Donation campaigns",
  "Causes",
  "Impact statistics",
  "Mission",
  "About",
  "Stories",
  "Testimonials",
  "Volunteers",
  "Events",
  "Team",
  "Partners",
  "Newsletter",
  "Donation CTA",
  "Contact",
  "Footer",
];

export interface WorkflowStep {
  num: string;
  title: string;
  description: string;
  gif: string;
  poster: string;
  alt: string;
  isLast?: boolean;
}

export const WORKFLOW_STEPS: WorkflowStep[] = workflowSteps;

export interface PrincipleItem {
  title: string;
  description: string;
}

export const PRINCIPLES_DATA: PrincipleItem[] = [
  {
    title: "Responsive layouts",
    description: "Content structures adapt across screen sizes.",
  },
  {
    title: "Clean markup",
    description: "A focused foundation for real website content.",
  },
  {
    title: "Optimized assets",
    description: "Media and theme assets are handled with care.",
  },
  {
    title: "Lightweight interactions",
    description: "Motion supports orientation rather than spectacle.",
  },
  {
    title: "Consistent spacing",
    description: "Predictable rhythm keeps pages easy to scan.",
  },
  {
    title: "Accessible hierarchy",
    description: "Clear headings help people navigate content.",
  },
  {
    title: "Mobile-friendly navigation",
    description: "Important routes remain usable on smaller screens.",
  },
  {
    title: "Performance-conscious",
    description: "Implementation choices favor focused experiences.",
  },
];
