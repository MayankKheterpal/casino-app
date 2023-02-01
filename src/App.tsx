import React from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./customTheme";
import { AppRouter } from "./router";

function App() {
  const customTheme = createTheme(theme);
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Box height="100vh" display="flex" flexDirection="column">
          <AppRouter />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
