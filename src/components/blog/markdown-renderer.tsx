"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { slugify } from "@/lib/blog-utils";

// Reads text content out of arbitrary React children (string, number, or
// nested element trees). Needed because ReactMarkdown passes already-rendered
// inline children (e.g. <code> spans) to heading components, not plain strings.
function nodeToText(children: React.ReactNode): string {
    if (typeof children === "string") return children;
    if (typeof children === "number") return String(children);
    if (Array.isArray(children)) return children.map(nodeToText).join("");
    if (
        children &&
        typeof children === "object" &&
        "props" in children &&
        children.props != null &&
        typeof (children.props as { children?: React.ReactNode }).children !==
            "undefined"
    ) {
        return nodeToText(
            (children.props as { children: React.ReactNode }).children
        );
    }
    return "";
}

export function MarkdownRenderer({ content }: { content: string }) {
    // Slug generation MUST be pure here. React Strict Mode double-invokes
    // functional components in dev — the h2/h3 callbacks are functional
    // components, so any side effect (like incrementing a counter in a
    // closure) runs twice per heading on the client and once on the server,
    // producing different slugs and triggering a hydration mismatch. We use
    // plain `slugify(text)` only. extractHeadings() must match.
    //
    // Caveat: if two headings produce the same slug, they'll share an HTML
    // id and the TOC's getElementById will resolve to the first. Acceptable
    // for now — none of the current posts have duplicate headings.
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                // scroll-mt-[50px] gives the heading ~50px of breathing room
                // above it when scrolled into view (TOC clicks, hash links).
                h2: ({ children, ...props }) => (
                    <h2
                        id={slugify(nodeToText(children))}
                        className="scroll-mt-[50px]"
                        {...props}
                    >
                        {children}
                    </h2>
                ),
                h3: ({ children, ...props }) => (
                    <h3
                        id={slugify(nodeToText(children))}
                        className="scroll-mt-[50px]"
                        {...props}
                    >
                        {children}
                    </h3>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
