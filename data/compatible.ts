export interface PluginItem {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: "cart" | "heart" | "calendar" | "mail" | "layers" | "compass" | "search" | "more";
}

export const COMPATIBLE_PLUGINS: PluginItem[] = [
  {
    id: "plugin-woocommerce",
    name: "WooCommerce",
    description: "Add an online store, accept donations, or sell merchandise directly from your WordPress site.",
    url: "https://wordpress.org/plugins/woocommerce/",
    icon: "cart",
  },
  {
    id: "plugin-giftflow",
    name: "GiftFlow – Donation & Fundraising",
    description: "Purpose-built donation forms and fundraising campaigns for nonprofit and charity organizations.",
    url: "https://wordpress.org/plugins/giftflow/",
    icon: "heart",
  },
  {
    id: "plugin-events-calendar",
    name: "The Events Calendar",
    description: "Publish and manage community events, campaigns, and volunteer schedules with ease.",
    url: "https://wordpress.org/plugins/the-events-calendar/",
    icon: "calendar",
  },
  {
    id: "plugin-newsletter",
    name: "Newsletter",
    description: "Build and send email campaigns directly from WordPress to keep supporters informed.",
    url: "https://wordpress.org/plugins/newsletter/",
    icon: "mail",
  },
  {
    id: "plugin-elementor",
    name: "Elementor Website Builder",
    description: "Extend layouts visually with drag-and-drop page building alongside Gutenberg blocks.",
    url: "https://wordpress.org/plugins/elementor/",
    icon: "layers",
  },
  {
    id: "plugin-beplus-nav",
    name: "Beplus Visual Mega Navigation",
    description: "Build feature-rich mega menus that integrate cleanly with AlonePro's header.",
    url: "https://beplusthemes.com/",
    icon: "compass",
  },
  {
    id: "plugin-seo",
    name: "Yoast SEO & Rank Math SEO",
    description: "Full compatibility with both leading SEO suites for optimized search visibility.",
    url: "https://wordpress.org/plugins/wordpress-seo/",
    icon: "search",
  },
  {
    id: "plugin-more",
    name: "And much more",
    description: "Standard WordPress hooks, template filters, and clean code ensure compatibility with your custom stack.",
    url: "https://wordpress.org/plugins/",
    icon: "more",
  },
];
