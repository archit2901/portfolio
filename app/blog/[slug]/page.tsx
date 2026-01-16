import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// This is a placeholder. In a real implementation, you would:
// 1. Use generateStaticParams to pre-render blog post pages
// 2. Fetch post content from markdown files or a CMS
// 3. Use MDX for rich content rendering

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Placeholder - would fetch actual post data
  notFound();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto pt-16">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Post Title</h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            January 1, 2026
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            5 min read
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Blog post content would go here */}
        </div>
      </article>
    </div>
  );
}
