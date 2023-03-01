import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userLists, setUserLists] = useState([]);

  const onDeleteUserHandler = (userId) => {
    setUserLists((prevUserLists) => {
      const updatedUsers = prevUserLists.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  const onAddUserHandler = (enteredUser) => {
    setUserLists((prevUserLists) => {
      const updatedUsers = [...prevUserLists];
      updatedUsers.unshift({ ...enteredUser, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userLists} ondelete={onDeleteUserHandler} />
    </div>
  );
}

export default App;
