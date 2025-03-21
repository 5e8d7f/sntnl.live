import Image from "next/image";
import { InfoLdg } from "@/types";

import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";
import { getStatistics } from "@/actions/get-statistics";

export async function Statistics() {
  const statistics = await getStatistics();
  console.log(statistics)

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="lg:order-1">
          <h2 className="font-heading text-3xl text-foreground md:text-4xl lg:text-[40px]">
            Statistics
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Sentinel has been protecting servers for a while now, here are some
            statistics.
          </p>
          <dl className="mt-6 space-y-4 leading-7">
            {/* {Object.entries(statistics).map(([key, value], index) => (
              <div key={index}>
                <dt className="font-semibold">{key}</dt>
                <dd className="text-sm text-muted-foreground">
                  {value.toLocaleString()}
                </dd>
              </div>
            ))} */}
            {Object.entries(statistics).map(([key, value], index) => {
              const Icon = Icons.arrowRight
              return (
                <div className="relative pl-8" key={index}>
                  <dt className="font-semibold">
                    <Icon className="absolute left-0 top-1 size-5 stroke-purple-700" />
                    <span>{key.toLocaleUpperCase()}</span>
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    {value.toLocaleString()}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        {/* <div
          className={cn(
            "overflow-hidden rounded-xl border lg:-m-4",
            "order-2"
          )}
        >
          <div className="aspect-video">
            <Image
              className="size-full object-cover object-center"
              src={data.image}
              alt={data.title}
              width={1000}
              height={500}
              priority={true}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
