import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Blog | Archit Gupta",
  description: "Technical articles and insights on software development, AI/ML, and scalable systems",
};

// This is a placeholder. In a real implementation, you would fetch blog posts from a CMS or markdown files
const BLOG_POSTS: any[] = [];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto pt-16">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thoughts on software development, AI/ML, and technology
          </p>
        </ScrollAnimation>

        {BLOG_POSTS.length === 0 ? (
          <ScrollAnimation delay={0.2}>
            <Card className="text-center p-12">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Coming Soon</CardTitle>
                <CardDescription>
                  I'm currently working on some exciting technical articles.
                  Check back soon for insights on full-stack development, AI/ML,
                  and scalable system design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/#contact">
                  <Button>Get notified when I publish</Button>
                </Link>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <ScrollAnimation key={post.slug} delay={index * 0.1}>
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
