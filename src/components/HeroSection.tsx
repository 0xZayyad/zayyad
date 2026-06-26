import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const typingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  "SaaS & dashboards",
  "Mobile apps",
  "Web3 / DeFi",
  "AI integrations",
];

const proofPoints = [
  { value: "6+", label: "years shipping software" },
  { value: "2k+", label: "users supported" },
  { value: "100k+", label: "records migrated" },
];

const HeroSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: { xs: "auto", md: "90vh" },
        pt: { xs: 12, md: 0 }, // Add pt for sticky nav offset on mobile
        pb: { xs: 4, md: 0 },
        display: "flex",
        alignItems: "center",
      }}
      id="home"
    >
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left column */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: "relative" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              {/* Whoami prompt */}
              <motion.div variants={typingVariants}>
                <Typography
                  variant="h4"
                  className="glitch"
                  data-text="whoami"
                  sx={{
                    color: "#00FF00",
                    fontFamily: "Fira Code",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  $ whoami
                </Typography>
              </motion.div>

              {/* Name */}
              <motion.div variants={typingVariants}>
                <Typography
                  variant="h2"
                  className="glitch"
                  data-text="Mohammed Zayyad"
                  sx={{
                    color: "#E6DB74",
                    fontFamily: "Fira Code",
                    mb: 1.5,
                    fontSize: { xs: "2.35rem", sm: "3rem", md: "3.85rem" },
                    wordBreak: "break-word",
                    fontWeight: 700,
                    lineHeight: 1.05,
                  }}
                >
                  Mohammed Zayyad
                </Typography>
              </motion.div>

              {/* Tagline */}
              <motion.div variants={typingVariants}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FD971F",
                      fontFamily: "Fira Code",
                      fontSize: { xs: "1.1rem", md: "1.4rem" },
                      mb: 1.5,
                      lineHeight: 1.4,
                    }}
                  >
                    Full-stack, mobile, and Web3 engineer for products that need
                    to launch, scale, and earn trust.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {services.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(0,255,0,0.07)",
                          color: "#00FF00",
                          border: "1px solid rgba(0,255,0,0.3)",
                          borderRadius: "2px",
                          fontFamily: "Fira Code",
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>

              {/* Bio / description */}
              <motion.div variants={typingVariants}>
                <Box
                  sx={{
                    p: { xs: 1.75, md: 2.25 },
                    backgroundColor: "rgba(0,0,0,0.3)",
                    border: "1px solid #333",
                    borderRadius: 1,
                    maxWidth: "680px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ABB2BF",
                      fontFamily: "Roboto Mono",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    I help founders, teams, and recruiters turn rough ideas into
                    reliable software: polished frontend experiences, secure
                    APIs, mobile apps, dashboards, and blockchain integrations
                    with measurable delivery.
                  </Typography>
                </Box>

                <Grid
                  container
                  spacing={1.25}
                  sx={{ mt: 2.5, maxWidth: "680px" }}
                >
                  {proofPoints.map((point) => (
                    <Grid key={point.label} size={{ xs: 4 }}>
                      <Box
                        sx={{
                          height: "100%",
                          p: { xs: 1.25, sm: 1.5 },
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid #2A2A2A",
                          borderRadius: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#00FF00",
                            fontFamily: "Fira Code",
                            fontWeight: 700,
                            fontSize: { xs: "1.05rem", md: "1.35rem" },
                            lineHeight: 1.1,
                          }}
                        >
                          {point.value}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#8F9BA8",
                            fontSize: { xs: "0.68rem", sm: "0.75rem" },
                            lineHeight: 1.35,
                          }}
                        >
                          {point.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Social links */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <SocialLinks />
                </Box>

                {/* CTA Buttons */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    gap: 1.25,
                    justifyContent: { xs: "center", md: "flex-start" },
                    flexWrap: "wrap",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("contact");
                        if (el) {
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY -
                            64;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                      sx={{
                        backgroundColor: "#00FF00",
                        color: "#121212",
                        fontFamily: "Fira Code",
                        fontWeight: 700,
                        px: 3,
                        py: 1.1,
                        borderRadius: "2px",
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        "&:hover": {
                          backgroundColor: "#00CC00",
                          boxShadow: "0 0 20px rgba(0,255,0,0.4)",
                        },
                      }}
                    >
                      Start a Project
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      component="a"
                      href="/Q2-2026-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<DescriptionIcon />}
                      sx={{
                        color: "#00FF00",
                        borderColor: "#00FF00",
                        fontFamily: "Fira Code",
                        fontSize: { xs: "0.8rem", md: "0.875rem" },
                        px: 2.5,
                        py: 1,
                        borderRadius: "2px",
                        backgroundColor: "rgba(0,255,0,0.04)",
                        "&:hover": {
                          backgroundColor: "rgba(0,255,0,0.12)",
                          boxShadow: "0 0 12px rgba(0,255,0,0.3)",
                        },
                      }}
                    >
                      View Resume
                    </Button>
                  </motion.div>

                  <Button
                    href="#client-work"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("client-work");
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 64;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    variant="text"
                    startIcon={<WorkOutlineIcon />}
                    sx={{
                      color: "#ABB2BF",
                      fontFamily: "Fira Code",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      px: 1,
                      py: 1,
                      borderRadius: "2px",
                      "&:hover": {
                        color: "#E6DB74",
                        backgroundColor: "rgba(230,219,116,0.08)",
                      },
                    }}
                  >
                    See Client Work
                  </Button>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0.75, sm: 2 }}
                  sx={{
                    mt: 2,
                    color: "#6F7A86",
                    fontFamily: "Fira Code",
                    fontSize: "0.75rem",
                  }}
                >
                  <Box component="span">Response under 24h</Box>
                  <Box component="span">Remote-friendly</Box>
                  <Box component="span">Contract or full-time</Box>
                </Stack>
              </motion.div>
            </motion.div>
          </Box>
        </Grid>

        {/* Right column — photo */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Box
              className="retro-monitor"
              sx={{
                position: "relative",
                maxWidth: { xs: "280px", sm: "350px", md: "400px" },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background: "linear-gradient(45deg, #00FF00, #00d9ff)",
                    borderRadius: "10px",
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/me.jpg"
                  alt="Mohammed Zayyad — Software Engineer"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: { xs: "300px", md: "500px" },
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #333",
                    position: "relative",
                    zIndex: 1,
                    filter: "contrast(1.05) brightness(0.95)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 100%)",
                    mixBlendMode: "overlay",
                    zIndex: 2,
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
