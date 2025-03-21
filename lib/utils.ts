import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ms from "ms";

import { env } from "@/env.mjs"
import { toast } from "@/components/ui/use-toast";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

// Utils from precedent.dev
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}${input}`, init);
  const json = await res.json();

  // if (!res.ok) {
  //   if (json.error && json.details) {
  //     toast({title: json.error, description: json.details })
  //     // const error = new Error(json.error) as Error & {
  //     //   status: number;
  //     // };
  //     // error.status = res.status;
  //     // throw error;
  //   } else {
  //     throw new Error("An unexpected error occurred");
  //   }
  // }

  return json
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};


export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `${siteConfig.name} / %s`,
    },
    description,
    keywords: [
      "discord",
      "discord bot",
      "discord verification",
      "discord captcha",
      "discord anti raid",
      "anti raid",
      "anti bots",
      "protection",
      "security",
      "discord auto roles",
      "discord management",
      "discord protections",
      "discord server bot",
    ],
    authors: [
      {
        name: "ethan",
      },
    ],
    creator: "ethan",
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: {
        default: title,
        template: `${siteConfig.name} / %s`,
      },
      description: description,
      images: [image],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
      creator: "@ethan",
    },
    icons: icons,
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}