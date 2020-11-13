import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

const useUsers = () => {
  return useQuery("users", fetchUsers, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};

export default useUsers;
