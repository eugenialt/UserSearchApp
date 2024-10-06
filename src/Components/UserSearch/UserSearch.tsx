import React, { useState } from "react";
import "./UserSearch.css";

interface UserSearchProps {
  onSearch: (name: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <div className="user-search">
      <input
        className="user-search-input"
        type="text"
        value={name}
        placeholder="Введите имя пользователя"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="user-search-button" onClick={handleSearch}>
        Поиск
      </button>
    </div>
  );
};