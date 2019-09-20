import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import linkStyle from "../linkStyle";

const User = props => {
  const { name, email, username, id, deleteUser } = props;
  return (
    <Fragment>
      <div
        style={{ position: "relative" }}
        className="tc bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5"
      >
        <span
          onClick={() => deleteUser(id)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 2,
            cursor: "pointer",
            fontSize: "2em"
          }}
          className="pa2"
        >
          &times;
        </span>
        <div>
          <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
        </div>
        <h2>{name}</h2>
        <h3>Username: {username}</h3>
        <p>E-mail: {email}</p>
        <Link to={`/update-user/${id}`} className="ma1" style={linkStyle}>
          Update user
        </Link>
        <Link to={`/user/${id}`} className="ma1" style={linkStyle}>
          Visit {name}
        </Link>
      </div>
    </Fragment>
  );
};

export default User;
