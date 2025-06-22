import React, { useEffect, useState } from 'react'

const WalletConnect = () => {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
        if (accounts.length) setAccount(accounts[0])
      })
    }
  }, [])

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts[0])
    } else {
      alert('MetaMask not available')
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      {account ? (
        <p>🪙 Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button onClick={connect} style={{ padding: '0.5rem 1rem' }}>
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default WalletConnect
