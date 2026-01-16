import { EXPERIENCE } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

          {EXPERIENCE.map((exp, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="relative mb-8 md:mb-12 pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                {/* Content card */}
                <div className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.duration} • {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start text-justify"
                      >
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
