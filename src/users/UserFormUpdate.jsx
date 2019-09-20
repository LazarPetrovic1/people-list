import React, { useState, Fragment } from "react";

function UserFormUpdate(props) {
  const route = props.match.params.id;
  const theRealUserPull = props.users.filter(user =>
    route <= 10
      ? user.id === parseInt(route)
      : parseInt(user.id, 10) === parseInt(route, 10)
  );
  const theRealUser = theRealUserPull[0];
  console.log(theRealUser);

  const [user, setUser] = useState({
    id: route,
    name: "",
    username: "",
    email: ""
  });

  const [newUser, setNewUser] = useState({
    id: route,
    name: theRealUser.name,
    username: theRealUser.username,
    email: theRealUser.email
  });

  console.log(theRealUser);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setNewUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, username, email } = user;

  const onSubmit = () => {
    console.log("INDEX OF THE REAL USER", props.users.indexOf(theRealUser));
    setNewUser({
      id: route,
      name,
      username,
      email
    });
    props.users.push(newUser);
    const targetUserToRemove = props.users.find(user => user.id === route);
    props.history.push("/");
    const index = parseInt(targetUserToRemove.id);
    console.log("INDEX", index);
    return index <= 10
      ? props.users.splice(parseInt(index - 1), 1)
      : props.users.splice(parseInt(props.users.indexOf(theRealUser)), 1);
  };

  return (
    <Fragment>
      <h1 className="tc ma2">Update the user</h1>
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
          <p>Previous name: {theRealUser.name}</p>
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
          <p>Previous username: {theRealUser.username}</p>
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
          <p>Previous email: {theRealUser.email}</p>
        </div>
        <hr />
        <input
          className="mt3 pa2 ba bg-transparent hover-bg-black hover-white w-100 grow"
          type="submit"
          value="Update"
        />
      </form>
    </Fragment>
  );
}

export default UserFormUpdate;
