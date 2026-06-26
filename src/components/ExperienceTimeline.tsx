import { Box, Typography, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SchoolIcon from "@mui/icons-material/School";

const workExperience = [
  {
    period: "Nov 2025 – Present",
    role: "Mobile Engineer",
    company: "Coixa",
    companyUrl: "https://coixa.xyz",
    type: "Full-time",
    tags: ["WEB3", "REACT NATIVE", "BLOCKCHAIN"],
    color: "#00d9ff",
    achievements: [
      "Pioneered architecture for a Web3 wallet, ensuring secure key management and 99.9% uptime",
      "Engineered a modular wallet core and SDK to support dApp integration",
      "Developed a cross-platform React Native/Expo app, achieving 20% faster iteration cycle",
      "Led technical support for 2,000+ active users",
    ],
  },
  {
    period: "Jul 2025 – Dec 2025",
    role: "Technical Lead",
    company: "Geekink",
    companyUrl: "#",
    type: "Contract / Part-time",
    tags: ["EDTECH", "MENTORSHIP", "FULL-STACK"],
    color: "#E6DB74",
    achievements: [
      "Delivered full-stack and mobile engineering curriculum for 50+ developers",
      "Implemented code review standards, reducing production bugs by 40%",
      "Oversaw system architecture, guiding 10+ student projects to successful deployment",
    ],
  },
  {
    period: "Oct 2022 – Mar 2023",
    role: "Software Engineer",
    company: "EMIS (Ministry of Education)",
    companyUrl: "#",
    type: "Contract",
    tags: ["GOVERNMENT", "DATA SYSTEMS", "TEAM LEAD"],
    color: "#a855f7",
    achievements: [
      "Led a team to build a centralised Education Management Information System",
      "Migrated 100k+ records, improving data retrieval efficiency by 90%",
      "Designed analytics dashboards, reducing data entry errors by 40–60% and reporting time by 70%",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Lincoln University",
    period: "2025 – Present",
    note: "In progress · 4.00 / 4.00 CGPA",
    color: "#00FF00",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Federal Polytechnic Bauchi",
    period: "2022 – 2024",
    note: "3.80 / 4.00 CGPA",
    color: "#00d9ff",
  },
];

const ExperienceTimeline = () => {
  return (
    <Box
      sx={{ py: { xs: 1, md: 2 }, width: "100%" }}
    >
      <Box
        sx={{
          backgroundColor: "#1E1E1E",
          border: "1px solid #333",
          borderRadius: { xs: 1, md: 2 },
          p: { xs: 2, md: 3 },
          width: "100%",
        }}
      >
        {/* Work Experience Entries */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "Fira Code",
              color: "#F92672",
              fontSize: "0.8rem",
              mb: 3,
              letterSpacing: "0.1em",
              overflowX: "hidden",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            ═══ WORK EXPERIENCE ═══════════════
          </Typography>

          {workExperience.map((job, idx) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
            >
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                {/* Job header line */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: { xs: 0.5, md: 1 },
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "#666",
                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    [{job.period}]
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: job.color,
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {job.role}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "#ABB2BF",
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                    }}
                  >
                    @
                  </Typography>

                  <Link
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontFamily: "Fira Code",
                      color: "#E6DB74",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      "&:hover": { color: job.color },
                    }}
                  >
                    {job.company}
                    {job.companyUrl !== "#" && (
                      <OpenInNewIcon sx={{ fontSize: 12 }} />
                    )}
                  </Link>

                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "#555",
                      fontSize: "0.75rem",
                    }}
                  >
                    · {job.type}
                  </Typography>
                </Box>

                {/* Tags */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.75,
                    mb: 1.5,
                    pl: { xs: 0, md: 1 },
                  }}
                >
                  {job.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 1,
                        py: 0.2,
                        backgroundColor: `${job.color}15`,
                        border: `1px solid ${job.color}40`,
                        borderRadius: "2px",
                        fontFamily: "Fira Code",
                        fontSize: "0.65rem",
                        color: job.color,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>

                {/* Bullet achievements */}
                <Box sx={{ pl: { xs: 1, md: 2 } }}>
                  {job.achievements.map((ach, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        mb: 0.75,
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          color: job.color,
                          fontFamily: "Fira Code",
                          fontSize: "0.75rem",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </Typography>
                      <Typography
                        sx={{
                          color: "#ABB2BF",
                          fontFamily: "Fira Code",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {ach}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {idx < workExperience.length - 1 && (
                  <Box
                    sx={{
                      mt: 2,
                      ml: { xs: 0, md: 1 },
                      height: "1px",
                      backgroundColor: "#2A2A2A",
                    }}
                  />
                )}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Education */}
        <Divider sx={{ borderColor: "#2A2A2A", mb: 3 }} />
        <Box>
          <Typography
            sx={{
              fontFamily: "Fira Code",
              color: "#F92672",
              fontSize: "0.8rem",
              mb: 3,
              letterSpacing: "0.1em",
              overflowX: "hidden",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            ═══ EDUCATION ═══════════════════════
          </Typography>

          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: { xs: 0.5, md: 1 },
                  mb: 2,
                }}
              >
                <SchoolIcon sx={{ fontSize: 14, color: edu.color }} />
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: "#666",
                    fontSize: { xs: "0.75rem", md: "0.8rem" },
                  }}
                >
                  [{edu.period}]
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: edu.color,
                    fontWeight: 600,
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                  }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: "#ABB2BF",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                  }}
                >
                  — {edu.institution}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: "#666",
                    fontSize: "0.75rem",
                  }}
                >
                  · {edu.note}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceTimeline;
