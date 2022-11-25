import React, { useEffect, useState } from "react";
import { AspectRatio, Box, Center, Container, Flex, Heading, HStack, Image, Pressable, Text } from "native-base";
import axios from "../../axios";
import { getPhotos, getUserPosts } from "../../constants/endpoints";
import { useNavigation } from "@react-navigation/native";

export const PostItem = ({item}) => {

  const navigation = useNavigation()

  const [photo, setPhoto] = useState()

  useEffect(() => {
    void getPostPhotos()
  }, [])

  const getPostPhotos = async () => {
    try {
      const {data} = await axios.get(getPhotos(item.id))
      setPhoto(data[0])
    } catch (e) {
      alert(e)
    }
  }

  const goToPost = () => {
    navigation.navigate('Post', {data: item, photo: photo })
  }

  return <Box mr={"2"} ml={"2"} mb={"2"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }}>
    <Pressable
      onPress={goToPost}
    >
      <Flex direction={'row'} >
        <Image source={{
          uri: photo ? photo.thumbnailUrl : ''
        }} alt="image" size={"md"}/>
        <Flex>
          <Text pr={"100"}>
            {item.title}
          </Text>
        </Flex>
      </Flex>
    </Pressable>
  </Box>;
}
