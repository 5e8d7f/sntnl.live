"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Turnstile } from "@marsidev/react-turnstile";

import { env } from "@/env.mjs";
import { fetcher } from "@/lib/utils";
import { motion } from "framer-motion";

interface Status {
  title: string;
  details: string;
}

async function submitVerification(
  captcha: string,
  fingerprint: number,
  id: string,
) {
  const data = await fetcher("/verification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ captcha, id, fingerprint }),
  });
  const { success, error: title, details } = data;
  if (success) {
    return {
      title: "You're good to go",
      details: "You can now return to Discord.",
    };
  }

  return {
    title,
    details,
  };
}

export default function VerificationPage() {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [fingerprint, setFingerprint] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>({
    title: "Verifying your browser",
    details: "We're making sure you're not an intruder.",
  });

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) {
      setStatus({
        title: "Session not found",
        details: "You need to start a session through Sentinel.",
      });
    }
  
    if (id && captcha && fingerprint) {
      submitVerification(captcha, fingerprint, id).then((data) => {
        setStatus(data);
      });
    }
  }, [captcha, fingerprint]);

  return (
    <>
      <Script
        src="/scripts/hwid.js"
        onLoad={() => {
          setFingerprint(window['hwid']);
        }}
      />
      <Turnstile
        siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        options={{
          theme: "light",
          size: "normal",
          action: "verify",
        }}
        onSuccess={(token) => setCaptcha(token)}
      />
      <Image
        src="/logo.png"
        alt="Logo"
        width={500}
        height={500}
        style={{
          animation: "wave 8s",
          animationIterationCount: "2",
        }}
        priority
      />
      <motion.div className="space-y-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.h1 className="text-2xl sm:text-4xl">{status.title}</motion.h1>
        <p className="text-lg sm:text-2xl text-muted-foreground">{status.details}</p>
      </motion.div>
    </>
  );
}
