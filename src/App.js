import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import UserFormUpdate from "./users/UserFormUpdate";
import UserFormAdd from "./users/UserFormAdd";
// eslint-disable-next-line
import tachyons from "tachyons";
import UserList from "./users/UserList";
import UserPresent from "./users/UserPresent";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  }, []);

  const deleteUser = id => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };

  const ascend = () => {
    setUsers([]);
    setTimeout(() => {
      setUsers(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
    }, 10);
  };

  const descend = () => {
    setUsers([]);
    setTimeout(function() {
      setUsers(users.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse());
    }, 10);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <UserList
              ascend={ascend}
              descend={descend}
              deleteUser={deleteUser}
              users={users}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={props => <UserFormAdd {...props} users={users} />}
        />
        <Route
          path="/update-user/:id"
          render={props => <UserFormUpdate {...props} users={users} />}
        />
        <Route
          path="/user/:id"
          render={props => <UserPresent {...props} users={users} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
