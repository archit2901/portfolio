import { PERSONAL_INFO, STATS } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation delay={0.2}>
            <div className="space-y-4 text-muted-foreground">
              {PERSONAL_INFO.summary.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-accent/50 border border-border hover:border-primary transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
