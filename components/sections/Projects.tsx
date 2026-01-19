"use client";

import { PROJECTS } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { ExternalLink, Github, Code2, Layers, Database, Brain, Smartphone, BarChart3 } from "lucide-react";

// Map project titles to icons
const getProjectIcon = (title: string) => {
  const iconMap: { [key: string]: React.ElementType } = {
    "CareerCompass AI": Brain,
    "SmartOffice Workflow Manager": Layers,
    "TechSkill Assessment Platform": Code2,
    "Executive Performance Analytics Dashboard": BarChart3,
    "Semantic Search Engine using Transformers": Database,
    "Human Activity Recognition App": Smartphone,
  };
  return iconMap[title] || Code2;
};

// Gradient colors for each project
const gradients = [
  "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
  "from-purple-500/20 via-pink-500/10 to-rose-500/20",
  "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "from-green-500/20 via-emerald-500/10 to-teal-500/20",
  "from-indigo-500/20 via-blue-500/10 to-cyan-500/20",
  "from-rose-500/20 via-red-500/10 to-orange-500/20",
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const Icon = getProjectIcon(project.title);
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="h-full flex flex-col hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  {/* Gradient Header with Icon */}
                  <div className={`relative h-32 bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden rounded-t-lg`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="mb-4 text-justify leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
