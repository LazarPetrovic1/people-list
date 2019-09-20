props.users[parseInt(route - 1)].name
  ? props.users[parseInt(route - 1)].name

const editUser = () => {
  return (
    <Fragment>
      <h1 className="tc ma2">Add a new user.</h1>
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

        <input
          className="mt3 pa2 ba bg-transparent hover-bg-black hover-white w-100 grow"
          type="submit"
          value="Register"
        />
      </form>
    </Fragment>
  );
};
