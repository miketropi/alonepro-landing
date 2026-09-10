export interface CapabilityItem {
  num: string;
  title: string;
  description: string;
}

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    num: "01",
    title: "Block-based layouts",
    description: "Build pages from flexible content sections that remain understandable and editable.",
  },
  {
    num: "02",
    title: "Reusable patterns",
    description: "Start from repeatable AlonePro sections created around nonprofit communication.",
  },
  {
    num: "03",
    title: "Global styles",
    description: "Keep typography, colors, and spacing consistent across the website.",
  },
  {
    num: "04",
    title: "Content-first editing",
    description: "Shape mission pages, campaigns, stories, and updates around the content itself.",
  },
  {
    num: "05",
    title: "Responsive foundations",
    description: "Work from layouts designed to adapt naturally as screens and content change.",
  },
];

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
  isLast?: boolean;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { num: "01", title: "Choose" },
  { num: "02", title: "Combine" },
  { num: "03", title: "Customize" },
  { num: "04", title: "Publish", isLast: true },
];

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
