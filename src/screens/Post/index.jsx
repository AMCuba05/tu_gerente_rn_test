import React from 'react'
import { AspectRatio, Box, Center, Heading, HStack, Stack, Text } from "native-base";
import { Post } from "../../components/Post";
import { useRoute } from "@react-navigation/native";

export const PostScreen = () => {
  const route = useRoute()
  const {data, photo} = route.params
  return <Box alignItems="center">
    <Post data={data} photo={photo} />
  </Box>;
};
