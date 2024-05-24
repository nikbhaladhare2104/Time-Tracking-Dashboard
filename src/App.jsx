import InfoCard from "./components/InfoCard";
import { data } from "../constants/data";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("daily");
  const [timeFrame, setTimeFrame] = useState("Yesterday");
  const handleChange = (e) => {
    if (e === "daily") {
      setTime("daily");
      setTimeFrame("Yesterday");
    } else if (e === "weekly") {
      setTime("weekly");
      setTimeFrame("Last Week");
    } else if (e === "monthly") {
      setTime("monthly");
      setTimeFrame("Last Month");
    }
    // console.log(e);
  };
  return (
    <main>
      <div className="container">
        <ProfileCard onChange={handleChange} />
        {data.map((data) => (
          <InfoCard
            key={data.title}
            data={data}
            timeType={time}
            timeframe={timeFrame}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
