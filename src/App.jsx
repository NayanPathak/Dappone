import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

import { useState } from 'react'
import './App.css'
import {RequestAirdrop} from './Airdrop';

function App() {
  const [count, setCount] = useState(0)

  return (  
    <>
     <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            { /* The `ConnectionProvider` provides the connection to the Solana cluster. */ }
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton /> 
                    <RequestAirdrop />
          
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
      
    </>
  )
}

export default App
