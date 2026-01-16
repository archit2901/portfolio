import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-muted-foreground text-sm">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-primary transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
