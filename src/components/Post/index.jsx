import React from 'react'
import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from "native-base";

export const Post = ({data, photo}) => {
  return <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
      <Box>
        <AspectRatio w="100%" ratio={4 / 4}>
          <Image source={{
            uri: photo.url
          }} alt="image" />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Text fontWeight="400">
          {data.body}
        </Text>

      </Stack>
    </Box>;
};
