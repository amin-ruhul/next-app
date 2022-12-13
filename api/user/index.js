import axios from "axios";
import instance from "../../services/axios";

export async function fetchUser() {
  try {
    const response = await instance.get("/users/1");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
