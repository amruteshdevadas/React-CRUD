import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

//THIS will provide data to all children

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      userName: "Person 1",
      email: "person1@gmail.com",
      dateOfBirth: "2000-11-01",
    },
    {
      userName: "Person 2",
      email: "person2@gmail.com",
      dateOfBirth: "2000-11-02",
    },
    {
      userName: "Person 3",
      email: "person3@gmail.com",
      dateOfBirth: "2000-11-03",
    },
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};
