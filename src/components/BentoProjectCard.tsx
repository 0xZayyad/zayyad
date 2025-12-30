import { useState } from "react";
import { Box, Typography, Link, Chip, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CollectionsIcon from "@mui/icons-material/Collections";
import ImageGalleryModal from "./ImageGalleryModal";

interface BentoProjectCardProps {
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

const categoryColors = {
  web3: {
    start: "#00d9ff",
    end: "#00ff88",
    glow: "rgba(0, 217, 255, 0.3)",
  },
  cybersecurity: {
    start: "#a855f7",
    end: "#ec4899",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  ai: {
    start: "#3b82f6",
    end: "#6366f1",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  mobile: {
    start: "#f97316",
    end: "#fbbf24",
    glow: "rgba(249, 115, 22, 0.3)",
  },
};

const BentoProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  images,
  category,
  size = "small",
}: BentoProjectCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleImages = images && images.length > 0;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors.web3;

  const gridSpan = {
    small: { gridColumn: "span 1", gridRow: "span 1" },
    medium: { gridColumn: { xs: "span 1", md: "span 2" }, gridRow: "span 1" },
    large: { gridColumn: { xs: "span 1", md: "span 2" }, gridRow: { xs: "span 1", md: "span 2" } },
  };

  return (
    <>
      <Box
        component={motion.div}
        sx={gridSpan[size]}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            border: "2px solid",
            borderColor: isHovered ? "transparent" : "#333",
            borderRadius: 2,
            p: size === "large" ? 4 : 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 2,
              padding: "2px",
              background: isHovered
                ? `linear-gradient(135deg, ${colors.start}, ${colors.end})`
                : "transparent",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            },
            boxShadow: isHovered
              ? `0 0 40px ${colors.glow}, 0 0 80px ${colors.glow}`
              : "none",
          }}
        >
          {/* Image Section */}
          {image && (
            <Box
              sx={{
                position: "relative",
                cursor: hasMultipleImages ? "pointer" : "default",
                mb: 2,
                borderRadius: 1,
                overflow: "hidden",
                height: size === "large" ? { xs: "200px", md: "300px" } : "180px",
              }}
              onClick={() => hasMultipleImages && setIsGalleryOpen(true)}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.8) contrast(1.1)",
                  }}
                />
              </motion.div>

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${colors.start}20, ${colors.end}20)`,
                  opacity: isHovered ? 0.6 : 0.3,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Multiple Images Badge */}
              {hasMultipleImages && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.5,
                    py: 0.75,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 1,
                    border: `1px solid ${colors.start}`,
                  }}
                >
                  <CollectionsIcon sx={{ fontSize: 16, color: colors.start }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.start,
                      fontFamily: "Fira Code",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {images.length}
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* Content Section */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography
              variant={size === "large" ? "h5" : "h6"}
              sx={{
                fontFamily: "Fira Code",
                fontSize: size === "large" ? { xs: "1.5rem", md: "2rem" } : "1.25rem",
                fontWeight: 600,
                mb: 1.5,
                background: `linear-gradient(135deg, ${colors.start}, ${colors.end})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#ABB2BF",
                fontSize: size === "large" ? "1rem" : "0.875rem",
                lineHeight: 1.6,
                mb: 2,
                flex: 1,
              }}
            >
              {description}
            </Typography>

            {/* Tech Stack - Animated on Hover */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: 1,
                mb: 2,
              }}
            >
              {techStack.slice(0, size === "large" ? 8 : 5).map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Chip
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: isHovered ? "#2E2E2E" : "#252525",
                      color: isHovered ? colors.start : "#888",
                      borderRadius: 1,
                      fontSize: "0.75rem",
                      fontFamily: "Fira Code",
                      fontWeight: 500,
                      border: `1px solid ${isHovered ? colors.start + "40" : "#333"}`,
                      transition: "all 0.3s ease",
                    }}
                  />
                </motion.div>
              ))}
              {techStack.length > (size === "large" ? 8 : 5) && (
                <Chip
                  label={`+${techStack.length - (size === "large" ? 8 : 5)}`}
                  size="small"
                  sx={{
                    backgroundColor: "#252525",
                    color: "#888",
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontFamily: "Fira Code",
                  }}
                />
              )}
            </Stack>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0.6,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              <Stack direction="row" spacing={2}>
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: colors.start,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontFamily: "Fira Code",
                      "&:hover": {
                        color: colors.end,
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      Code
                    </Typography>
                  </Link>
                )}
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: colors.start,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontFamily: "Fira Code",
                      "&:hover": {
                        color: colors.end,
                      },
                    }}
                  >
                    <LaunchIcon fontSize="small" />
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      Demo
                    </Typography>
                  </Link>
                )}
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </Box>

      {hasMultipleImages && (
        <ImageGalleryModal
          images={images}
          open={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          projectTitle={title}
        />
      )}
    </>
  );
};

export default BentoProjectCard;
