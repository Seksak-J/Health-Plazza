"use client";
import { useEffect, useState } from "react";
import { LeaderboardEntry } from "../types";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const storedLeaderboard = JSON.parse(
      localStorage.getItem("leaderboard") || "[]"
    );
    setLeaderboard(storedLeaderboard);
  }, []);

  console.log(leaderboard);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardPage;
