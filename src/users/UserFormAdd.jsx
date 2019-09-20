import React, { useState, Fragment } from "react";
import uuid from "uuid";

function UserFormAdd(props) {
  let newId = parseInt(uuid.v4(), 10);
  let ids = [];
  props.users.forEach(user => ids.push(user.id));

  while (ids.includes(newId) || Number.isNaN(newId)) {
    newId = parseInt(uuid.v4(), 10 + 10);
  }

  const [user, setUser] = useState({
    id: newId,
    name: "",
    username: "",
    email: "",
    street: "",
    city: ""
  });

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, username, email, street, city } = user;

  const onSubmit = () => {
    setUser({
      ...user,
      name,
      username,
      email,
      street,
      city
    });

    console.log(user);

    props.users.push(user);
    console.log("NEW ID", newId, "\n", "USER", user);
    props.history.push("/");
  };

  return (
    <Fragment>
      <h1 className="tc ma2">Add a new user</h1>
      <form onSubmit={onSubmit} className="measure center">
        <div className="mt3">
          <label htmlFor="name">Name</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={onChange}
            required
          />
        </div>
        <div className="mt3">
          <label htmlFor="username">Username</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={onChange}
            required
          />
        </div>
        <div className="mt3">
          <label htmlFor="email">Email</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={onChange}
            required
          />
        </div>
        <hr />
        <div className="mt3">
          <label htmlFor="city">City</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="city"
            value={city}
            placeholder="Your city"
            onChange={onChange}
            required
          />
        </div>
        <div className="mt3">
          <label htmlFor="street">Street</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="street"
            value={street}
            placeholder="Your street"
            onChange={onChange}
            required
          />
        </div>
        <input
          className="mt3 pa2 ba bg-transparent hover-bg-black hover-white w-100 grow"
          type="submit"
          value="Update"
        />
      </form>
    </Fragment>
  );
}

export default UserFormAdd;
