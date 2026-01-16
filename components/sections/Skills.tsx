import { SKILLS } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <ScrollAnimation key={category} delay={index * 0.1}>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-md bg-accent hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
