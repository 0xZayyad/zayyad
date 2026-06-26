import { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClientProjects from "../components/ClientProjects";
import SkillsTerminal from "../components/SkillsTerminal";
import BentoGrid from "../components/BentoGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import CommandPalette from "../components/CommandPalette";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";

const projects = [
  {
    title: "Coixa",
    category: "web3",
    description:
      "Next-gen Web3 DeFi wallet and gateway for the Pi blockchain — non-custodial, secure, fast. Used by 2,000+ active users.",
    techStack: [
      "NextJS",
      "Stellar SDK",
      "TypeScript",
      "Blockchain",
      "Web3",
      "react-native",
      "Expo",
    ],
    liveUrl: "https://coixa.xyz",
    githubUrl: "https://github.com/mz0x0100/Coixa",
    image: "/coixa-landing.png",
    size: "large" as const,
    badge: "🔥 2,000+ users",
    images: [
      "/demo/welcome.png",
      "/demo/dashboard.png",
      "/demo/explore.png",
      "/demo/swap.png",
      "/demo/market.png",
      "/demo/chart.png",
      "/demo/limit-order.png",
      "/demo/lp.png",
      "/demo/activities.png",
      "/demo/watch-account.png",
      "/demo/settings.png",
    ],
  },
  {
    title: "Agentic Wallet",
    category: "web3",
    description:
      "Autonomous wallet infrastructure for AI agents on Solana — enables LLM-driven on-chain transactions, swaps, and DeFi operations.",
    techStack: [
      "NextJS",
      "Solana",
      "DeFi",
      "Orca Whirlpool",
      "TypeScript",
      "Blockchain",
      "Web3",
      "Nodejs",
    ],
    liveUrl: "https://youtu.be/EWCTTyLtFvE?si=gVp5iSp9lOGDsQl-",
    githubUrl: "https://github.com/0xZayyad/agentic-wallet",
    image: "/agentic-wallet.png",
    size: "large" as const,
    images: [],
  },
  {
    title: "DeTork",
    category: "web3",
    description:
      "On-chain freelance marketplace for blockchain developers — escrow-backed contracts, milestone payments, and dispute resolution on Solana.",
    techStack: [
      "Rust",
      "Web3",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Solana",
      "Anchor",
    ],
    githubUrl: "https://github.com/0xZayyad/DetorkSmartContracts",
    liveUrl: "https://detork.vercel.app",
    image: "/detork.png",
    size: "large" as const,
  },
  {
    title: "Coinlet",
    category: "web3",
    description:
      "P2P trading platform for exchanging Pi cryptocurrency ↔ Fiat on the Pi browser — with escrow and verified transactions.",
    techStack: ["React.js", "Pi SDK", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://coinlet2261.pinet.com",
    image: "/coinlet.png",
    size: "medium" as const,
  },
  {
    title: "AGDetection",
    category: "ai",
    description:
      "Real-time age and gender detection using live video stream analysis with TensorFlow and OpenCV.",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/0xZayyad/AGDetection",
    image: "/elon.png",
  },
  {
    title: "VirtualPainter",
    category: "ai",
    description:
      "Interactive computer vision app that turns your webcam into a virtual drawing canvas using hand gesture tracking.",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/0xZayyad/VirtualPainter",
    image: "/vp.png",
  },
  {
    title: "Coixa Mobile",
    category: "mobile",
    description:
      "React Native non-custodial DeFi wallet for the Pi blockchain — full swap, market, LP, and portfolio tracking features.",
    techStack: [
      "Stellar SDK",
      "TypeScript",
      "Blockchain",
      "Web3",
      "react-native",
      "Expo",
    ],
    liveUrl: "https://coixa.xyz",
    image: "/dashboard.png",
    size: "medium" as const,
    badge: "🔥 2,000+ users",
    images: [
      "/demo/welcome.png",
      "/demo/dashboard.png",
      "/demo/explore.png",
      "/demo/swap.png",
      "/demo/market.png",
      "/demo/chart.png",
      "/demo/limit-order.png",
      "/demo/lp.png",
      "/demo/activities.png",
      "/demo/watch-account.png",
      "/demo/settings.png",
    ],
  },
  {
    title: "FeedStack",
    category: "mobile",
    description:
      "Lightweight, opinionated RSS & article reader app built for speed and simplicity — clean UX with offline support.",
    techStack: ["react-native", "TypeScript", "API"],
    githubUrl: "https://github.com/0xZayyad/feedstack",
    image: "/feedstack/mobile_mockup.png",
    size: "medium" as const,
    images: [
      "/feedstack/screenshot1.jpg",
      "/feedstack/screenshot2.jpg",
      "/feedstack/screenshot3.jpg",
    ],
  },
  {
    title: "KeyScan",
    category: "cybersecurity",
    description:
      "Advanced remote keylogging software with encrypted exfiltration over Winsock2 — cross-platform C++ implementation.",
    techStack: ["C++", "Windows API", "Winsock2", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/KeyScan",
    image: "/keyscan2.png",
  },
  {
    title: "Packt",
    category: "cybersecurity",
    description:
      "Command-line network packet sniffer that captures and inspects raw TCP/IP traffic on Unix/Linux systems.",
    techStack: ["C", "Networking", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/packt",
    image: "/packt.png",
  },
  {
    title: "sshcred",
    category: "cybersecurity",
    description:
      "Advanced SSH audit tool — brute-force login enumeration, host fingerprinting, and session management.",
    techStack: ["C++", "SSH", "Protocol", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/sshcred",
    image: "/sshcred2.png",
  },
  {
    title: "NexScanner",
    category: "cybersecurity",
    description:
      "Discovery tool for admin panels and subdomain enumeration — fast, multi-threaded Python scanner.",
    techStack: ["Python", "HTTP", "Protocol", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/NexScanner",
    image: "/nexscanner.png",
  },
  {
    title: "Bzip",
    category: "cybersecurity",
    description:
      "Brute-force tool for password-protected ZIP archives with dictionary and rule-based attack modes.",
    techStack: ["Python", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/Bzip",
    image: "/bzip.png",
  },
];

const categoryList = [
  { label: `All (${projects.length})`, value: null },
  {
    label: `Web3 (${projects.filter((p) => p.category === "web3").length})`,
    value: "web3",
  },
  {
    label: `Cybersecurity (${
      projects.filter((p) => p.category === "cybersecurity").length
    })`,
    value: "cybersecurity",
  },
  {
    label: `AI (${projects.filter((p) => p.category === "ai").length})`,
    value: "ai",
  },
  {
    label: `Mobile (${projects.filter((p) => p.category === "mobile").length})`,
    value: "mobile",
  },
];

const Index = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const shortcuts = [
    { key: "k", metaKey: true, action: () => setIsCommandPaletteOpen(true) },
  ];

  useKeyboardShortcuts(shortcuts);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const commands = [
    {
      id: "home",
      title: "Go to Home",
      description: "Scroll to top",
      action: () => scrollTo("home"),
    },
    {
      id: "services",
      title: "View Services",
      description: "See what I build for clients",
      action: () => scrollTo("services"),
    },
    {
      id: "client-work",
      title: "View Client Work",
      description: "See recent freelance projects",
      action: () => scrollTo("client-work"),
    },
    {
      id: "projects",
      title: "View Personal Projects",
      description: "Browse side-projects and open source work",
      action: () => scrollTo("projects"),
    },
    {
      id: "skills",
      title: "View Skills & Experience",
      description: "Check out my work history",
      action: () => scrollTo("skills"),
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch / hire me",
      action: () => scrollTo("contact"),
    },
    {
      id: "github",
      title: "View GitHub Profile",
      description: "Check out my open source contributions",
      action: () => window.open("https://github.com/0xZayyad", "_blank"),
    },
    {
      id: "linkedin",
      title: "View LinkedIn Profile",
      description: "Connect with me professionally",
      action: () => window.open("https://linkedin.com/in/0xZayyad", "_blank"),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "#121212",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      <Box sx={{ pt: "64px" }}>
        <HeroSection />
        
        <ServicesSection />
        
        <ClientProjects />
        
        <Box id="projects" sx={{ pt: { xs: 4, md: 6 } }}>
          <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
            <Box sx={{ mb: { xs: 3, md: 5 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Fira Code",
                  color: "#00FF00",
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box component="span" sx={{ color: "#F92672" }}>
                  &gt;
                </Box>{" "}
                Product Labs & Open Source
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Fira Code",
                  color: "#ABB2BF",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                // Shipping history beyond client work: products, experiments, and technical depth.
              </Typography>
            </Box>
            <BentoGrid projects={projects} categories={categoryList} />
          </Container>
        </Box>

        <Box id="skills" sx={{ pt: { xs: 8, md: 10 } }}>
          <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
            <Box sx={{ mb: { xs: 3, md: 5 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Fira Code",
                  color: "#00FF00",
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box component="span" sx={{ color: "#F92672" }}>
                  &gt;
                </Box>{" "}
                Experience & Skills
              </Typography>
            </Box>
            
            <Grid container spacing={{ xs: 4, md: 6 }}>
              <Grid size={{ xs: 12, lg: 7 }}>
                <ExperienceTimeline />
              </Grid>
              <Grid size={{ xs: 12, lg: 5 }}>
                <SkillsTerminal />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
            <Grid container justifyContent="center">
              <Grid size={{ xs: 12, md: 8, lg: 6 }}>
                <ContactForm />
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                  <SocialLinks />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <CommandPalette
        commands={commands}
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </Box>
  );
};

export default Index;
