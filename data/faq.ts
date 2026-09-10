export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-requirements",
    question: "What do I need before installing AlonePro?",
    answer:
      "Use WordPress 6.4 or newer and PHP 8.1 or newer. AlonePro is a child theme, so the free Nextora parent theme must also be installed on your site.",
  },
  {
    id: "faq-installation",
    question: "How do I install and activate the theme?",
    answer:
      "Install Nextora first, then upload and install AlonePro from Appearance → Themes. Activate AlonePro—not Nextora—so its charity blocks, style variations, and patterns are available in the editor.",
  },
  {
    id: "faq-editing",
    question: "Where do I customize my website?",
    answer:
      "AlonePro uses Full Site Editing. Open Appearance → Editor to customize styles, templates, headers, footers, and page layouts with Gutenberg blocks; there is no legacy Customizer workflow.",
  },
  {
    id: "faq-license",
    question: "What does license activation unlock?",
    answer:
      "The core AlonePro blocks remain functional without activation. An active license unlocks AlonePro Cloud Templates, one-click dashboard updates, and dedicated priority ticket support.",
  },
  {
    id: "faq-template-imports",
    question: "Can I import a complete design or just one section?",
    answer:
      "Yes. Import full page templates from Nextora Addon → Templates, or insert a selected section directly into a page or post from the Cloud Templates control in the Gutenberg editor. AlonePro-exclusive templates require an active license.",
  },
  {
    id: "faq-style-variations",
    question: "Can I change the site’s colors and typography?",
    answer:
      "AlonePro includes 13 curated style variations. Choose one from Styles → Browse styles in the Site Editor to update the global palette, type pairing, backgrounds, and surfaces, then save your selection.",
  },
  {
    id: "faq-plugins",
    question: "Are donation, event, and form plugins included?",
    answer:
      "No third-party plugins are bundled or force-installed. You can choose the donation, fundraising, events, or forms solution that fits your organization and place its Gutenberg blocks or shortcodes inside AlonePro layouts.",
  },
];
