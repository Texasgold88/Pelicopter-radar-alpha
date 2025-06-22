import React, { useState, useEffect } from 'react'
import mockCreeps from './data/mockCreeps'
import WalletConnect from './components/WalletConnect'
const App = () => {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(mockCreeps)
  const [alerts, setAlerts] = useState([])

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

  // Simulate new alerts every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = mockCreeps[Math.floor(Math.random() * mockCreeps.length)]
      const timestamp = new Date().toLocaleTimeString()
      setAlerts(prev => [
        { ...newAlert, timestamp },
        ...prev.slice(0, 9)
      ])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212", minHeight: "100vh", fontFamily: "monospace" }}>
      <h1>🦅 JusticeRadar: Creep Watch</h1>
<WalletConnect />
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

      <hr style={{ margin: "2rem 0", borderColor: "#333" }} />

      <h2 style={{ marginBottom: "1rem" }}>📢 Dynamic Threat Alerts</h2>
      <div style={{ maxHeight: "200px", overflowY: "auto", background: "#1d1d1d", padding: "1rem", borderRadius: "6px" }}>
        {alerts.length === 0 ? (
          <p>No alerts yet.</p>
        ) : (
          alerts.map((alert, idx) => (
            <div key={idx} style={{ marginBottom: "0.75rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>
              <strong>{alert.timestamp}</strong> – <span style={{ color: "#ff4444" }}>{alert.name}</span> ({alert.wallet}) flagged for <em>{alert.reason}</em>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
