import React from "react";

const ProfileCard = (props) => {
  const handleClick = (e) => {
    props.onChange(e);
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
        <p className="interval-title" onClick={() => handleClick("daily")}>
          Daily
        </p>
        <p className="interval-title" onClick={() => handleClick("weekly")}>
          Weekly
        </p>
        <p className="interval-title" onClick={() => handleClick("monthly")}>
          Monthly
        </p>
      </div>
    </div>
  );
};
export default ProfileCard;
