import { Briefcase, BookOpen, Award, Trophy } from "lucide-react";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  period?: string;
  details?: string[];
  achievements?: string[];
}

export default function ExperiencePage() {
  const workExperience: TimelineItem[] = [
    {
      icon: <Briefcase className="text-accent-orange" />,
      title: "Web Development Intern",
      subtitle: "Marvill Web Development",
      period: "March – April 2022",
      details: [
        "Built and configured WordPress sites for client delivery, including plugin configuration and performance tuning",
        "Completed 88 hours against an 80-hour career immersion requirement",
        "Supervisor appraisal: \"Kean has been fantastic. He is always willing to do whatever needs to be done.\"",
      ],
    },
  ];

  const education: TimelineItem[] = [
    {
      icon: <BookOpen className="text-accent-blue" />,
      title: "De La Salle University – Manila",
      subtitle: "BS Information Technology",
      period: "September 2022 – Expected June 2027",
      details: [
        "Minor: International Studies (Japanese Studies)",
        "Coursework: WAN Connectivity · Advanced Routing & Switching · System Administration · Database Administration · Business Applications Development · Human-Computer Interaction · Internet of Things · IT Project Management",
      ],
    },
    {
      icon: <BookOpen className="text-accent-green" />,
      title: "iACADEMY",
      subtitle:
        "Senior High School – Technical Vocational Track, Software Development Strand",
      period: "August 2020 – June 2022",
      details: ["Graduated with High Honours"],
    },
  ];

  const certifications: TimelineItem[] = [
    {
      icon: <Award className="text-accent-orange" />,
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      subtitle: "Cisco Networking Academy · Issued April 2026",
    },
    {
      icon: <Award className="text-accent-green" />,
      title: "Lean Six Sigma White Belt",
      subtitle: "Council for Six Sigma Certification · Issued March 2026",
    },
    {
      icon: <Award className="text-accent-blue" />,
      title: "JLPT N5 – Japanese Language Proficiency Test",
      subtitle: "Japan Foundation · Taken July 2026, results pending",
    },
  ];

  const accomplishments: TimelineItem[] = [
    {
      icon: <Trophy className="text-accent-orange" />,
      title: "Grand Prix Champion",
      subtitle: "2023 Busan Choral Festival and Competition (International)",
    },
    {
      icon: <Trophy className="text-accent-green" />,
      title: "Grand Champion",
      subtitle: "2023 NAMCYA (National Music Competitions for Young Artists)",
    },
    {
      icon: <Trophy className="text-accent-blue" />,
      title: "1st Place – Strain X",
      subtitle: "iACADEMY Project-Based Learning, 2020",
    },
    {
      icon: <Trophy className="text-accent-orange" />,
      title: "1st Place – VaccInfo",
      subtitle: "iACADEMY Project-Based Learning, 2021",
    },
    {
      icon: <Trophy className="text-accent-green" />,
      title: "1st Place – iRespond",
      subtitle: "iACADEMY Project-Based Learning, 2021",
    },
    {
      icon: <Trophy className="text-accent-blue" />,
      title: "Graduated with High Honours",
      subtitle: "iACADEMY Senior High School, Class of 2022",
    },
    {
      icon: <Trophy className="text-accent-orange" />,
      title: "3rd Place (2016) · 4th Runner-Up (2018) – NAMCYA",
      subtitle: "Musica Paulinos, St. Paul College of Makati",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-12">
          Experience & <span className="text-accent-orange">Timeline</span>
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-8 flex items-center gap-2">
            <Briefcase className="text-accent-orange" size={28} />
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    {idx < workExperience.length - 1 && (
                      <div className="w-0.5 h-20 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pt-2 pb-6">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-bold text-foreground">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-accent-orange font-poppins font-semibold text-sm mt-1">
                          {item.subtitle}
                        </p>
                      )}
                      {item.period && (
                        <p className="text-muted-foreground text-sm mt-2">
                          {item.period}
                        </p>
                      )}
                      {item.details && (
                        <ul className="mt-4 space-y-2">
                          {item.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground text-sm flex gap-2"
                            >
                              <span className="text-accent-orange mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-8 flex items-center gap-2">
            <BookOpen className="text-accent-blue" size={28} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    {idx < education.length - 1 && (
                      <div className="w-0.5 h-20 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pt-2 pb-6">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-bold text-foreground">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-accent-blue font-poppins font-semibold text-sm mt-1">
                          {item.subtitle}
                        </p>
                      )}
                      {item.period && (
                        <p className="text-muted-foreground text-sm mt-2">
                          {item.period}
                        </p>
                      )}
                      {item.details && (
                        <ul className="mt-4 space-y-2">
                          {item.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground text-sm flex gap-2"
                            >
                              <span className="text-accent-blue mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-8 flex items-center gap-2">
            <Award className="text-accent-orange" size={28} />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-foreground">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-8 flex items-center gap-2">
            <Trophy className="text-accent-orange" size={28} />
            Accomplishments & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accomplishments.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-4 flex gap-3"
              >
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground text-sm">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground text-xs mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
