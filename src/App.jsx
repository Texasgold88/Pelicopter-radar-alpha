
import React from 'react'
import mockCreeps from './data/mockCreeps'

const App = () => {
  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212" }}>
      <h1>JusticeRadar: Creep Watch</h1>
      <ul>
        {mockCreeps.map(creep => (
          <li key={creep.id}>
            <strong>{creep.name}</strong> ({creep.wallet}) – {creep.reason}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
