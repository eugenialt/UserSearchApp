import { UserList } from "../Components/UserList/UserList";
import { UserSearch } from "../Components/UserSearch/UserSearch";
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Ошибка при загрузке пользователей");
        }

        let context = await response.json();
        setUsers(context);
        setFilteredUsers(context);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (input: string) => {
    if (!input.trim()) {
      setFilteredUsers(users);
      return;
    }

    const lastName = input.trim().toLowerCase();

    const result = users.filter((user: { name: string }) => {
      const nameParts = user.name.toLowerCase().split(" ");
      const userLastName = nameParts[nameParts.length - 1];
      return userLastName.startsWith(lastName);
    });

    setFilteredUsers(result);
  };

  return (
    <div className="App">
      <h1>Поиск пользователей</h1>
      <UserSearch onSearch={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
