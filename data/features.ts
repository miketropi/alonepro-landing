export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "blocks" | "panels" | "palette" | "monitor" | "zap" | "columns" | "heart" | "sliders";
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "feature-native-gutenberg",
    title: "Native Gutenberg",
    description: "Build and edit content through WordPress’s native block workflow.",
    icon: "blocks",
  },
  {
    id: "feature-ready-patterns",
    title: "Ready-made Patterns",
    description: "Reuse sections designed around nonprofit content, campaigns, and storytelling.",
    icon: "panels",
  },
  {
    id: "feature-global-styles",
    title: "Global Styles",
    description: "Manage typography, color, spacing, and visual identity consistently.",
    icon: "palette",
  },
  {
    id: "feature-responsive",
    title: "Responsive by Design",
    description: "Use layouts designed to adapt naturally across screen sizes.",
    icon: "monitor",
  },
  {
    id: "feature-lightweight",
    title: "Lightweight Architecture",
    description: "A focused theme foundation designed for efficient website experiences.",
    icon: "zap",
  },
  {
    id: "feature-flexible-layouts",
    title: "Flexible Layouts",
    description: "Arrange and customize sections according to each organization’s needs.",
    icon: "columns",
  },
  {
    id: "feature-donation-focus",
    title: "Donation-focused Design",
    description: "Structure content around causes, impact stories, campaigns, and calls to action.",
    icon: "heart",
  },
  {
    id: "feature-customization",
    title: "Easy Customization",
    description: "Adjust content, imagery, typography, colors, and layout structures.",
    icon: "sliders",
  },
];
