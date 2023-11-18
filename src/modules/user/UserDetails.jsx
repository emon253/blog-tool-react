// Assuming 'user' contains the user data retrieved from your backend

import React, { useContext, useEffect, useState } from "react";
import UserInformation from "./UserInformation";
import { UserContext } from "../../context/UserContext";

const UserDetails = () => {
  // const [user,setUser] =  useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  });
  const users = {
    userID: 1,
    fullName: "Yasin Chowdhury",
    username: "yasin",
    email: "yasin@gmail.com",
    password: "*********",
    role: "user",
  };

  return (
    <div>
      <h1>User Details</h1>
      <UserInformation user={users} />
      {/* Other components or content */}
    </div>
  );
};

export default UserDetails;
