import fs from "node:fs";
import path from "node:path";
import { data } from "@/data/data";

export interface SunsetPhoto {
  src: string;
  alt: string;
}

const IMAGE_RE = /\.(webp|jpe?g|png|avif)$/i;

/**
 * Lists every web-ready image in public/sunsets at build time.
 * Alt text comes from the curated list in data.tsx when available.
 * Raw HEIC/oversized photos must first be converted via `npm run sunsets`.
 */
export function getSunsetPhotos(): SunsetPhoto[] {
  const dir = path.join(process.cwd(), "public", "sunsets");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((file) => IMAGE_RE.test(file))
    .sort()
    .map((file) => {
      const src = `/sunsets/${file}`;
      const curated = data.sunsets.find((photo) => photo.src === src);
      return { src, alt: curated?.alt ?? "Landscape photograph" };
    });
}
