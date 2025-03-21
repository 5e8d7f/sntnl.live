import Image from "next/image";

import { BorderBeam } from "../magicui/border-beam";

//           maskImage: "linear-gradient(to bottom, black 40%, transparent 70%)",

export function PreviewLanding() {
  return (
    <div
      className="light:hidden hidden pb-2 sm:pb-16 md:block"
      style={{
        maskImage: "linear-gradient(to bottom, black 40%, transparent 70%)",
      }}
    >
      <div className="container max-w-7xl">
        <div className="rounded-xl border border-white/10 bg-opacity-[0.01]">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              className="size-full object-cover object-center"
              src="/images/hero.png"
              alt="preview landing"
              width={2000}
              height={1000}
              priority={true}
            />
            <BorderBeam size={300} duration={5} delay={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
