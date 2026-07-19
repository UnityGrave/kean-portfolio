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
      "Cisco IOS",
      "Routing & Switching",
      "VLANs & Inter-VLAN Routing",
      "HSRP",
      "EtherChannel (LACP)",
      "Rapid PVST+",
      "VLSM & Subnetting",
      "NAT/PAT",
      "ACLs",
      "DHCP",
      "IPsec VPN",
      "Wireless (WLAN)",
      "Cisco Packet Tracer",
    ],
    accent: "orange",
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "IAM",
      "Lambda",
      "S3",
      "RDS",
      "CloudFront",
      "Docker",
      "Nginx",
      "CI/CD",
    ],
    accent: "blue",
  },
  {
    title: "Systems Administration",
    skills: [
      "Linux (Ubuntu)",
      "Windows Server",
      "Virtualization (Proxmox)",
      "Apache",
      "Network Security",
      "Switch Security",
    ],
    accent: "green",
  },
  {
    title: "Programming Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Kotlin",
      "C#",
      "C",
      "C++",
      "PHP",
      "GDScript",
    ],
    accent: "orange",
  },
  {
    title: "Web Development",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "WordPress",
    ],
    accent: "blue",
  },
  {
    title: "Database Management",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Database Design",
      "Role-Based Access Control",
    ],
    accent: "green",
  },
  {
    title: "Mobile & Embedded",
    skills: [
      "Android Studio",
      "Kotlin",
      "Firebase",
      "ESP32",
      "Arduino IDE",
      "Sensors & Actuators",
    ],
    accent: "orange",
  },
  {
    title: "Delivery & Process",
    skills: [
      "Agile",
      "Scrum",
      "Jira",
      "Lean Six Sigma",
      "PMBOK",
      "Requirements Analysis",
      "Quality Assurance",
    ],
    accent: "blue",
  },
  {
    title: "Design & Research",
    skills: [
      "Figma",
      "UX Research",
      "Usability Testing",
      "Prototyping",
      "Aseprite",
      "Canva",
    ],
    accent: "green",
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Docker Compose", "Microsoft 365", "Google Workspace"],
    accent: "orange",
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
              Skills &amp; Expertise
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
            <span className="text-accent-orange">Certifications</span> &amp; Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent-blue">
              <h3 className="font-poppins font-bold text-foreground mb-2">
                CCNA: Switching, Routing, and Wireless Essentials
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Cisco Networking Academy · Issued April 2026
              </p>
              <p className="text-xs text-muted-foreground">
                Course completion covering VLANs and inter-VLAN routing, Spanning
                Tree Protocol, EtherChannel, first-hop redundancy (HSRP), DHCP,
                wireless LANs and switch security.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent-green">
              <h3 className="font-poppins font-bold text-foreground mb-2">
                Lean Six Sigma White Belt
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Council for Six Sigma Certification · Issued March 2026
              </p>
              <p className="text-xs text-muted-foreground">
                Lean and Six Sigma fundamentals — DMAIC, waste reduction and
                process-improvement practice.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-accent-orange">
              <h3 className="font-poppins font-bold text-foreground mb-2">
                JLPT N5
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Japan Foundation · Taken July 2026, results pending
              </p>
              <p className="text-xs text-muted-foreground">
                Foundational Japanese language proficiency. Studying toward N4
                (December 2026).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
