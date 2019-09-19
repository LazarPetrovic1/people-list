import React from "react";
import tachyons from "tachyons";
import { Link } from "react-router-dom";

function UserPresent(props) {
  const { name, username, email, address, company, id } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
      </div>
      <h2>{name}</h2>
      <h3>Username: {username}</h3>
      <p>{email}</p>
      <Link
        to={`/${id}`}
        style={{
          textDecoration: "none",
          borderBottom: "2px solid black",
          padding: "5px 9px",
          color: "#111"
        }}
      >
        Go to {name}
      </Link>
    </div>
  );
}

export default UserPresent;
