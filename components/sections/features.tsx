import Link from "next/link";

import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";

export function Features() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <div className="container max-w-6xl">
          <HeaderSection
            title="Discover all features"
            subtitle="Explore what Sentinel has to offer and how it can help secure your server."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                key={feature.title}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                />
                <div className="relative">
                  {/* <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6 ">
                    {feature.icon}
                  </div> */}

                  <p className="mt-6 pb-6 text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                    <Button
                      variant="secondary"
                      size="sm"
                      rounded="xl"
                      className="px-4"
                    >
                      <Link href={feature.link} className="flex items-center gap-2">
                        <span>View on the dashboard</span>
                        <Icons.arrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
