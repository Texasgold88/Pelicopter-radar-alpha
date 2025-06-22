import React, { useState } from 'react'
import mockCreeps from './data/mockCreeps'

const App = () => {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(mockCreeps)

  const handleSearch = (e) => {
    e.preventDefault()
    const lower = query.toLowerCase()
    const result = mockCreeps.filter(
      creep =>
        creep.name.toLowerCase().includes(lower) ||
        creep.wallet.toLowerCase().includes(lower)
    )
    setFiltered(result)
  }

  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212", minHeight: "100vh" }}>
      <h1>JusticeRadar: Creep Watch</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={query}
          placeholder="Search by wallet or name"
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "80%",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #555"
          }}
        />
        <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}>Scan</button>
      </form>

      <ul>
        {filtered.length === 0 ? (
          <p>No creeps detected.</p>
        ) : (
          filtered.map(creep => (
            <li key={creep.id} style={{ marginBottom: "0.75rem" }}>
              <strong>{creep.name}</strong> ({creep.wallet}) – {creep.reason}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
