import { marketingConfig } from "@/config/marketing";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Verification",
};

export default function BotLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center pb-16">
      {children}
    </main>
  );
}
