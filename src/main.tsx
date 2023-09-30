import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  DEFAULT_THEME,
  IGardenTheme,
  ThemeProvider,
} from "@zendeskgarden/react-theming";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = (parentTheme: IGardenTheme): IGardenTheme => ({
  ...parentTheme,
  colors: {
    ...parentTheme.colors,
    primaryHue: "#333",
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider focusVisibleRef={null} theme={theme(DEFAULT_THEME)}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
