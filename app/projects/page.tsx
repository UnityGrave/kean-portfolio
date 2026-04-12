import { Code2 } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-accent-orange" size={32} />
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
              My <span className="text-accent-orange">Projects</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl font-lora">
            A showcase of my work across web development, networking, mobile
            apps, and full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <section className="mt-16 pt-16 border-t border-border">
          <div className="bg-gradient-to-r from-card to-muted border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
              Want to see more?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-lora">
              Explore my GitHub profile to see all repositories, contributions,
              and ongoing projects.
            </p>
            <a
              href="https://github.com/UnityGrave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all"
            >
              Visit GitHub Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
