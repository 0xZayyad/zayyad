import { Box, Typography, Container, Grid, Button, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";

const clientProjects = [
  {
    client: "Gayu Trading Academy",
    description:
      "A comprehensive academy platform for a professional crypto trader. Built a unified hub where users can explore trading services, enroll in academy programs, and seamlessly join premium trading channels.",
    role: "Product build, frontend architecture, UX implementation",
    impact: "Turned scattered trading offers into a clearer conversion path for students and premium members.",
    techStack: ["Next.js", "Material-UI", "Tailwind CSS", "TypeScript"],
    color: "#fbbf24", // amber/gold
    glow: "rgba(251, 191, 36, 0.25)",
    image: null, // Placeholder for potential future image
  },
  {
    client: "Mishkatul Barakah",
    description:
      "A modern, user-friendly marketing website for an NGO. Designed to clearly communicate their mission, showcase initiatives, and drive engagement from donors and volunteers.",
    role: "Website design, responsive frontend, deployment",
    impact: "Created a cleaner public presence that makes the mission, programs, and support paths easier to understand.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "#f59e0b", // darker amber
    glow: "rgba(245, 158, 11, 0.25)",
    liveUrl: "https://mishkatulbarakah.com.ng",
  },
];

const ClientProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }} id="client-work">
      <Box sx={{ mb: { xs: 3, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Fira Code",
            color: "#fbbf24",
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
          Recent Client Work
        </Typography>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#ABB2BF",
            fontSize: { xs: "0.85rem", md: "1rem" },
          }}
        >
          // Selected freelance projects built for real businesses, with the problem and result made explicit.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {clientProjects.map((project, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={project.client}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #333",
                  borderRadius: 2,
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: project.color,
                    boxShadow: `0 0 30px ${project.glow}`,
                    transform: "translateY(-4px)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Fira Code",
                    fontWeight: 600,
                    color: project.color,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    mb: 2,
                  }}
                >
                  {project.client}
                </Typography>

                <Typography
                  sx={{
                    color: "#ABB2BF",
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    lineHeight: 1.7,
                    mb: 3,
                    flex: 1,
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gap: 1.25,
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#666",
                        fontFamily: "Fira Code",
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      Role
                    </Typography>
                    <Typography sx={{ color: "#D3D7DE", fontSize: "0.86rem", lineHeight: 1.55 }}>
                      {project.role}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#666",
                        fontFamily: "Fira Code",
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      Outcome
                    </Typography>
                    <Typography sx={{ color: "#D3D7DE", fontSize: "0.86rem", lineHeight: 1.55 }}>
                      {project.impact}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap", gap: 1 }}
                  >
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}40`,
                          borderRadius: "4px",
                          fontFamily: "Fira Code",
                          fontSize: "0.7rem",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {project.liveUrl && (
                  <Button
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      alignSelf: "flex-start",
                      color: project.color,
                      fontFamily: "Fira Code",
                      fontSize: "0.85rem",
                      textTransform: "none",
                      px: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  >
                    Visit Website
                  </Button>
                )}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientProjects;
