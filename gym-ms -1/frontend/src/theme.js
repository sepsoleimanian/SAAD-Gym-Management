import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    // Name of the component
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#ffb733",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#FFA500",
          },
        },
      },
    },
  },
});

export default theme;
