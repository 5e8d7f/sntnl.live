"use client";

import * as React from "react";
import {
  Lenis as ReactLenis
} from "@studio-freight/react-lenis";

export function LenisProvider({
  children,
  options,
  ...props
}: {
  children: React.ReactNode;
  options: any;
}) {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}
