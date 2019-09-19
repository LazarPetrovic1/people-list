import React from "react";
import UserPresent from "./UserPresent";

function UserList(props) {
  const { users } = props;

  console.log(props);

  return (
    <div className="UserList">
      {users.map(user => (
        <UserPresent
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
          address={user.address}
          company={user.company}
        />
      ))}
    </div>
  );
}

export default UserList;
