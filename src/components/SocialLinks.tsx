import { Box, Link, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const socialLinks = [
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/0xZayyad",
    color: "#00FF00",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://linkedin.com/in/0xZayyad",
    color: "#0077B5",
  },
  {
    name: "Twitter(X)",
    icon: TwitterIcon,
    url: "https://x.com/0xZayyad",
    color: "#1DA1F2",
  },
  {
    name: "Email",
    icon: EmailIcon,
    url: "mailto:adamukala234@gmail.com",
    color: "#EA4335",
  },
];

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 3, md: 4 },
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Tooltip
              title={link.name}
              placement="top"
              sx={{
                "& .MuiTooltip-tooltip": {
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #333",
                  color: link.color,
                  fontFamily: "Fira Code",
                  fontSize: "0.75rem",
                },
              }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "48px", md: "56px" },
                  height: { xs: "48px", md: "56px" },
                  borderRadius: "50%",
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #333",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#2D2D2D",
                    color: link.color,
                    borderColor: link.color,
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <Icon
                  sx={{
                    fontSize: { xs: "24px", md: "28px" },
                  }}
                />
              </Link>
            </Tooltip>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default SocialLinks;
