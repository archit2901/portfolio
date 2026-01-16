import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </ScrollAnimation>

        {/* Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {EDUCATION.map((edu, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-primary font-medium mb-1">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.duration}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    GPA: {edu.gpa}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Certifications */}
        <ScrollAnimation delay={0.3}>
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-md bg-accent"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
