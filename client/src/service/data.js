import axios from "axios";

export const getCats = async () => {
  const {
    data: { images }
  } = await axios.get(`http://localhost:4500/cats`);
  return images;
};
