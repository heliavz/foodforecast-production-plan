import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4BBFBF", // Foodforecast teal
      dark: "#3A9E9E", // darker teal for active states
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E8734A", // coral/red from Screenshot 3 active slot
    },
    urgency: {
      normal: "#4BBFBF", // teal — on track
      warning: "#F5A623", // amber — running behind
      critical: "#E8734A", // coral — significantly behind
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#757575",
      muted: "#BDBDBD",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
      tableHeader: "#F0F0F0",
      activeSlot: "#FFF3E0", // very light warm tint for active column
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    fontSize: 14,
    productName: {
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    articleNumber: {
      fontWeight: 400,
      fontSize: "0.75rem",
      color: "#BDBDBD",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
