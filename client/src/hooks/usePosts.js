import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const { data } = await axios.get("/posts");

  return data;
};

const usePosts = () => {
  return useQuery("posts", getPosts, {
    staleTime: 20000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    notifyOnStatusChange: false,
  });
};

export default usePosts;
