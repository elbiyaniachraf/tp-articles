import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <p><strong>Nom:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Ville:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;