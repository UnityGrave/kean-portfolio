import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, Github } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getReadmeContent(repo: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.text();
  } catch (error) {
    console.error("Failed to fetch README:", error);
    return null;
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background py-16 px-6 md:px-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const readmeContent = await getReadmeContent(project.repo);

  const accentColors = {
    orange: "text-accent-orange",
    blue: "text-accent-blue",
    green: "text-accent-green",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <h1 className={`text-4xl md:text-5xl font-poppins font-bold ${accentColors[project.accent]} mb-3`}>
            {project.name}
          </h1>

          <p className="text-muted-foreground mb-6 font-lora text-lg">
            {project.description}
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-poppins rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          <p className="text-muted-foreground text-sm mt-6">{project.date}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        {readmeContent ? (
          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ ...props }) => (
                    <h1
                      className="text-3xl font-poppins font-bold text-foreground mt-8 mb-4"
                      {...props}
                    />
                  ),
                  h2: ({ ...props }) => (
                    <h2
                      className="text-2xl font-poppins font-bold text-foreground mt-6 mb-3"
                      {...props}
                    />
                  ),
                  h3: ({ ...props }) => (
                    <h3
                      className="text-xl font-poppins font-semibold text-foreground mt-4 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ ...props }) => (
                    <p
                      className="text-muted-foreground leading-relaxed font-lora"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul
                      className="list-disc list-inside text-muted-foreground space-y-1 font-lora"
                      {...props}
                    />
                  ),
                  ol: ({ ...props }) => (
                    <ol
                      className="list-decimal list-inside text-muted-foreground space-y-1 font-lora"
                      {...props}
                    />
                  ),
                  li: ({ ...props }) => (
                    <li className="text-muted-foreground font-lora" {...props} />
                  ),
                  code: ({ inline, ...props }) =>
                    inline ? (
                      <code
                        className="bg-muted text-accent-orange px-2 py-1 rounded font-mono text-sm"
                        {...props}
                      />
                    ) : (
                      <code
                        className="block bg-muted text-muted-foreground p-4 rounded-lg font-mono text-sm overflow-x-auto"
                        {...props}
                      />
                    ),
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="border-l-4 border-accent-orange pl-4 italic text-muted-foreground py-2"
                      {...props}
                    />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="text-accent-orange hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  table: ({ ...props }) => (
                    <table
                      className="w-full border-collapse border border-border"
                      {...props}
                    />
                  ),
                  th: ({ ...props }) => (
                    <th
                      className="border border-border bg-muted p-2 text-foreground font-poppins"
                      {...props}
                    />
                  ),
                  td: ({ ...props }) => (
                    <td className="border border-border p-2 text-muted-foreground" {...props} />
                  ),
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
              Project Details
            </h2>
            <p className="text-muted-foreground mb-6 font-lora">
              {project.description}
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              View the full project on GitHub for more details and source code.
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all"
            >
              <Github size={20} />
              View Repository
            </a>
          </div>
        )}
      </div>

      <div className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
            Explore More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="bg-background border border-border rounded-xl p-4 hover:border-accent-orange transition-colors"
                >
                  <h4 className="font-poppins font-semibold text-foreground hover:text-accent-orange transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    {p.description}
                  </p>
                </Link>
              ))}
          </div>
          <Link
            href="/projects"
            className="inline-block mt-6 text-accent-orange font-poppins font-semibold hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
