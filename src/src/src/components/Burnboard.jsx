
import React from 'react';
import { burnboard } from '../data/mockCreeps';

const Burnboard = () => {
  return (
    <div className="panel">
      <h2>🔥 Burnboard Leaderboard</h2>
      <ol>
        {burnboard.map((entry, index) => (
          <li key={index}>
            🥇 {entry.bot} — {entry.burned}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Burnboard;
