import axios from "axios";

export async function fetchUser() {
  let config = {
    headers: {
      "Accept-Encoding": "application/json",
    },
  };
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1",
      config
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
