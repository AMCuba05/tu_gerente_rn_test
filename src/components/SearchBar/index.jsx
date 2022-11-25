import React from 'react';
import { Box, Divider, Heading, Icon, Input, VStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export const SearchBar = ({onChangeText, onPress}) => {
  return <VStack space={5} alignSelf="center">
    <Input
      placeholder="Search People & Places"
      width="100%"
      borderRadius="4"
      onChangeText={onChangeText}
      py="3"
      px="1"
      fontSize="14"
      InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons onPress={onPress} name="search" />} />}
    />
    </VStack>;
}
