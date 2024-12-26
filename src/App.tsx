import Button from "./components/Button/Button";
import Box from "@mui/system/Box";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";
import { useDarkMode } from "./contexts/dark_mode_context";

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
          width: "200px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: theme.shape.borderRadius,
        })}
      >
        <Button size="medium" onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </Box>
    </ThemeProvider>
  );
}
