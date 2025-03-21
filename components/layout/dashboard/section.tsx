"use client";

import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarNavItem } from "@/types";

export default function SectionItem({ item }: { item: SidebarNavItem }) {
    const path = usePathname()
    const Icon = Icons[item.icon || "arrowRight"]
  
    return (
      item.href && (
        <Link href={item.disabled ? "" : `${path}${item.href}`}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-md font-medium hover:bg-accent hover:text-accent-foreground",
              path === item.href ? "bg-accent" : "transparent",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            <Icon className="mr-2 size-4" />
            <span>{item.title}</span>
          </span>
        </Link>
      )
    )
  }