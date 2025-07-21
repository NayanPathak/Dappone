import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL } from "@solana/web3.js";


export  function RequestAirdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();

    function RequestAirdrop() {
        const publicKey = wallet.publicKey;
        const Amount = document.getElementById("amount").value;
        connection.requestAirdrop(publicKey, Amount * LAMPORTS_PER_SOL)   // 1 SOL = 1e9 lamports

    }
    return (
        <div>

             <input id="amount"
             type="text"
             placeholder="Enter Amount...."></input> <br/>
             <button onClick={RequestAirdrop}>Request Airdrop </button> <br/>
             
        </div>

    )
}