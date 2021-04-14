import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./App.css";
import { nanoid } from "nanoid";
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import News from "./components/news/News";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

// vars
const API_KEY = "bbbecd9c85ec4499aacda1d1dc1e7ba2";
// fetch
const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${API_KEY}`
  );
  return res.json();
};
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data, status } = useQuery("headline", fetchNews, {
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <NavBar />
      <Button position="fixed" top="3" right="3" onClick={toggleColorMode}>
        {colorMode}
      </Button>
      {/* main */}
      <Box
        pb="5"
        bg={colorMode === "light" ? "gray.100" : "gray.800"}
        className="App"
      >
        <Hero />
        <Heading
          my="5"
          mt={[25, 5, 5, 5]}
          color={colorMode === "light" ? "gray.800" : "gray.200"}
        >
          Headlines
        </Heading>
        {status === "error" && (
          <Text color={colorMode === "light" ? "gray.800" : "gray.200"}>
            Error fetching bews
          </Text>
        )}
        {status === "loading" && (
          <Text color={colorMode === "light" ? "gray.800" : "gray.200"}>
            Fetching news...
          </Text>
        )}
        {status === "success" && (
          <Stack spacing="5">
            {data.articles.map((news) => (
              <News key={nanoid(5)} data={news} />
            ))}
          </Stack>
        )}
      </Box>
      {/* footer */}
      <Box h="2" w="100%" bg="green.300"></Box>
    </>
  );
}

export default App;
