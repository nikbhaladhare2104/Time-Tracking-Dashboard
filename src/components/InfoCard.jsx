import React from "react";

import { data } from "../../constants/data";
const InfoCard = ({ data, timeframe, timeType }) => {
  return (
    <div
      className="info-card"
      style={{
        backgroundColor: data.backgroundColor,
      }}
    >
      <img src={data.icon} alt={data.title} className="icon" />
      <div className="info">
        <div className="info-div">
          <p className="info-title">{data.title}</p>
          <img src="/images/icon-ellipsis.svg" alt="info icon" />
        </div>
        <div className="timeframes">
          <p className="info-time">{data.timeframes[timeType].current}hrs</p>
          <p className="previous-time">
            {timeframe} - {data.timeframes[timeType].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
