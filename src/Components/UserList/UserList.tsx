import React from "react";
import { User } from "../User/User";

interface UserListProps {
  users: { name: string; email: string; id: number; avatar: string }[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="list">
      {users.length > 0 ? (
        users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            avatar={`https://i.pravatar.cc/150?u=${user.id}`}
          />
        ))
      ) : (
        <p>Пользователи не найдены</p>
      )}
    </div>
  );
};
