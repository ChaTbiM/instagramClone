import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const { data } = await axios.get("/posts");

  return data;
};

const usePosts = () => {
  return useQuery("posts", getPosts, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};

export default usePosts;
