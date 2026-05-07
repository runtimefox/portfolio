export const TABS = {
  Home: 'Home',
  About: 'About',
  Skills: 'Skills',
  Projects: 'Projects',
  Contact: 'Contact',
} as const;

export type Tabs = (typeof TABS)[keyof typeof TABS];
