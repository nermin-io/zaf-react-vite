import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  DEFAULT_THEME,
  IGardenTheme,
  ThemeProvider,
} from "@zendeskgarden/react-theming";

const theme = (parentTheme: IGardenTheme): IGardenTheme => ({
  ...parentTheme,
  colors: {
    ...parentTheme.colors,
    primaryHue: "#333",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider focusVisibleRef={null} theme={theme(DEFAULT_THEME)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
