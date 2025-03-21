import localFont from "next/font/local";
import { Inter as FontSans, Inter, Urbanist } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontUrban = Urbanist({
  subsets: ["latin"],
  variable: "--font-urban",
})

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
