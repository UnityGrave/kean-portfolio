import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground leading-tight">
                Kean Angelo{" "}
                <span className="text-accent-orange">L. Genota</span>
              </h1>
              <p className="text-xl text-accent-orange font-poppins font-semibold">
                IT Intern · Networking · Web Development · Project Management
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-lora">
              Fourth-year BS Information Technology student at De La Salle
              University. Certified CCNA, JLPT N5. Grand Prix Champion at the
              2023 Busan Choral Festival. I build things at the intersection of
              networks, design, and code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all hover:gap-3"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>
              <a
                href="/KeanGenota-IT-Intern.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-poppins font-semibold rounded-xl hover:bg-muted transition-all hover:border-accent-orange"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-poppins font-bold text-accent-orange">
                  7+
                </p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-poppins font-bold text-accent-blue">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">Skills</p>
              </div>
              <div>
                <p className="text-2xl font-poppins font-bold text-accent-green">
                  3
                </p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-border bg-card flex items-center justify-center">
              <Image
                src="/images/profile.jpg"
                alt="Kean Angelo L. Genota"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-8">
            Featured <span className="text-accent-orange">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Networking",
                items: ["TCP/IP", "CCNA 1&2", "LAN/WAN", "Cisco"],
              },
              {
                title: "Web Development",
                items: ["TypeScript", "Node.js", "React", "Next.js"],
              },
              {
                title: "Full-Stack",
                items: ["MongoDB", "MySQL", "PHP", "Database Design"],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent-orange transition-colors"
              >
                <h3 className="text-lg font-poppins font-bold text-accent-orange mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-orange rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
