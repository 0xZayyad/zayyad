import { useState, useEffect, useCallback } from "react";
import { Box, IconButton, Typography, Modal, Backdrop } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface ImageGalleryModalProps {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
  projectTitle?: string;
}

const ImageGalleryModal = ({
  images,
  initialIndex = 0,
  open,
  onClose,
  projectTitle,
}: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (open) {
      setImageLoaded(false);
    }
  }, [currentIndex, open]);

  const goToNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, images.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, goToNext, goToPrevious, onClose]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
          },
          timeout: 500,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            p: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }}
        >
          <Box>
            {projectTitle && (
              <Typography
                variant="h6"
                sx={{
                  color: "#00FF00",
                  fontFamily: "Fira Code",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                }}
              >
                {projectTitle}
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{
                color: "#ABB2BF",
                fontFamily: "Fira Code",
                fontSize: { xs: "0.75rem", md: "0.875rem" },
              }}
            >
              {currentIndex + 1} / {images.length}
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#00FF00",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Main Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 1, sm: 2, md: 6 },
            py: { xs: 8, sm: 10, md: 10 },
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 60px", // Space for nav arrows
              }}
            >
              <Box
                component="img"
                src={images[currentIndex]}
                alt={`${projectTitle || "Project"} - Image ${currentIndex + 1}`}
                onLoad={() => setImageLoaded(true)}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: 2,
                  border: "2px solid #333",
                  boxShadow: "0 20px 60px rgba(0, 255, 0, 0.1)",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Loading indicator */}
          {!imageLoaded && (
            <Box
              sx={{
                position: "absolute",
                color: "#00FF00",
                fontFamily: "Fira Code",
              }}
            >
              <Typography>Loading...</Typography>
            </Box>
          )}
        </Box>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: "absolute",
              left: { xs: 8, md: 24 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#00FF00",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
          </IconButton>
        )}

        {currentIndex < images.length - 1 && (
          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              right: { xs: 8, md: 24 },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#00FF00",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
          </IconButton>
        )}

        {/* Thumbnail strip at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: { xs: 2, md: 3 },
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
            display: "flex",
            justifyContent: "center",
            gap: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: 4,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#00FF00",
              borderRadius: 2,
            },
          }}
        >
          {images.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 45, md: 60 },
                objectFit: "cover",
                borderRadius: 1,
                border: idx === currentIndex ? "2px solid #00FF00" : "2px solid #333",
                opacity: idx === currentIndex ? 1 : 0.5,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.05)",
                  borderColor: "#00FF00",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageGalleryModal;
