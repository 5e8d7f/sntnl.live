import Discord from "next-auth/providers/discord"
import { env } from "@/env.mjs"

import type { NextAuthConfig } from "next-auth"

export default {
  providers: [
    Discord({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig