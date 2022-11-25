import React, { useEffect, useState } from "react";
import { Button, Center, Text } from "native-base";
import { SearchBar } from "../../components/SearchBar";
import axios from "../../axios";
import { getUsers } from "../../constants/endpoints";
import { storeUserId } from "../../utils";
import { useNavigation } from "@react-navigation/native";

export const WelcomeScreen = () => {

  const navigation = useNavigation()

  const [users, setUsers] = useState([])
  const [text, setText] = useState()
  const [user, setUser] = useState()

  useEffect(()=> {
    void getAllUsers()
  }, [])

  const onChangeText = text => setText(text)

  const getAllUsers = async () => {
    try {
      const {data} = await axios.get(getUsers)
      setUsers(data)
    } catch (e) {
      alert(e)
    }
  }

  const findUser = async () => {
    const filtered = users.filter( element => element.email.toLowerCase() == text.toLowerCase())
    if (filtered.length > 0) {
      setUser(filtered[0])
      await storeUserId(`${filtered[0].id}`)
    } else {
      alert(`No se encontro el Usuario con correo: ${text}`)
      setUser(null)
    }
  }

  const goToPosts = () => {
    navigation.navigate('Posts')
  }

  return <Center >
    <SearchBar onChangeText={onChangeText} onPress={findUser} />
    {user ? <Center>
      <Text fontSize="2xl">{text}</Text>
      <Button size={'lg'} onPress={goToPosts}>INGRESAR</Button>
    </Center> : null
    }
  </Center>;
}
