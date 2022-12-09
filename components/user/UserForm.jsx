import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  updateName,
  updateEmail,
  updatePhone,
  updateAddress,
  addUser,
} from "../../store/userSlice";

function UserForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const registerUser = () => {
    dispatch(addUser());
    router.push("/users");
  };
  return (
    <div className="space-y-5 border p-5 mt-4">
      <div className=" w-full flex flex-col space-y-2">
        <label htmlFor="name">Full Name-</label>
        <input
          type="text"
          placeholder="Enter full Name"
          className="w-full p-3 ring-1"
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>

      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-3 ring-1"
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>

      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="name">Phone</label>
        <input
          type="number"
          placeholder="Enter phone number"
          className="w-full p-3 ring-1"
          onChange={(e) => dispatch(updatePhone(e.target.value))}
        />
      </div>

      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="name">Home Address</label>
        <input
          type="text"
          placeholder="Enter home address"
          className="w-full p-3 ring-1"
          onChange={(e) => dispatch(updateAddress(e.target.value))}
        />
      </div>

      <button
        className="w-full py-3 bg-slate-900 text-white "
        onClick={registerUser}
      >
        Add Data
      </button>
    </div>
  );
}

export default UserForm;
