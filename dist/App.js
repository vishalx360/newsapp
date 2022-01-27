import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {useQuery} from "../_snowpack/pkg/react-query.js";
import "./App.css.proxy.js";
import {nanoid} from "../_snowpack/pkg/nanoid.js";
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  Stack,
  useColorMode
} from "../_snowpack/pkg/@chakra-ui/react.js";
import News from "./components/news/News.js";
import NavBar from "./components/NavBar/NavBar.js";
import Hero from "./components/Hero/Hero.js";
const API_KEY = "pub_404869503e6dd76590f1382dc4c6150c457d";
const fetchNews = async () => {
  const res = await fetch(`https://newsdata.io/api/1/news?apiKey=${API_KEY}&language=en&country=in`);
  return res.json();
};
function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const {data, status} = useQuery("headline", fetchNews, {
    refetchOnWindowFocus: false
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(Button, {
    position: "fixed",
    top: "3",
    right: "3",
    onClick: toggleColorMode
  }, colorMode), /* @__PURE__ */ React.createElement(Box, {
    pb: "5",
    bg: colorMode === "light" ? "gray.100" : "gray.800",
    className: "App"
  }, /* @__PURE__ */ React.createElement(Heading, {
    my: "5",
    mt: [25, 5, 5, 5],
    color: colorMode === "light" ? "gray.800" : "gray.200"
  }, "Headlines"), status === "error" && /* @__PURE__ */ React.createElement(Text, {
    color: colorMode === "light" ? "gray.800" : "gray.200"
  }, "Error fetching bews"), status === "loading" && /* @__PURE__ */ React.createElement(Text, {
    color: colorMode === "light" ? "gray.800" : "gray.200"
  }, "Fetching news..."), status === "success" && /* @__PURE__ */ React.createElement(Stack, {
    spacing: "5"
  }, data.results.map((news) => /* @__PURE__ */ React.createElement(News, {
    key: nanoid(5),
    data: news
  })))), /* @__PURE__ */ React.createElement(Box, {
    h: "2",
    w: "100%",
    bg: "green.300"
  }));
}
export default App;
