import React from 'react'
import Minter from './components/Minter'
import { WalletProvider } from './state'
import { MetamaskMessage } from './components/Message'

function App() {
  return <WalletProvider>{window.ethereum ? <Minter /> : <MetamaskMessage />}</WalletProvider>
}

export default App
