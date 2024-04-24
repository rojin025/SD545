import React, { useState } from "react";
import axios from "axios";

interface CheckInProps {
  onCheckIn: (name: string) => void;
}

function CheckIn({ onCheckIn }: CheckInProps) {
  const [userName, setUserName] = useState("");

  const handleCheckIn = async () => {
    try {
      if (!userName) {
        throw new Error("No Input");
      }
      const response = await axios.get("SOME_URL");
      if (!response.data.success) {
        throw new Error("Error Fetching Data.");
      }
      onCheckIn(userName);
      setUserName("");
    } catch (error) {
      console.error("Error checking in:", error);
    }
  };

  return (
    <div>
      <h2>Check In</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleCheckIn}>Check In</button>
    </div>
  );
}

export default CheckIn;
