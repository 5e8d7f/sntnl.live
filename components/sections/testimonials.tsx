import Image from "next/image";

import { testimonials } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";

export function Testimonials() {
  return (
    <section>
      <div className="max-w-8xl container flex flex-col gap-10 py-6 sm:gap-y-16">
        <div className="container max-w-4xl">
          <HeaderSection
            label="Testimonials"
            title="Customer Reviews"
            subtitle="Here are some reviews which have been submitted by our customers. We are proud to consistently deliver the best service to our customers."
          />
        </div>

        <div className="column-1 gap-6 space-y-5 md:columns-2 lg:columns-3 xl:columns-4">
          {testimonials.map((item) => (
            <div className="break-inside-avoid" key={item.name}>
              <div className="relative rounded-xl border bg-muted/25">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <div>
                    <div className="relative mb-4 flex items-center gap-3">
                      <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full text-base">
                        <Image
                          width={100}
                          height={100}
                          className="size-full rounded-full border"
                          src={item.avatar}
                          alt={item.name}
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.server || "Private Server"}
                        </p>
                      </div>
                    </div>
                    <q className="text-muted-foreground">{item.review}</q>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
