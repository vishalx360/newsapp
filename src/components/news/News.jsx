import { Button, useColorMode } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Badge, Box, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";

export default function News({ data }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      direction="row"
      alignContent="center"
      // justifyContent="center"
      w={["95vw", "500px", "700px", "900px"]}
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      border={colorMode === "light" ? "1px" : ""}
      borderColor={colorMode === "light" ? "gray.300" : ""}
      shadow="sm"
      rounded="md"
      transition="ease-in"
      transitionDuration="0.2s"
      _hover={{ transform: "translate(0px,-3px)", shadow: "md" }}
      p="5"
    >
      <Image
        rounded="md"
        boxSize={["80px", "100px", "150px", "150px"]}
        display="block"
        objectFit="cover"
        src={data.urlToImage}
        mr="2"
      />

      <Box
        color={colorMode === "light" ? "gray.800" : "gray.200"}
        textAlign="start"
      >
        <Heading as="h1" fontSize="xl">
          {data.title}
        </Heading>
        {data.author && (
          <Badge colorScheme="green" p="1" mt="2" variant="subtle">
            {data.author}
          </Badge>
        )}

        <Text noOfLines={[1, 2, 3, 4]} my="2" fontSize="md">
          {data.description}
        </Text>
        <Link color="green.300" href={data.url} isExternal>
          Read More <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Stack>
  );
}
