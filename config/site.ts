import { NavItem } from "../types/nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "FlowchartAI",
  description: "Draw diagram with nature language.",
  mainNav: [
    // {
    //   title: "Credentials",
    //   href: "/credentials",
    // },
  ],
  links: {
    twitter: "https://twitter.com/debanjan-nit",
    github: "https://github.com/RickDeb2004/FlowchartAI",
  },
};
