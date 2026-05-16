import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { IconArrowLeft, IconArrowUpRight } from "@tabler/icons-react";

export const metadata = {
  title: "Blog — Shivam Patel",
  description: "Thoughts on software engineering, projects, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 sm:pt-40 pb-16 px-4">
      <div className="mx-auto max-w-2xl">
        <BlurFade delay={0.005} inView>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <IconArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Recent{" "}
            <span className="font-script font-normal text-[1.05em] leading-none align-baseline">
              writing
            </span>
            .
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Thoughts on software engineering, design, and things I find
            interesting.
          </p>
        </BlurFade>

        {posts.length === 0 ? (
          <BlurFade delay={0.01} inView>
            <p className="text-muted-foreground">No posts yet. Check back soon.</p>
          </BlurFade>
        ) : (
          <ul className="flex flex-col divide-y divide-border/60">
            {posts.map((post, idx) => (
              <BlurFade
                key={post.slug}
                delay={0.01 + idx * 0.05}
                inView
                className="pt-8 pb-8 first:pt-0"
              >
                <li>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="flex items-baseline justify-between gap-6 mb-2">
                      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary transition-colors">
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                          {post.title}
                        </span>
                        <IconArrowUpRight className="inline-block ml-1 h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </h2>
                      <time className="shrink-0 text-xs text-muted-foreground tabular-nums mt-1">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                      <span>{post.readingTime}</span>
                      {post.tags.length > 0 && (
                        <>
                          <span aria-hidden>·</span>
                          <span className="lowercase">
                            {post.tags.join(", ")}
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              </BlurFade>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
