import {Button, useColorMode} from "../../../_snowpack/pkg/@chakra-ui/react.js";
import {Image} from "../../../_snowpack/pkg/@chakra-ui/image.js";
import {ExternalLinkIcon} from "../../../_snowpack/pkg/@chakra-ui/icons.js";
import {Badge, Box, Heading, Link, Stack, Text} from "../../../_snowpack/pkg/@chakra-ui/layout.js";
import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
export default function News({data}) {
  const {colorMode, toggleColorMode} = useColorMode();
  return /* @__PURE__ */ React.createElement(Stack, {
    direction: "row",
    alignContent: "center",
    w: ["95vw", "500px", "700px", "900px"],
    bg: colorMode === "light" ? "gray.200" : "gray.700",
    border: colorMode === "light" ? "1px" : "",
    borderColor: colorMode === "light" ? "gray.300" : "",
    shadow: "sm",
    rounded: "md",
    transition: "ease-in",
    transitionDuration: "0.2s",
    _hover: {transform: "translate(0px,-3px)", shadow: "md"},
    p: "5"
  }, data.image_url && /* @__PURE__ */ React.createElement(Image, {
    rounded: "md",
    boxSize: ["80px", "100px", "150px", "150px"],
    display: "block",
    objectFit: "cover",
    src: data.image_url,
    mr: "2"
  }), /* @__PURE__ */ React.createElement(Box, {
    color: colorMode === "light" ? "gray.800" : "gray.200",
    textAlign: "start"
  }, /* @__PURE__ */ React.createElement(Heading, {
    as: "h1",
    fontSize: "xl"
  }, data.title), data.author && /* @__PURE__ */ React.createElement(Badge, {
    colorScheme: "green",
    p: "1",
    mt: "2",
    variant: "subtle"
  }, data.creator), /* @__PURE__ */ React.createElement(Text, {
    noOfLines: [1, 2, 3, 4],
    my: "2",
    fontSize: "md"
  }, data.description), /* @__PURE__ */ React.createElement(Link, {
    color: "green.300",
    href: data.link,
    isExternal: true
  }, "Read More ", /* @__PURE__ */ React.createElement(ExternalLinkIcon, {
    mx: "2px"
  }))));
}
