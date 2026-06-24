import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HexagonIcon from "@mui/icons-material/Hexagon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    icon: RocketLaunchIcon,
    title: "Full-Stack Web Development",
    description:
      "Custom dashboards, SaaS platforms, APIs, admin tools, and customer-facing apps designed for launch and maintainability.",
    stack: ["React / Next.js", "Node.js", "PostgreSQL / MongoDB", "TypeScript"],
    outcome: "Best for MVPs, internal tools, and product rebuilds.",
    color: "#00d9ff",
    glow: "rgba(0,217,255,0.25)",
  },
  {
    icon: PhoneIphoneIcon,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with strong UX, clean state management, API integration, and release-ready builds.",
    stack: ["React Native", "Expo", "TypeScript", "REST / GraphQL"],
    outcome: "Best for validated ideas that need fast mobile delivery.",
    color: "#f97316",
    glow: "rgba(249,115,22,0.25)",
  },
  {
    icon: HexagonIcon,
    title: "Web3 / DeFi Development",
    description:
      "Wallet flows, DeFi integrations, smart contract integrations, and on-chain experiences built with security in mind.",
    stack: ["Solana / Anchor", "Stellar SDK", "Smart Contracts", "Blockchain"],
    outcome: "Best for crypto products that need usable, reliable UX.",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.25)",
  },
];

const workflow = [
  "Scope the product and success metrics",
  "Design the user flow and technical plan",
  "Ship in clear milestones with demos",
  "Support launch, fixes, and iteration",
];

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }} id="services">
      {/* Header */}
      <Box sx={{ mb: { xs: 3, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Fira Code",
            color: "#E6DB74",
            fontWeight: 600,
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 1,
          }}
        >
            What I Build For Clients
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.75,
            backgroundColor: "rgba(0,255,0,0.06)",
            border: "1px solid rgba(0,255,0,0.3)",
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#00FF00",
              animation: "blink 2s ease-in-out infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.3 },
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: "Fira Code",
              color: "#00FF00",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
            }}
          >
            // Available for freelance projects, contract roles, and technical build-outs
          </Typography>
        </Box>
      </Box>

      {/* Service Cards */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Grid size={{ xs: 12, md: 4 }} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "#1E1E1E",
                    border: "1px solid #333",
                    borderRadius: 2,
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: service.color,
                      boxShadow: `0 0 30px ${service.glow}`,
                      transform: "translateY(-4px)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1,
                      backgroundColor: `${service.color}15`,
                      border: `1px solid ${service.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: service.color, fontSize: 22 }} />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      fontWeight: 600,
                      color: "#E6E6E6",
                      fontSize: "1rem",
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#888",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      mb: 2,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    sx={{
                      color: service.color,
                      fontFamily: "Fira Code",
                      fontSize: "0.75rem",
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {service.outcome}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {service.stack.map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          px: 1,
                          py: 0.25,
                          backgroundColor: "#2D2D2D",
                          border: "1px solid #444",
                          borderRadius: "2px",
                          fontFamily: "Fira Code",
                          fontSize: "0.7rem",
                          color: "#ABB2BF",
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid #2A2A2A",
          borderRadius: 1,
          p: { xs: 2, md: 2.5 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#E6DB74",
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          Engagement workflow
        </Typography>
        <Grid container spacing={1.25}>
          {workflow.map((step, idx) => (
            <Grid key={step} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  gap: 1.25,
                  alignItems: "flex-start",
                  color: "#ABB2BF",
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                }}
              >
                <Box
                  sx={{
                    minWidth: 24,
                    height: 24,
                    border: "1px solid rgba(0,255,0,0.35)",
                    color: "#00FF00",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "2px",
                    fontFamily: "Fira Code",
                    fontSize: "0.72rem",
                  }}
                >
                  {idx + 1}
                </Box>
                <Typography sx={{ color: "#ABB2BF", fontSize: "0.82rem" }}>
                  {step}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA */}
      <Box sx={{ mt: { xs: 4, md: 5 }, textAlign: "center" }}>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 64;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: "#00FF00",
              borderColor: "#00FF00",
              fontFamily: "Fira Code",
              fontSize: { xs: "0.875rem", md: "1rem" },
              px: 4,
              py: 1.25,
              borderRadius: "2px",
              textTransform: "none",
              letterSpacing: "0.05em",
              backgroundColor: "rgba(0,255,0,0.04)",
              "&:hover": {
                backgroundColor: "rgba(0,255,0,0.12)",
                borderColor: "#00FF00",
                boxShadow: "0 0 20px rgba(0,255,0,0.3)",
              },
            }}
          >
            Let's Work Together
          </Button>
        </motion.div>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#666",
            fontSize: "0.75rem",
            mt: 1.5,
          }}
        >
          // Typical response within 24 hours
        </Typography>
      </Box>
    </Container>
  );
};

export default ServicesSection;
