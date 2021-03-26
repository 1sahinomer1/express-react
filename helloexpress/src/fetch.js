import axios from "axios";

export const getData = async () => {
  const response = await axios.get("http://localhost:5000/aktorler");
  const data = await response.data;
  return data;
};
