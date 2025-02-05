import React from "react";
import User from "./User";
import { Link } from "react-router-dom";
import linkStyle from "../linkStyle";

function UserList(props) {
  const { users, deleteUser, ascend, descend } = props;

  return (
    <>
      <div className="pa1 ma2">
        <button
          className="f6 grow no-underline br-pill ph3 pv2 ma2 dib white bg-black"
          style={{ outline: "none" }}
          onClick={ascend}
        >
          ASC
        </button>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 ma2 dib white bg-black"
          style={{ outline: "none" }}
          onClick={descend}
        >
          DESC
        </button>
        <Link to="/add" className="dib pa2 ma2" style={linkStyle}>
          Add another user
        </Link>
      </div>
      <div className="tc">
        {users.map(user => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
            address={user.address}
            company={user.company}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </>
  );
}

export default UserList;
