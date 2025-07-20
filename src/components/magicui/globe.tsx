"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef} from "react";
import { useTheme } from "next-themes";


import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.4,
  dark: 0,
  diffuse: 0.5,
  mapSamples: 22000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [34 / 255, 197 / 255, 94 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [46.3601, 295.0588], size: 0.1 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const { resolvedTheme } = useTheme(); // Use resolvedTheme for SSR safety


  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 50,
    stiffness: 500,
  });

    const globeConfig = {
    ...config,
    dark: resolvedTheme === "dark" ? 1 : 0,
    baseColor: resolvedTheme === "dark" ? [0.8, 0.9, 1.2] : [1, 1, 1],
  };

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  window.addEventListener("resize", onResize);
  onResize();

  // Only pass the properties COBE expects
  const globe = createGlobe(canvasRef.current!, {
    ...globeConfig,
    width: width * 2,
    height: width * 2,
    onRender: (state) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + rs.get();
      state.width = width * 2;
      state.height = width * 2;
    },
  } as COBEOptions); // <-- Explicitly cast if needed

  setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
  return () => {
    globe.destroy();
    window.removeEventListener("resize", onResize);
  };
}, [rs, globeConfig]);

  //   setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
  //   return () => {
  //     globe.destroy();
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, [rs, globeConfig]);

  return (
    <div
      className={cn(
        "absolute inset-0 mt-8 mx-auto aspect-[1/1] w-full max-w-[450px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
