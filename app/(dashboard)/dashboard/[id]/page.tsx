import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export const metadata = constructMetadata({
    title: "Dashboard",
    description: "An overview of your server configuration."
})

export default async function DashboardPage({ params }: {params: {id: string;}}) {
    const id = params.id
    const user = await getCurrentUser()

    if (!user) {
        redirect("/login")
    }

    return (
        <DashboardShell>
            <DashboardHeader heading="Dashboard" text="An overview of your server configuration." />
            <EmptyPlaceholder>
                <EmptyPlaceholder.Title>{id}</EmptyPlaceholder.Title>
            </EmptyPlaceholder>
        </DashboardShell>
    )
}