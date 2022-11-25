import React, { useEffect, useState } from "react";
import { Center, ScrollView } from "native-base";
import axios from "../../axios";
import { getUserId } from "../../utils";
import { getUserPosts, getUsers } from "../../constants/endpoints";
import { PostItem } from "../../components/PostItem";

export const PostsScreen = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=> {
    void getPosts()
  }, [])

  const getPosts = async () => {
    try {
      const id = await getUserId()
      const {data} = await axios.get(getUserPosts(id))
      setPosts(data)
    } catch (e) {
      alert(e)
    }
  }

  return <ScrollView>
    {posts.map( post => <PostItem item={post}></PostItem> )}
  </ScrollView>
}
