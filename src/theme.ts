import { createTheme } from "@mui/system";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    text: {
      primary: "hsl(215, 15%, 12%)",
      secondary: "hsl(215, 15%, 22%)",
      tertiary: "hsl(215, 15%, 40%)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
  },
  spacing: 2,
  shape: {
    borderRadius: 4,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0d47a1",
      contrastText: "#000",
    },
  },
  spacing: 2,
  shape: {
    borderRadius: 4,
  },
});
