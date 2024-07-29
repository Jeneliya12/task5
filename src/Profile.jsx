import React from "react";
import "./profile.css";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;
