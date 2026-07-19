export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  date: string;
  repo: string;
  github: string;
  accent: "orange" | "blue" | "green";
}

export const projects: Project[] = [
  {
    slug: "aitc-network",
    name: "Multi-Site Enterprise Network Design — Alonzo IT Training Center",
    description:
      "A year-long network design project built and expanded across three courses, from a single-site campus network into a three-site enterprise WAN spanning a Manila main campus, a leased annex, and a Quezon City campus. I own the Manila site: VLSM addressing, multilayer core switching with HSRP gateway redundancy, EtherChannel uplinks, NAT/PAT and layered ACL policy. After a design review flagged the edge router as a single point of failure, I rebuilt the transit layer around a second edge router with HSRP and WAN interface tracking.",
    tech: ["Cisco IOS", "HSRP", "EtherChannel", "VLSM", "NAT/PAT", "ACLs", "Packet Tracer"],
    date: "September 2025 – Present",
    repo: "",
    github: "",
    accent: "orange",
  },
  {
    slug: "scoop-order-system",
    name: "DLSU Student Co-Operative (SCoOp) Advanced Order System",
    description:
      "Web-based order management system replacing a manual Google Forms and spreadsheet workflow that left bulk orders stuck in group chats with no status visibility. I owned the admin side — order dashboard, status and date filtering, search, editing, pagination and CSV export — and handled integration across all four modules. Delivered by a team of four under full Scrum with Jira; graded at full marks, 99.81% overall.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Agile", "Jira"],
    date: "January – April 2025",
    repo: "UnityGrave/ITISDEV-Group-5",
    github: "https://github.com/UnityGrave/ITISDEV-Group-5",
    accent: "blue",
  },
  {
    slug: "konibui",
    name: "Konibui — TCG E-Commerce Platform",
    description:
      "Containerised e-commerce platform for trading card games with a buyback system for customer resale. Four-service Docker stack — Laravel 12 on PHP 8.2-FPM, MySQL 8.0, Nginx and phpMyAdmin — with health checks and the database port kept off the host network. Security is defense-in-depth: three MySQL roles created through Laravel migrations mirror the application roles, so least-privilege permissions hold at the database layer even if the app is compromised.",
    tech: ["Laravel 12", "PHP", "MySQL", "Docker", "Nginx", "RBAC"],
    date: "May – August 2025",
    repo: "UnityGrave/ITDBADMGroup1",
    github: "https://github.com/UnityGrave/ITDBADMGroup1",
    accent: "green",
  },
  {
    slug: "iot-water-dispenser",
    name: "Automatic Water Dispenser with Telegram Notifications — ESP32 IoT",
    description:
      "ESP32-based automatic pet water dispenser with remote monitoring. Two water-level sensors track the bowl and reservoir; the pump runs only when the bowl is empty AND the reservoir still holds water, so it can never run dry. Analog readings against calibrated thresholds, notification flags to prevent alert spam on every five-second cycle, and recovery detection. Hardware includes a TIP32C transistor driver with 1N4007 flyback protection and separate power rails on a shared ground.",
    tech: ["ESP32", "C++", "Telegram Bot API", "Sensors", "Electronics"],
    date: "May – August 2025",
    repo: "",
    github: "",
    accent: "orange",
  },
  {
    slug: "penny-juice-redesign",
    name: "Penny Juice Website Redesign — UX Case Study",
    description:
      "Complete user-centred redesign of a juice supplier's website, from heuristic critique of the live site through persona and five-stage journey map, to eight desktop and mobile screens in Figma using reusable components. Ran User Acceptance Testing scored across seven criteria on both form factors, then iterated on the findings — fixing mobile scaling and navigation, contrast, form controls and alignment.",
    tech: ["Figma", "UX Research", "Prototyping", "Usability Testing"],
    date: "January – April 2025",
    repo: "",
    github: "",
    accent: "blue",
  },
  {
    slug: "nviridian-aws",
    name: "Nviridian — AWS Cloud Architecture Proposal",
    description:
      "Cloud architecture proposal for a computer-peripherals e-commerce platform, designed and presented as a team of four. Covers problem definition, audience research, journey mapping, wireframes and a full AWS service design — CloudFront, S3, RDS, Lambda, API Gateway, Cognito, OpenSearch, SQS, SES and CodePipeline — with infrastructure diagrams and an elasticity strategy. Designed and presented; not deployed. Alongside it, hands-on AWS console work with IAM roles, Lambda/S3 and cost management.",
    tech: ["AWS", "Cloud Architecture", "IAM", "Serverless", "Next.js"],
    date: "January – April 2025",
    repo: "",
    github: "",
    accent: "green",
  },
  {
    slug: "senate-election",
    name: "Senate Election Information App",
    description:
      "Android application helping Filipino voters prepare for senate elections — candidate profiles, platforms, and a mock ballot to rehearse voting before election day. The sample ballot maker lets users print or save their choices to bring to the polls. QR scanning jumps straight to a candidate's profile from campaign materials, Firebase Cloud Messaging delivers deadline reminders, and account access is protected by facial-recognition two-factor authentication.",
    tech: ["Kotlin", "Android Studio", "Firebase", "MySQL", "Facial Recognition 2FA"],
    date: "September – December 2024",
    repo: "UnityGrave/MOBDEVE-App",
    github: "https://github.com/UnityGrave/MOBDEVE-App",
    accent: "orange",
  },
  {
    slug: "ilabu",
    name: "iLABu — Web-Based Lab Reservation System",
    description:
      "Full-stack laboratory seat reservation system built in two phases, front end then Node.js and MongoDB with authentication and deployment. Two account types with asymmetric permissions: students book 30-minute slots across a rolling seven-day view and can reserve anonymously; lab technicians reserve for walk-ins, edit any booking, and release seats after a ten-minute no-show. Availability refreshes without a page reload, and deleting an account cascades to cancel pending reservations.",
    tech: ["Node.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    date: "May – August 2024",
    repo: "UnityGrave/CCAPDEV_MC02_iLABu",
    github: "https://github.com/UnityGrave/CCAPDEV_MC02_iLABu",
    accent: "blue",
  },
  {
    slug: "doctor-appointment",
    name: "Doctor Schedule Appointment System",
    description:
      "Web-based appointment scheduling system for a medical practice, with separate doctor and patient portals built on PHP and MySQL.",
    tech: ["PHP", "MySQL"],
    date: "September – December 2024",
    repo: "Alec718/IT-PROG-MCO",
    github: "https://github.com/Alec718/IT-PROG-MCO",
    accent: "green",
  },
  {
    slug: "irespond",
    name: "Project Based Learning: iRespond — 1st Place",
    description:
      "Awarded 1st Place. Team-built desktop application addressing gender inequality issues in the Philippines, developed in C# with the Bunifu UI framework, with a separate Android Studio version also produced. I worked across the backend development team and contributed to the UI/UX design, moving between data handling and interface work as the project needed.",
    tech: ["C#", "Bunifu", "WinForms", "Android Studio"],
    date: "November – December 2021",
    repo: "rogercnyn/iRespond-Android",
    github: "https://github.com/rogercnyn/iRespond-Android",
    accent: "orange",
  },
  {
    slug: "vaccinfo",
    name: "Project Based Learning: VaccInfo — 1st Place",
    description:
      "Awarded 1st Place. Desktop application visualising COVID-19 data through graphs and charts, built in C# with the Bunifu UI framework. I designed the UI/UX for the analytics dashboard, focusing on making data readable at a glance and choosing chart types suited to each kind of figure.",
    tech: ["C#", "Bunifu", "Data Visualisation", "UI Design"],
    date: "April – May 2021",
    repo: "DaLouuu/VaccInfo",
    github: "https://github.com/DaLouuu/VaccInfo",
    accent: "blue",
  },
  {
    slug: "strain-x",
    name: "Project Based Learning: Strain X — 1st Place",
    description:
      "Awarded 1st Place. A 2D role-playing survival game set in the \"New Normal,\" built in Godot with GDScript. I created all 2D sprites and game assets in Aseprite, and designed the visual-novel-style interface along with the complete set of UI elements used throughout the game.",
    tech: ["Godot", "GDScript", "Aseprite", "2D Art", "UI Design"],
    date: "November – December 2020",
    repo: "DaLouuu/Strain-X",
    github: "https://github.com/DaLouuu/Strain-X",
    accent: "green",
  },
];
