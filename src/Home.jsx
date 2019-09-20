import React from "react";
import UserList from "./users/UserList";
import { Link } from "react-router-dom";
import linkStyle from "./linkStyle";

function Home(props) {
  const { deleteUser, users, ascend, descend } = props;

  return (
    <>
      <div className="pa1 ma2">
        <button
          className="f6 grow no-underline br-pill ph3 pv2 ma2 dib white bg-black"
          style={{ outline: "none" }}
          onClick={() => ascend()}
        >
          ASC
        </button>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 ma2 dib white bg-black"
          style={{ outline: "none" }}
          onClick={() => descend()}
        >
          DESC
        </button>
        <Link to="/add" className="dib pa2 ma2" style={linkStyle}>
          Add another user
        </Link>
      </div>
      <UserList deleteUser={deleteUser} users={users} />
    </>
  );
}

export default Home;
