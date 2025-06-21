
import React from 'react';
import { baitFeed } from '../data/mockCreeps';

const BaitFeed = () => {
  return (
    <div className="panel">
      <h2>🎣 Bait Status Feed</h2>
      <ul>
        {baitFeed.map((bait) => (
          <li key={bait.id}>
            🪤 Decoy #{bait.id} | {bait.tokenPair} | {bait.bot} | Burned: {bait.burned}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaitFeed;
