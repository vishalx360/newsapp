import { Button, useColorMode, Text } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      px="5"
      h="10"
      bg="green.500"
      position="fixed"
      top="0"
      left="0"
      shadow="md"
      borderRadius="0 0 10px 0"
      zIndex="5"
    >
      <Text fontSize="1.2em">newsapp</Text>
    </Stack>
  );
}
