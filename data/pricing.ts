export interface PricingPlan {
  id: string;
  kicker: string;
  headline: string;
  annualPrice: number;
  lifetimePrice: number;
  annualGiftFlowSaving: number;
  lifetimeGiftFlowSaving: number;
  pricingId: string;
  isPrimary?: boolean;
  features: string[];
  ctaText: string;
  targetId: string;
}

export const PRICING_DATA: PricingPlan[] = [
  {
    id: "price-single-site",
    kicker: "Single Site",
    headline: "For one nonprofit or organization website.",
    annualPrice: 69,
    lifetimePrice: 199,
    annualGiftFlowSaving: 191.88,
    lifetimeGiftFlowSaving: 579.99,
    pricingId: "73588",
    features: [
      "AlonePro Theme",
      "Demo Designs",
      "Gutenberg Patterns",
      "Theme Updates",
      "Documentation",
      "1 Website License",
    ],
    ctaText: "Get Single Site",
    targetId: "#purchase-note",
  },
  {
    id: "price-five-sites",
    kicker: "5 Sites",
    headline: "For freelancers and organizations managing a small portfolio.",
    annualPrice: 149,
    lifetimePrice: 399,
    annualGiftFlowSaving: 191.88,
    lifetimeGiftFlowSaving: 579.99,
    pricingId: "73589",
    isPrimary: true,
    features: [
      "AlonePro Theme",
      "Demo Designs",
      "Gutenberg Patterns",
      "Theme Updates",
      "Documentation",
      "5 Website Licenses",
    ],
    ctaText: "Get 5 Sites",
    targetId: "#purchase-note",
  },
  {
    id: "price-fifty-sites",
    kicker: "50 Sites",
    headline: "For studios and teams delivering websites at scale.",
    annualPrice: 299,
    lifetimePrice: 799,
    annualGiftFlowSaving: 191.88,
    lifetimeGiftFlowSaving: 579.99,
    pricingId: "73590",
    features: [
      "AlonePro Theme",
      "Demo Designs",
      "Gutenberg Patterns",
      "Theme Updates",
      "Documentation",
      "50 Website Licenses",
    ],
    ctaText: "Get 50 Sites",
    targetId: "#purchase-note",
  },
];
