import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  CircularProgress,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mojojdgd";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        border: "1px solid #333",
        borderRadius: 1,
        p: { xs: 2, md: 3 },
        minWidth: "100%",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#E6DB74",
            fontFamily: "Fira Code",
            mb: 0.5,
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 600,
          }}
        >
          Let's Talk
        </Typography>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            color: "#ABB2BF",
            fontSize: "0.85rem",
          }}
        >
          // Tell me what you need built, improved, or staffed — I'll reply
          within 24 hours
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mb: 3 }}>
        {[
          "MVP builds",
          "Mobile apps",
          "Web3 products",
          "Recruiter outreach",
        ].map((item) => (
          <Box
            key={item}
            sx={{
              px: 1.25,
              py: 0.75,
              border: "1px solid #333",
              borderRadius: "2px",
              color: "#ABB2BF",
              fontFamily: "Fira Code",
              fontSize: "0.72rem",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            {item}
          </Box>
        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
          }}
        >
          <TextField
            required
            name="name"
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#666" }} />
                </InputAdornment>
              ),
            }}
            sx={fieldSx}
          />

          <TextField
            required
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#666" }} />
                </InputAdornment>
              ),
            }}
            sx={fieldSx}
          />

          <TextField
            required
            name="message"
            multiline
            rows={4}
            label="Tell me about your project"
            placeholder="What are you building, what is the timeline, and what outcome matters most?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon
                    sx={{ color: "#666", alignSelf: "flex-start", mt: 1 }}
                  />
                </InputAdornment>
              ),
            }}
            sx={fieldSx}
          />

          <motion.div whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress size={16} sx={{ color: "#00FF00" }} />
                ) : (
                  <SendIcon />
                )
              }
              sx={{
                color: "#00FF00",
                borderColor: "#00FF00",
                fontFamily: "Fira Code",
                height: { xs: "44px", md: "50px" },
                textTransform: "none",
                fontSize: { xs: "0.875rem", md: "1rem" },
                letterSpacing: "0.03em",
                "&:hover": {
                  borderColor: "#00FF00",
                  backgroundColor: "rgba(0,255,0,0.1)",
                  boxShadow: "0 0 20px rgba(0,255,0,0.2)",
                },
                "&:disabled": {
                  color: "#444",
                  borderColor: "#444",
                },
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </Box>
      </form>

      <Button
        component="a"
        href="mailto:adamukala234@gmail.com?subject=Portfolio inquiry"
        startIcon={<AlternateEmailIcon />}
        sx={{
          mt: 2,
          color: "#ABB2BF",
          fontFamily: "Fira Code",
          fontSize: "0.8rem",
          px: 0,
          "&:hover": {
            color: "#E6DB74",
            backgroundColor: "transparent",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          },
        }}
      >
        Prefer email? adamukala234@gmail.com
      </Button>

      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <Alert
              severity={submitStatus}
              sx={{
                mt: 2,
                backgroundColor:
                  submitStatus === "success"
                    ? "rgba(0,255,0,0.08)"
                    : "rgba(255,80,80,0.08)",
                color: submitStatus === "success" ? "#00FF00" : "#FF6060",
                border: `1px solid ${
                  submitStatus === "success" ? "#00FF00" : "#FF6060"
                }`,
                fontFamily: "Fira Code",
                "& .MuiAlert-icon": {
                  color: submitStatus === "success" ? "#00FF00" : "#FF6060",
                },
              }}
            >
              {submitStatus === "success"
                ? "Message sent! I'll get back to you within 24 hours."
                : "Failed to send. Please email me directly at adamukala234@gmail.com"}
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#ABB2BF",
    fontSize: { xs: "0.875rem", md: "1rem" },
    "& fieldset": { borderColor: "#333" },
    "&:hover fieldset": { borderColor: "#555" },
    "&.Mui-focused fieldset": { borderColor: "#00FF00" },
  },
  "& .MuiInputLabel-root": {
    color: "#666",
    "&.Mui-focused": { color: "#00FF00" },
  },
};

export default ContactForm;
