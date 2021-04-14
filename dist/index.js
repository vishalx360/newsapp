import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {QueryClient, QueryClientProvider} from "../_snowpack/pkg/react-query.js";
import {
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider
} from "../_snowpack/pkg/@chakra-ui/react.js";
import App from "./App.js";
const queryClient = new QueryClient();
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(ThemeProvider, {
  theme
}, /* @__PURE__ */ React.createElement(ColorModeProvider, {
  options: {
    initialColorMode: "light",
    useSystsemColorMode: true
  }
}, /* @__PURE__ */ React.createElement(CSSReset, null), /* @__PURE__ */ React.createElement(QueryClientProvider, {
  client: queryClient
}, /* @__PURE__ */ React.createElement(App, null))))), document.getElementById("root"));
