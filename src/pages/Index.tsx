import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import TerminalTabs from "../components/TerminalTabs";
import HeroSection from "../components/HeroSection";
import SkillsTerminal from "../components/SkillsTerminal";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import CommandPalette from "../components/CommandPalette";
import KeyboardShortcutsHelp from "../components/KeyboardShortcutsHelp";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
// import CustomTabPanel from "../components/CustomTabPanel";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  // Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const projects = [
  {
    title: "Coixa",
    category: "web3",
    description: "Web3 DeFi Wallet",
    techStack: ["NextJS", "Stellar SDK", "TypeScript", "Blockchain", "Web3", "React Native", "Expo"],
    liveUrl: "https://coixa.xyz",
    githubUrl: "https://github.com/mz0x0100/Coixa",
    image: "/coixa-landing.png",
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
    title: "DeTork",
    category: "web3",
    description:
      "DeTork is the on-chain freelance marketplace for blockchain developers",
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
  },
  {
    title: "Coinlet",
    category: "web3",
    description:
      "Coinlet is a P2P trading platform for exchaning Pi cryptocurrency <> Fiat on the Pi browser",
    techStack: ["React.js", "Pi Sdk", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://coinlet2261.pinet.com",
    image: "/coinlet.png",
  },
  {
    title: "AGDetection",
    category: "ai",
    description:
      "Age and gender detection using real-time video stream analysis with TensorFlow and OpenCV",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/0xZayyad/AGDetection",
    image: "/elon.png",
  },
  {
    title: "VirtualPainter",
    category: "ai",
    description:
      "VirtualPainter is an interactive computer vision application that transforms your webcam into a virtual drawing canvas",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/0xZayyad/VirtualPainter",
    image: "/vp.png",
  },
  {
    title: "Coixa Wallet",
    category: "mobile",
    description: "A non-custodial DeFi wallet for the Pi blockchain",
    techStack: ["Stellar SDK", "TypeScript", "Blockchain", "Web3", "React Native", "Expo"],
    liveUrl: "https://coixa.xyz",
    image: "/dashboard.png",
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
    title: "Fend News",
    category: "mobile",
    description:
      "Search, filter and get latest news trends from various reliable news streams",
    techStack: ["React native", "TypeScript", "API"],
    githubUrl: "https://github.com/0xZayyad/FendNews",
    image: "/fnews.png",
  },
  {
    title: "Student Portal",
    category: "mobile",
    description:
      "Polytechnic students portal app with various tools to help students with their academic journey",
    techStack: ["React native", "TypeScript", "API"],
    githubUrl: "https://github.com/0xZayyad/FPTBStudPort",
    image: "/fnews.png",
  },
  {
    title: "KeyScan",
    category: "cybersecurity",
    description: "An advanced remote keylogging software",
    techStack: ["C++", "Windows API", "Winsock2", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/KeyScan",
    image: "/keyscan2.png",
  },
  {
    title: "Packt",
    category: "cybersecurity",
    description: "Simple command-line based network packet sniffer",
    techStack: ["C", "Networking", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/packt",
    image: "/packt.png",
  },
  {
    title: "sshcred",
    category: "cybersecurity",
    description:
      "An advanced SSH(secure shell) audit tool; brute-force login, gather information and open SSH sessions",
    techStack: ["C++", "SSH", "Protocol", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/packt",
    image: "/sshcred2.png",
  },
  {
    title: "NexScanner",
    category: "cybersecurity",
    description:
      "NexScanner is a discovery tool for admin panel and subdomains",
    techStack: ["Python", "HTTP", "Protocol", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/NexScanner",
    image: "/nexscanner.png",
  },
  {
    title: "Bzip",
    category: "cybersecurity",
    description: "Bzip is a brute force tool for password-protected zip file",
    techStack: ["Python", "Unix/Linux"],
    githubUrl: "https://github.com/4anonz/Bzip",
    image: "/bzip.png",
  },
  {
    title: "HTTPServer",
    category: "cybersecurity",
    description:
      "HTTPServer is a simple Implementation Of HTTP Server in C programming",
    techStack: ["C", "HTTP", "Protocol", "Linux", "Winsock2", "Sockets"],
    githubUrl: "https://github.com/4anonz/HTTPServer",
    image: "/httpserver.png",
  },
];

const categoryList = [
  { label: `All (${projects.length})`, value: null },
  {
    label: `Web3 (${projects.filter((p) => p.category === "web3").length})`,
    value: "web3",
  },
  {
    label: `Cybersecurity (${projects.filter((p) => p.category === "cybersecurity").length
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
  const [activeTab, setActiveTab] = useState("home");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const shortcuts = [
    {
      key: "k",
      metaKey: true,
      action: () => setIsCommandPaletteOpen(true),
    },
    {
      key: "h",
      metaKey: true,
      action: () => setActiveTab("home"),
    },
    {
      key: "s",
      metaKey: true,
      action: () => setActiveTab("skills"),
    },
    {
      key: "p",
      metaKey: true,
      action: () => setActiveTab("projects"),
    },
    {
      key: "a",
      metaKey: true,
      action: () => setActiveTab("about"),
    },
    {
      key: "e",
      metaKey: true,
      action: () => setActiveTab("contact"),
    },
  ];

  useKeyboardShortcuts(shortcuts);

  const commands = [
    {
      id: "home",
      title: "View Home",
      description: "Go to the home page",
      shortcut: "⌘/Ctrl + H",
      action: () => setActiveTab("home"),
    },
    {
      id: "skills",
      title: "View Skills",
      description: "Check out my technical skills",
      shortcut: "⌘/Ctrl + S",
      action: () => setActiveTab("skills"),
    },
    {
      id: "projects",
      title: "View Projects",
      description: "Browse my featured projects",
      shortcut: "⌘/Ctrl + P",
      action: () => setActiveTab("projects"),
    },
    {
      id: "about",
      title: "About Me",
      description: "Learn more about my background",
      shortcut: "⌘/Ctrl + A",
      action: () => setActiveTab("about"),
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch with me",
      shortcut: "⌘/Ctrl + E",
      action: () => setActiveTab("contact"),
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

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };
  // Removed tabValue and handleTabChange (Tabs logic)

  const filterProjects = (category: string | null) =>
    category ? projects.filter((p) => p.category === category) : projects;

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection />;
      case "skills":
        return (
          <Container
            maxWidth="lg"
            sx={{
              py: { xs: 2, md: 4 },
              px: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <SkillsTerminal />
          </Container>
        );
      case "projects":
        return (
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Fira Code",
                fontWeight: 500,
                mb: 2,
                color: "#ABB2BF",
              }}
            >
              {" "}
              Expand to view projects based on category
            </Typography>
            {categoryList.map((cat, _idx) => (
              <Accordion key={cat.label}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontFamily: "Fira Code", fontWeight: 500 }}>
                    {cat.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "grid",
                      gap: { xs: 2, md: 4 },
                      gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(auto-fill, minmax(450px, 1fr))",
                      },
                    }}
                  >
                    {filterProjects(cat.value).map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        );
      case "about":
        return (
          <Container
            maxWidth="lg"
            sx={{
              py: { xs: 2, md: 4 },
              px: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                border: "1px solid #333",
                borderRadius: 1,
                p: { xs: 2, md: 3 },
                overflowX: "auto",
              }}
            >
              <pre
                style={{
                  color: "#ABB2BF",
                  fontFamily: "Fira Code",
                  whiteSpace: "pre-wrap",
                  margin: 0,
                  fontSize: "0.875rem",
                }}
              >
                {`# About Me

## Background
I'm a passionate software engineer with 6+ years of experience in full-stack development, AI/ML, and cybersecurity. My journey began with ethical hacking, but my curiosity led me to explore various domains of technology.

## Philosophy
I believe in writing clean, maintainable code and building solutions that make a real impact with security in mind. My approach combines technical expertise with creative problem-solving.

## Interests
- Building scalable distributed systems
- Exploring AI/ML applications
- Contributing to open-source projects
- Staying updated with cybersecurity trends

## Current Focus
Currently working on innovative projects involving AI, blockchain, and cybersecurity while continuously learning and growing as a developer.`}
              </pre>
            </Box>
          </Container>
        );
      case "contact":
        return (
          <Container
            maxWidth="lg"
            sx={{
              py: { xs: 2, md: 4 },
              px: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <ContactForm />
            <Box sx={{ mt: 4 }}>
              <SocialLinks />
            </Box>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundColor: "#121212",
        }}
      >
        <TerminalTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
        <CommandPalette
          commands={commands}
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
        <KeyboardShortcutsHelp />
      </Box>
    </>
  );
};

export default Index;
