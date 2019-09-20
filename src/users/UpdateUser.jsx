import React, { useState, useEffect } from "react";

function UpdateUser(props) {
  const route = props.match.params.id;
  const contents = props.users.filter(user => user.id.toString() === route);
  const details = contents[0];
  const { id, name, username, email } = details;
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: ""
  });

  useEffect(() => {
    setUser({
      id,
      name,
      username,
      email
    });
    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e);
  };

  const onSubmit = () => {
    setUser({
      name: details.name,
      username: details.username,
      email: details.email
    });
    props.history.push("/");
  };

  return (
    <>
      <h1 className="tc ma2">Update the user</h1>
      <form onSubmit={onSubmit} className="measure center">
        <div className="mt3">
          <label htmlFor="name">Name</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="name"
            value={details.name}
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
            value={details.username}
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
            value={details.email}
            placeholder="Email address"
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
    </>
  );
}

export default UpdateUser;
