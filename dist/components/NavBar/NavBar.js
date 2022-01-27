import {Button, useColorMode, Text} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import {Box, Stack} from "../../../_snowpack/pkg/@chakra-ui/layout.js";
import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
export default function NavBar() {
  return /* @__PURE__ */ React.createElement(Stack, {
    justifyContent: "space-between",
    direction: "row",
    alignItems: "center",
    px: "5",
    h: "10",
    bg: "green.500",
    position: "fixed",
    top: "0",
    left: "0",
    shadow: "md",
    borderRadius: "0 0 10px 0",
    zIndex: "5"
  }, /* @__PURE__ */ React.createElement(Text, {
    fontSize: "1.2em"
  }, "newsapp"));
}
