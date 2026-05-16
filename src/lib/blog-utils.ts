// Pure utilities shared between server-side blog loading and client-side
// rendering. No Node-only imports here — this file must be safe to import
// from "use client" components.

export interface Heading {
    level: number;
    text: string;
    slug: string;
}

// Shared slug generator. Used by both heading extraction (for TOC) AND the
// markdown renderer (for h2/h3 IDs) so anchors and TOC links match.
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}
