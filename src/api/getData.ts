import axios from "axios";

export const getData = async () => {
  const res = await axios.get("http://demo7919674.mockable.io/");
  return res.data;
};
