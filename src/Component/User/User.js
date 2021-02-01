import React from "react";
import "./User.css";
function User() {
  let users = [
    { name: "nadhem", email: "nadhem@gmail.com", phone: "4545454" },
    { name: "taki", email: "taki@gmail.com", phone: "4545454" },
    { name: "ghassen", email: "ghassen@gmail.com", phone: "4545454" },
    { name: "mourad", email: "mourad@gmail.com", phone: "4545454" },
    { name: "mahdi", email: "mahdi@gmail.com", phone: "4545454" },
    { name: "seif", email: "seif@gmail.com", phone: "4545454" },
    { name: "sarra", email: "sarra@gmail.com", phone: "4545454" },
  ];
  return (
    // <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="users">
      {users.map((el, i) => (
        <div key={i}>
          <img
            width="200px"
            src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
            alt="avatar"
          />
          <p>{el.name}</p>
          <p>{el.phone}</p>
          <p>{el.email}</p>
          <button>See More</button>
        </div>
      ))}
    </div>
  );
}

export default User;
