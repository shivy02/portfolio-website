import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Shivam Patel`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-32 sm:pt-40 pb-16 px-4">
      {/*
        Grid layout at xl+: [spacer | article (672px) | TOC sidebar].
        Sticky (not fixed) means the TOC scrolls naturally with the article
        and disappears when the article ends — so it never overlaps the
        footer below. Below xl, the grid collapses to a single column and
        the TOC is hidden.
      */}
      <div className="mx-auto max-w-6xl xl:grid xl:grid-cols-[1fr_minmax(0,672px)_1fr] xl:gap-8">
        <div className="hidden xl:block" aria-hidden />
        <div className="mx-auto w-full max-w-2xl xl:mx-0">
          <BlurFade delay={0.005} inView>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <IconArrowLeft className="h-4 w-4" />
              All posts
            </Link>

            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <IconCalendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <IconClock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              </div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>
          </BlurFade>

          <BlurFade delay={0.01} inView>
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
              <MarkdownRenderer content={post.content} />
            </article>
          </BlurFade>
        </div>

        <aside className="hidden xl:block">
          {post.headings.length > 0 && (
            <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <TableOfContents headings={post.headings} />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
