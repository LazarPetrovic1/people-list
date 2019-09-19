import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./users/UserList";
import User from "./users/User";
import axios from "axios";
import tachyons from "tachyons";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <div className="tc">
          <Route exact path="/" render={props => <UserList users={users} />} />
          <Route
            path="/:id"
            render={props => <User {...props} users={users} />}
          />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
