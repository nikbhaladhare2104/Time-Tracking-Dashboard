import React, { useState } from "react";

const ProfileCard = (props) => {
  const [key, setKey] = useState("daily");
  const handleClick = (e) => {
    props.onChange(e);
    setKey(e);
  };
  return (
    <div className="profile-card">
      <div className="profile">
        <img
          src="/images/profile_pic.png"
          alt="profile image"
          className="profile-img"
        />
        <div className="profile-info">
          <p className="profile-report">Report for</p>
          <p className="profile-name">Nikhil Bhaladhare</p>
        </div>
      </div>
      <div className="interval">
        <p
          className="interval-title"
          style={{
            color: key === "daily" && "white",
            backgroundColor: key == "daily" && "var(--Hover-Dark-blue)",
          }}
          onClick={() => handleClick("daily")}
        >
          Daily
        </p>
        <p
          className="interval-title"
          style={{
            color: key === "weekly" && "white",
            backgroundColor: key == "weekly" && "var(--Hover-Dark-blue)",
          }}
          onClick={() => handleClick("weekly")}
        >
          Weekly
        </p>
        <p
          className="interval-title"
          style={{
            color: key === "monthly" && "white",
            backgroundColor: key == "monthly" && "var(--Hover-Dark-blue)",
          }}
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};
export default ProfileCard;
