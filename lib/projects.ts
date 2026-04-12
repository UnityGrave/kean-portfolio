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
    slug: "ilabu",
    name: "iLABu – Lab Reservation System",
    description:
      "Full-stack laboratory reservation web application with MongoDB, user authentication, and real-time seat availability.",
    tech: ["NodeJS", "MongoDB", "HTML", "CSS", "JavaScript"],
    date: "May – August 2024",
    repo: "UnityGrave/CCAPDEV_MC02_iLABu",
    github: "https://github.com/UnityGrave/CCAPDEV_MC02_iLABu",
    accent: "orange",
  },
  {
    slug: "senate-election",
    name: "Senate Election Information App",
    description:
      "Android mobile application delivering structured information on Philippine senate election candidates.",
    tech: ["Kotlin", "Android Studio"],
    date: "September – December 2024",
    repo: "UnityGrave/MOBDEVE-App",
    github: "https://github.com/UnityGrave/MOBDEVE-App",
    accent: "blue",
  },
  {
    slug: "doctor-appointment",
    name: "Doctor Schedule Appointment System",
    description:
      "Web-based appointment scheduling system for a medical practice with doctor and patient portals.",
    tech: ["PHP", "MySQL"],
    date: "September – December 2024",
    repo: "Alec718/IT-PROG-MCO",
    github: "https://github.com/Alec718/IT-PROG-MCO",
    accent: "green",
  },
  {
    slug: "konibui",
    name: "Konibui – TCG E-Commerce Website",
    description:
      "Full-featured e-commerce platform for trading card games with product listings, cart, and checkout flow.",
    tech: ["NodeJS", "MongoDB", "HTML", "CSS", "JavaScript"],
    date: "May – August 2025",
    repo: "UnityGrave/ITDBADMGroup1",
    github: "https://github.com/UnityGrave/ITDBADMGroup1",
    accent: "orange",
  },
  {
    slug: "mutech",
    name: "MuTech – Music Information Retrieval Dashboard",
    description:
      "Interactive data visualisation dashboard for analysing and presenting music-related metrics and pitch data.",
    tech: ["Python", "Data Visualisation"],
    date: "December 2025",
    repo: "UnityGrave/MuTech-MIR-Dashboard",
    github: "https://github.com/UnityGrave/MuTech-MIR-Dashboard",
    accent: "blue",
  },
  {
    slug: "network-design",
    name: "Enterprise Network Design – Two-Floor Office",
    description:
      "Complete network topology for a two-floor business, including IP addressing, subnetting, VLAN segmentation, and Cisco configurations.",
    tech: ["Cisco", "LAN/WAN", "Subnetting", "VLAN"],
    date: "January – April 2026",
    repo: "UnityGrave/ITISDEV-Group-5",
    github: "https://github.com/UnityGrave/ITISDEV-Group-5",
    accent: "green",
  },
  {
    slug: "irespond",
    name: "iRespond – Gender Equality Application",
    description:
      "Led a team to develop a desktop and Android app presenting data on gender inequality in the Philippines using Bunifu, WinForms, and C#.",
    tech: ["C#", "WinForms", "Bunifu", "Android Studio"],
    date: "October – December 2021",
    repo: "rogercnyn/iRespond-Android",
    github: "https://github.com/rogercnyn/iRespond-Android",
    accent: "orange",
  },
];
