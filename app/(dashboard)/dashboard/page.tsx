import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Dashboard",
  description: "An overview of your server configuration."
})

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    // server selector
    <DashboardShell className="">
      <DashboardHeader heading="Dashboard" text="Select a server to manage" />
      <EmptyPlaceholder>
        <EmptyPlaceholder.Title>No server selected</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          Select a server to view more details
        </EmptyPlaceholder.Description>
      </EmptyPlaceholder>
    </DashboardShell>
  )
}
