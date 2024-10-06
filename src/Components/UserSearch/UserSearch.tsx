import React, { useState } from "react";

interface UserSearchProps {
  onSearch: (name: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={name}
        placeholder="Введите имя пользователя"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch} >
        Поиск
      </button>
    </div>
  );
};
