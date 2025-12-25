import React from "react";
import UserItem from "./UserItem";

function UserList({ users, search }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredUsers.length === 0) {
    return <li>Kullanıcı Bulunamadı</li>;
  }

  return (
    <>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
}

export default UserList;
