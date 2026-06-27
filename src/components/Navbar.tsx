import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Drawer, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { scrollTo } from "../utils/scrollUtils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Client Work", href: "#client-work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle keyboard events for drawer accessibility
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && drawerOpen) {
        setDrawerOpen(false);
      }
      // Arrow down/up navigation within drawer (optional enhancement)
      // Could be implemented here if needed
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    setTimeout(() => scrollTo(href), drawerOpen ? 300 : 0);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: 0,
          backgroundColor: "#00FF00",
          color: "#121212",
          padding: "0.5rem 1rem",
          zIndex: 1000,
          fontFamily: "Fira Code",
          fontSize: "0.875rem",
          "&:focus": {
            top: 0,
          },
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
      </Box>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          height: "64px",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 5 },
          backgroundColor: scrolled
            ? "rgba(18,18,18,0.85)"
            : "rgba(18,18,18,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.03 }}
          onClick={() => scrollTo("#home")}
          sx={{ cursor: "pointer", userSelect: "none", flex: 1 }}
        >
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#00FF00",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box component="span" sx={{ color: "#F92672" }}>
              &gt;
            </Box>{" "}
            0xZayyad
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: "8px",
                height: "16px",
                backgroundColor: "#00FF00",
                ml: 0.5,
                animation: "blink 1s step-end infinite",
                "@keyframes blink": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0 },
                },
              }}
            />
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <Stack
          direction="row"
          spacing={0}
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          {navLinks.map((link, i) => (
            <Box
              key={link.label}
              component={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Box
                onClick={() => handleNavClick(link.href)}
                sx={{
                  px: 2.5,
                  py: 1,
                  cursor: "pointer",
                  fontFamily: "Fira Code",
                  fontSize: "0.875rem",
                  color: "#ABB2BF",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                  userSelect: "none",
                  "&:hover": {
                    color: "#00FF00",
                    backgroundColor: "rgba(0,255,0,0.06)",
                  },
                }}
              >
                {link.label}
              </Box>
            </Box>
          ))}

          {/* Hire Me CTA */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            sx={{ ml: 1 }}
          >
            <Box
              onClick={() => handleNavClick("#contact")}
              sx={{
                px: 2.5,
                py: 0.85,
                cursor: "pointer",
                fontFamily: "Fira Code",
                fontSize: "0.875rem",
                color: "#121212",
                backgroundColor: "#00FF00",
                borderRadius: "4px",
                fontWeight: 700,
                userSelect: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#00CC00",
                  boxShadow: "0 0 16px rgba(0,255,0,0.35)",
                },
              }}
            >
              Start a Project
            </Box>
          </Box>
        </Stack>

        {/* Mobile Hamburger */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#ABB2BF",
            "&:hover": { color: "#00FF00" },
          }}
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, // Better portal mounting
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#1A1A1A",
            width: "75vw",
            maxWidth: "300px",
            borderLeft: "1px solid #2A2A2A",
            px: 3,
            py: 4,
          },
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            id="drawer-title"
            sx={{
              fontFamily: "Fira Code",
              color: "#00FF00",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            <Box component="span" sx={{ color: "#F92672" }}>
              &gt;
            </Box>{" "}
            menu
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#666", "&:hover": { color: "#ABB2BF" } }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <AnimatePresence>
          {drawerOpen && (
            <Stack spacing={1}>
              {navLinks.map((link, i) => (
                <Box
                  key={link.label}
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    py: 1.5,
                    px: 2,
                    cursor: "pointer",
                    fontFamily: "Fira Code",
                    fontSize: "1rem",
                    color: "#ABB2BF",
                    borderRadius: "4px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#00FF00",
                      backgroundColor: "rgba(0,255,0,0.06)",
                    },
                  }}
                >
                  <Box component="span" sx={{ color: "#F92672", mr: 1.5 }}>
                    →
                  </Box>
                  {link.label}
                </Box>
              ))}

              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => handleNavClick("#contact")}
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 2,
                  cursor: "pointer",
                  fontFamily: "Fira Code",
                  fontSize: "1rem",
                  color: "#121212",
                  backgroundColor: "#00FF00",
                  borderRadius: "4px",
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  "&:hover": { backgroundColor: "#00CC00" },
                }}
              >
                Hire Me
              </Box>

              {/* Availability badge */}
              <Box
                sx={{
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid #2A2A2A",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#00FF00",
                    flexShrink: 0,
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
                    fontSize: "0.75rem",
                    color: "#00FF00",
                  }}
                >
                  Available for projects and roles
                </Typography>
              </Box>
            </Stack>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Navbar;
