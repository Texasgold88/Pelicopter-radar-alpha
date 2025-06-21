import React from 'react';
import { creepLog } from '../data/mockCreeps';

const CreepLog = () => {
  return (
    <div className="panel">
      <h2>📛 Creep Registry</h2>
      <ul>
        {creepLog.map((entry, index) => (
          <li key={index}>
            [📛] {entry.bot} — {entry.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreepLog;
