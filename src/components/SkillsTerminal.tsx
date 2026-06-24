import { Box, Typography, Chip, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "Framer Motion"], color: "#00d9ff", level: 90 },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"], color: "#00FF00", level: 85 },
  { category: "Mobile", items: ["React Native", "Expo", "iOS / Android Build Pipeline"], color: "#f97316", level: 80 },
  { category: "Web3", items: ["Solana", "Stellar SDK", "Anchor", "Smart Contracts", "Ethers.js"], color: "#a855f7", level: 75 },
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Rust", "C++", "C"], color: "#E6DB74", level: 85 },
  { category: "Cybersecurity", items: ["Penetration Testing", "Network Sniffing", "Malware Analysis", "Cryptography"], color: "#F92672", level: 70 },
  { category: "DevOps & Tools", items: ["Git", "Docker", "Linux", "AWS", "Vercel", "CI/CD"], color: "#ABB2BF", level: 80 },
];

const SkillsTerminal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        border: "1px solid #333",
        borderRadius: { xs: 1, md: 2 },
        p: { xs: 2, md: 3 },
        width: "100%",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      {/* Terminal header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#ABB2BF",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            mb: 0.5,
          }}
        >
          <Box component="span" sx={{ color: "#F92672" }}>
            $
          </Box>{" "}
          ./show_skills.sh --all
        </Typography>
        <Box
          sx={{
            height: "1px",
            background: "linear-gradient(90deg, #F92672, transparent)",
            mb: 3,
          }}
        />
      </Box>

      {/* Skills Content */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: skillGroup.color,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}
                >
                  {skillGroup.category}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fira Code",
                    color: "#555",
                    fontSize: "0.75rem",
                  }}
                >
                  {skillGroup.level}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={skillGroup.level}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  height: 4,
                  borderRadius: 2,
                  mb: 1.5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: skillGroup.color,
                    borderRadius: 2,
                  },
                }}
              />

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {skillGroup.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    sx={{
                      backgroundColor: "transparent",
                      color: "#ABB2BF",
                      border: "1px solid #333",
                      fontFamily: "Fira Code",
                      fontSize: "0.75rem",
                      borderRadius: "4px",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: skillGroup.color,
                        color: skillGroup.color,
                        backgroundColor: `${skillGroup.color}10`,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Terminal footer prompt */}
      <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#00FF00",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box component="span" sx={{ color: "#F92672" }}>
            $
          </Box>{" "}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "8px",
              height: "14px",
              backgroundColor: "#00FF00",
              animation: "blink 1s step-end infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillsTerminal;
