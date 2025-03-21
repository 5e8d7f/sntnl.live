import { Command } from "lucide-react";

import { SidebarNav } from "types";
import { getCurrentUser } from "@/lib/session";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import SectionItem from "./dashboard/section";

interface DashboardNavProps {
  items: SidebarNav[];
  disabled?: boolean;
}

interface Server {
  id: string;
  name: string;
  iconUrl: string;
}

const servers: Server[] = [
  {
    id: "1244460949436502047",
    name: "Sentinel",
    iconUrl:
      "https://cdn.discordapp.com/icons/1244460949436502047/2639792808ec9df23c3f6876f3b66c17.webp",
  },
  {
    id: "721627270527188995",
    name: "bleed",
    iconUrl:
      "https://cdn.discordapp.com/icons/721627270527188995/33cbe439aa95e01bc56e36240be943fb.webp",
  },
];
export async function DashboardNav({ items, disabled }: DashboardNavProps) {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  if (!items?.length) {
    return null;
  }

  return (
    <>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <Command />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid items-start gap-2">
              {items.map((section, index) => (
                <div key={index} className="grid gap-2">
                  <h3 className="text-md font-semibold text-muted-foreground">
                    {section.title}
                  </h3>
                  {section.items.map((item, index) => {
                    item.disabled = item.disabled || disabled;
                    return <SectionItem key={index} item={item} />;
                  })}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="items-start gap-2 hidden md:grid">
        {items.map((section, index) => (
          <div key={index} className="grid gap-2">
            <h3 className="text-md font-semibold text-muted-foreground">
              {section.title}
            </h3>
            {section.items.map((item, index) => {
              return <SectionItem key={index} item={item} />;
            })}
          </div>
        ))}
      </nav>
    </>
  );
}
