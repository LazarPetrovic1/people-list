import React from "react";
import { Link } from "react-router-dom";
import linkStyle from "../linkStyle";

function UserPresent(props) {
  const { users } = props;
  const route = props.match.params.id;
  const theRealUser = users.filter(user => user.id === parseInt(route));
  const user = theRealUser[0];
  const { name, username, email, id } = user;

  return (
    <div className="tc bg-light-green dib br3 pa3 bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}?size=400x400`} alt="Robot" />
      </div>
      <h2>{name}</h2>
      <h3>Username: {username}</h3>
      <p>{email}</p>
      <p>
        Hello! My name is {name.split(" ")[0]} , and I'm a developer. You can
        always find me at home, which is at{" "}
        {user.address ? user.address.street : user.street} street in{" "}
        {user.address ? user.address.city : user.city}.
      </p>
      <p>Thank you for coming to my page and I hope to hear from you.</p>
      <Link to="/" className="ma1" style={linkStyle}>
        Go back
      </Link>
    </div>
  );
}

export default UserPresent;
