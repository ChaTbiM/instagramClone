import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

const useUsers = () => {
  return useQuery("users", fetchUsers, {
    staleTime: 200000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    notifyOnStatusChange: true,
  });
};

export default useUsers;
