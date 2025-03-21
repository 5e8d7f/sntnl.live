import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
      disabled: true,
    },
    {
      title: "Support Server",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          icon: "scrollText",
          title: "Notifications",
          href: "/notifications",
        },
        {
          icon: "gem",
          title: "Subscription",
          href: "/subscription",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          icon: "fingerprint",
          title: "Verification",
          href: "/verification",
        },
        {
          icon: "messageWarning",
          title: "Overseer",
          href: "/overseer",
        },
      ]
    }
  ],
}
