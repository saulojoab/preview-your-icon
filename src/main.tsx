import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import {
  StyledBreakpointsTheme,
  createStyledBreakpointsTheme,
} from "styled-breakpoints";
import GlobalTheme from "./global/theme";
import GlobalStyle from "./global/styles";
import "./i18n.js";

const theme = {
  ...GlobalTheme,
  ...(createStyledBreakpointsTheme() as StyledBreakpointsTheme),
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
