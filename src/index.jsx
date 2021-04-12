// Imports
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/react";
// main component
import App from "./App.jsx";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystsemColorMode: true,
        }}
      >
        <CSSReset />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
