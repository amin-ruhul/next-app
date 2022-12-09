import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: null,
  email: null,
  phone: null,
  address: null,
  loading: null,
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },

    addUser: (state) => {
      console.log(state);
      state.users = [
        ...state.users,
        {
          name: state.name,
          email: state.email,
          phone: state.phone,
          address: state.address,
        },
      ];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { updateName, updateEmail, updatePhone, updateAddress, addUser } =
  userSlice.actions;
