import { useState } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import BentoProjectCard from "./BentoProjectCard";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  images?: string[];
  category: string;
  size?: "small" | "medium" | "large";
}

interface BentoGridProps {
  projects: Project[];
  categories: Array<{ label: string; value: string | null }>;
}

const BentoGrid = ({ projects, categories }: BentoGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Category Filter Pills */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Fira Code",
            fontWeight: 500,
            mb: 2,
            color: "#ABB2BF",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          $ ls ./projects --filter-by=
          <Box
            component="span"
            sx={{
              color: "#00FF00",
              animation: "blink 1s step-end infinite",
            }}
          >
            {selectedCategory || "all"}
          </Box>
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {categories.map((cat) => {
            const isActive = cat.value === selectedCategory;
            return (
              <motion.div
                key={cat.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Chip
                  label={cat.label}
                  onClick={() => setSelectedCategory(cat.value)}
                  sx={{
                    backgroundColor: isActive ? "#2E2E2E" : "#1E1E1E",
                    color: isActive ? "#00FF00" : "#ABB2BF",
                    border: "1px solid",
                    borderColor: isActive ? "#00FF00" : "#333",
                    borderRadius: 1,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    fontFamily: "Fira Code",
                    fontWeight: 500,
                    px: { xs: 1, md: 2 },
                    py: { xs: 0.5, md: 1 },
                    height: "auto",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isActive
                      ? "0 0 20px rgba(0,255,0,0.2)"
                      : "none",
                    "&:hover": {
                      borderColor: "#00FF00",
                      backgroundColor: "#2E2E2E",
                    },
                  }}
                />
              </motion.div>
            );
          })}
        </Stack>
      </Box>

      {/* Bento Grid Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory || "all"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 2, md: 3 },
              gridAutoRows: "minmax(300px, auto)",
              // Ensure proper grid flow
              gridAutoFlow: "dense",
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ display: "contents" }}
              >
                <BentoProjectCard {...project} />
              </motion.div>
            ))}
          </Box>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                px: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Fira Code",
                  color: "#ABB2BF",
                  mb: 2,
                }}
              >
                $ echo "No projects found"
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Fira Code",
                  color: "#666",
                }}
              >
                Try selecting a different category
              </Typography>
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default BentoGrid;
