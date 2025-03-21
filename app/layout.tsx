import "@/styles/globals.css";

import { Viewport } from "next";
import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import { siteConfig } from "@/config/site";
import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { LenisProvider } from "@/components/lenis-provider";
import Particles from "@/components/magicui/particles";
import { ModalProvider } from "@/components/modal-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#2b2d31",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider
              options={{
                lerp: 0.1,
                smoothTouch: true,
                smoothWheel: true,
              }}
            >
              <Particles
              className="absolute inset-0 z-0 size-full"
              quantity={100}
              ease={100}
              refresh
            />
              {children}
            </LenisProvider>
            <Analytics />
            <Toaster />
            <ModalProvider />
            <TailwindIndicator />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
