import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import LoadingPage from "./common/LoadingPage";

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  if (users == null) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Users List</h1>
      <div style={{ overflow: "auto" }}>
        <table id="user-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>username</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>company</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                onClick={() => navigate(`/${u.username}/${u.id}/posts`)}
              >
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.company.name}</td>
                <td>{`${u.address.street}, ${u.address.suite}, ${u.address.city}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
