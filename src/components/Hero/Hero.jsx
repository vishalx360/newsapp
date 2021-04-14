import React from "react";
import { Image, Box, Heading, Text, Link, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import "./Hero.css";

let src =
  "https://static01.nyt.com/images/2021/04/13/us/13chauvin-blog-protests3/merlin_186365787_e5b717ce-2b98-4441-bb60-f0f0b4bd5222-facebookJumbo.jpg";
function Hero() {
  return (
    <Box id="hero">
      <Image fit="cover" display="block" w="100vw" h="100%" src={src} />
      <Box
        position="absolute"
        left={["0%", "5%", "10%", "10%"]}
        bottom={["10%", "10%", "10%", "20%"]}
        textOverflow="ellipsis"
        textAlign="start"
        zIndex="3"
        w={["90%", "80%", "70%", "60%"]}
        p="5"
      >
        <Badge colorScheme="gray" p="1" variant="subtle">
          troop withdrawa
        </Badge>
        <Heading
          mt="2"
          color="white"
          fontSize={["1.3em", "1.5em", "1.8em", "2em"]}
        >
          Biden draws on long history with the war in Afghanistan as he prepares
          to announce troop withdrawa.
        </Heading>

        <Text color="gray.100" fontSize="1.2em" my="5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fuga.
        </Text>
        <Link color="gray.100" href="#" isExternal>
          Read More <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  );
}

export default Hero;
