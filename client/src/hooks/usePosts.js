import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const { data } = await axios.get("/posts");

  return data;
};

const usePosts = (users) => {
  return useQuery("posts", getPosts, {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    notifyOnStatusChange: true,
  });
};

export default usePosts;
