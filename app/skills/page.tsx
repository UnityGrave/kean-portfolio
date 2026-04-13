import { Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  accent: "orange" | "blue" | "green";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Networking",
    skills: [
      "TCP/IP",
      "LAN/WAN",
      "Cisco CCNA 1 & 2",
      "Switching & Routing",
      "Wireless Networking",
    ],
    accent: "orange",
  },
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Kotlin",
      "C",
      "C++",
      "C#",
      "Python",
      "PHP",
      "TypeScript",
      "GDScript",
    ],
    accent: "blue",
  },
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "WordPress",
      "Laravel",
      "NGINX",
      "NPM",
    ],
    accent: "green",
  },
  {
    title: "Mobile Development",
    skills: ["Android Studio", "Kotlin"],
    accent: "orange",
  },
  {
    title: "Game Development",
    skills: ["Unity", "GDScript", "C#"],
    accent: "blue",
  },
  {
    title: "Database Management",
    skills: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
    accent: "green",
  },
  {
    title: "Data Analysis & Visualization",
    skills: ["Python", "Tableau", "PowerBI"],
    accent: "orange",
  },
  {
    title: "Software Development",
    skills: ["Scrum", "Agile", "Lean Six Sigma", "PMBOK", "DSA"],
    accent: "blue",
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "UX Research & Testing"],
    accent: "green",
  },
  {
    title: "Graphic Design",
    skills: ["Adobe Illustrator", "Canva", "Aseprite"],
    accent: "orange",
  },
  {
    title: "Video Editing",
    skills: ["Wondershare Filmora", "Adobe After Effects"],
    accent: "blue",
  },
  {
    title: "DevOps & Hardware",
    skills: ["Docker", "Arduino IDE", "ESP32", "GitHub"],
    accent: "green",
  },
  {
    title: "API Documentation",
    skills: ["Javadoc"],
    accent: "orange",
  },
  {
    title: "Office Productivity",
    skills: ["Microsoft 365", "Google Suite"],
    accent: "blue",
  },
];

const accentClasses = {
  orange: "border-l-accent-orange",
  blue: "border-l-accent-blue",
  green: "border-l-accent-green",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-accent-orange" size={32} />
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground">
              Skills & Expertise
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl font-lora">
            A comprehensive overview of my technical skills, tools, and
            certifications across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-card border border-border border-l-4 ${accentClasses[category.accent]} rounded-xl p-6 hover:border-opacity-100 transition-all hover:shadow-lg`}
            >
              <h3 className="text-lg font-poppins font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-poppins font-medium rounded-full hover:bg-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
            <span className="text-accent-orange">Certifications</span> & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent-blue">
              <h3 className="font-poppins font-bold text-foreground mb-2">
                CCNA Certification
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Cisco Certified Network Associate
              </p>
              <p className="text-xs text-muted-foreground">
                Covers networking fundamentals, routing & switching, and
                enterprise networking.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent-green">
              <h3 className="font-poppins font-bold text-foreground mb-2">
                JLPT N5
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Japanese Language Proficiency Test
              </p>
              <p className="text-xs text-muted-foreground">
                Demonstrates foundational Japanese language competency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
