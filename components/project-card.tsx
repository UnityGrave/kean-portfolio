import Link from "next/link";
import { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accentColors = {
    orange: "border-accent-orange",
    blue: "border-accent-blue",
    green: "border-accent-green",
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className={`bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${accentColors[project.accent]} border-l-4`}
      >
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-poppins">
            {project.date}
          </p>

          <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-accent-orange transition-colors">
            {project.name}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-poppins rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-accent-orange text-sm font-poppins font-semibold pt-2 group-hover:gap-3 transition-all">
            View Project
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
