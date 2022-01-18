import React from "react";

const Leaderboard = (props) => {
  const { score, highScore } = props;
  return (
    <div class="leaderboardWrapper">
      <div style={{ textAlign: "center" }}>
        <h1>MEMORY GAME</h1>
      </div>
      <div>
        <h3>Score: {score}</h3>
      </div>
      <div>
        <h3>Best Score: {highScore}</h3>
      </div>
    </div>
  );
};

export default Leaderboard;
