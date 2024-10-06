import React from "react";

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
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
