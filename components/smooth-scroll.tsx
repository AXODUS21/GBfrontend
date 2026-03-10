"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.12, 
      duration: 1.1, 
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    }}>
      {children}
    </ReactLenis>
  );
}
