import { useEffect, useState } from "react";
import { getUsers } from "./services/userServices";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError("Kullanıcı Yüklenemedi...");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  if (isLoading) {
    return <h2>Yükleniyor</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Kullanıcı ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h1>Kullanıcılar</h1>
      <ul>
        <UserList users={users} search={search} />
      </ul>
    </div>
  );
}

export default App;
