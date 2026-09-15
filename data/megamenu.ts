export interface MegaMenuSegment {
  id: string;
  num: string;
  title: string;
  description: string;
  startTime: number;
  endTime: number;
  timeRange: string;
}

export const MEGAMENU_VIDEO_URL =
  "https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/alonepro/Landing%20Assets/%5Balonepro%5D%20%20megamenu%20-%20edited.mp4";

export const MEGAMENU_SEGMENTS: MegaMenuSegment[] = [
  {
    id: "frontend-preview",
    num: "01",
    title: "Frontend MegaMenu Preview",
    description: "Multi-column navigation with direct donation shortcuts.",
    startTime: 0,
    endTime: 7,
    timeRange: "0:00 – 0:07",
  },
  {
    id: "backend-editor",
    num: "02",
    title: "Native Gutenberg Editor",
    description: "Arrange columns and blocks directly in WordPress admin.",
    startTime: 7,
    endTime: 13,
    timeRange: "0:07 – 0:13",
  },
  {
    id: "import-template",
    num: "03",
    title: "1-Click Template Import",
    description: "Import prebuilt nonprofit layouts and save instantly.",
    startTime: 13,
    endTime: 23,
    timeRange: "0:13 – 0:23",
  },
  {
    id: "live-preview",
    num: "04",
    title: "Live Frontend Verification",
    description: "Preview responsive, accessible navigation on your live site.",
    startTime: 23,
    endTime: 34.26,
    timeRange: "0:23 – 0:34",
  },
];

export const MEGAMENU_NOTICE = {
  badge: "Notice",
  title: "The AlonePro Difference",
  message:
    "Visual mega navigation is fully native to AlonePro—delivering fast Gutenberg performance, flexible campaign layouts, and donation flows with zero page-builder bloat.",
};
