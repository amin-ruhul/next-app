import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { fetchUser } from "../api/user";

function Users({ data }) {
  const usersData = useSelector((state) => state.user.users);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetchUser();
    console.log(data);
  };

  return (
    <>
      <div className="border space-y-2 mt-3 shadow-sm w-1/2 m-auto p-4">
        <div className="text-lg font-semibold">{data.name}</div>
        <div className="text-[18px]">{data.email}</div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchUser();
  return {
    props: { data: data },
  };
}

export default Users;
