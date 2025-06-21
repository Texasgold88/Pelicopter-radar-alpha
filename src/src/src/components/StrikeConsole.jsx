import React from 'react';
import { strikeLogs } from '../data/mockCreeps';

const StrikeConsole = () => {
  return (
    <div className="panel">
      <h2>🎯 Strike Console</h2>
      <ul>
        {strikeLogs.map((log, index) => (
          <li key={index}>{log.msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default StrikeConsole;
