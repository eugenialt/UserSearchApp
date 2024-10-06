import React from "react";
import "./User.css";

interface UserProps {
  name: string;
  email: string;
  avatar: string;
}

export const User: React.FC<UserProps> = ({ name, email, avatar }) => {
  return (
    <div className="user">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="user-avatar" 
      />
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
};
