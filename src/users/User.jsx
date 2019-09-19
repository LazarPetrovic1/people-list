import React from "react";
import { Link } from "react-router-dom";
import tachyons from "tachyons";

const User = props => {
  const { users } = props;
  const id = parseInt(props.match.params.id) - 1;
  console.log(props);
  const currentUser = users[id];
  return !currentUser ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
        <div>
          <img
            src={`https://robohash.org/${id + 1}?size=380x380`}
            alt="Robot"
          />
        </div>
        <h2>{currentUser.name}</h2>
        <h3>Username: {currentUser.username}</h3>
        <p>E-mail: {currentUser.email}</p>
        <p>
          Hello, I am {currentUser.name.split(" ")[0]}, and I'm, from{" "}
          {currentUser.address.city}. I work for {currentUser.company.name}, and
          we always say: "{currentUser.company.catchPhrase}".
        </p>
        <p>
          {currentUser.address.suite} {currentUser.address.street},{" "}
          {currentUser.address.zipcode}
        </p>
      </div>
      <Link
        to="/"
        className="db pa2 ma2"
        style={{
          textDecoration: "none",
          border: "2px solid black",
          padding: "5px 9px",
          color: "#111"
        }}
      >
        Go back
      </Link>
    </>
  );
};

export default User;
