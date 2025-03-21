import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Sentinel",
  description:
  "Sentinel is a bot that uses modern technology and privacy-independent algorithms to safeguard Discord servers.",
  url: site_url,
  ogImage: `/logo.png`,
  links: {
    discord: "https://discord.com/users/345462882902867969",
    github: "https://github.com/rxnk",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Product",
    items: [
      { title: "Invite", href: "/invite" },
      { title: "Support Server", href: "/support" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms & Conditions", href: "/terns" },
    ],
  },
];
