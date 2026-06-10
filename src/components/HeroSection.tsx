import { useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SocialLinks from "./SocialLinks";

const typingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const lineCount = useMotionValue(0);
  const lineWidth = useTransform(lineCount, [0, 100], [0, 100]);

  useEffect(() => {
    const controls = animate(lineCount, 100, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: { xs: "auto", md: "90vh" },
        py: { xs: 4, md: 0 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: "relative" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div variants={typingVariants}>
                <Typography
                  variant="h4"
                  className="glitch"
                  data-text="$ whoami"
                  sx={{
                    color: "#00FF00",
                    fontFamily: "Fira Code",
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    "&::before": {
                      content: '"$"',
                      color: "#F92672",
                      mr: 1,
                    },
                  }}
                >
                  $ whoami
                </Typography>
              </motion.div>

              <motion.div variants={typingVariants}>
                <Typography
                  variant="h2"
                  className="glitch"
                  data-text="Mohammed Zayyad"
                  sx={{
                    color: "#E6DB74",
                    fontFamily: "Fira Code",
                    mb: 2,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
                    wordBreak: "break-word",
                  }}
                >
                  Mohammed Zayyad
                </Typography>
              </motion.div>

              <motion.div variants={typingVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#FD971F",
                    fontFamily: "Fira Code",
                    mb: 3,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Software Engineer & Cyber Security
                </Typography>
              </motion.div>

              <motion.div variants={typingVariants}>
                <Box
                  className="terminal-window"
                  sx={{
                    p: { xs: 1.5, md: 2 },
                    backgroundColor: "rgba(0,0,0,0.3)",
                    border: "1px solid #333",
                    borderRadius: 1,
                    maxWidth: "600px",
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
                    With 6+ years of experience in web & mobile development,
                    AI/ML, and cybersecurity. Passionate about building
                    innovative solutions that push technological boundaries.
                    Actively building in web3 space.
                  </Typography>
                </Box>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                  <SocialLinks />
                </Box>
              </motion.div>

              <motion.div
                style={{
                  width: lineWidth.get() + "%",
                  height: "1px",
                  background: "#00FF00",
                  marginTop: "2rem",
                }}
              />
            </motion.div>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Box
              className="retro-monitor"
              sx={{
                position: "relative",
                maxWidth: { xs: "280px", sm: "400px" },
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
                    background: "linear-gradient(45deg, #00FF00, transparent)",
                    borderRadius: "10px",
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/me.jpg"
                  alt="Professional headshot"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: { xs: "300px", md: "500px" },
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #333",
                    position: "relative",
                    zIndex: 1,
                    filter: "contrast(1.1) brightness(0.9)",
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
