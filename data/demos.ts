import demosData from "./demos.json";

export interface DemoItem {
  id: string;
  title: string;
  description: string;
  searchCategories: string;
  image?: string;
  isPlaceholder?: boolean;
  linkText: string;
  url: string;
}

export const DEMOS_DATA: DemoItem[] = demosData as DemoItem[];
