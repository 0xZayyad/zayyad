import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import "@fontsource/fira-code";
import "@fontsource/roboto-mono";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FF00",
    },
    secondary: {
      main: "#F92672",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: "Roboto Mono, monospace",
    h1: { fontFamily: "Fira Code, monospace" },
    h2: { fontFamily: "Fira Code, monospace" },
    h3: { fontFamily: "Fira Code, monospace" },
    h4: { fontFamily: "Fira Code, monospace" },
    h5: { fontFamily: "Fira Code, monospace" },
    h6: { fontFamily: "Fira Code, monospace" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Index />
      <Analytics />
    </ThemeProvider>

  );
}

export default App;
