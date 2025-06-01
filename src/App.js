import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contract/lottery.js";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState("0");
  const [winner, setWinner] = useState("");
  const [playerCount, setPlayerCount] = useState(0);


  // Connect Wallet
  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);

      const lotteryContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      setContract(lotteryContract);
    } else {
      alert("Please install MetaMask!");
    }
  }

  // Participate in Lottery
  async function participate() {
    try {
      const tx = await contract.participate({ value: ethers.BigNumber.from("10") });
      await tx.wait();
      alert("Participation successful!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
    
  }async function fetchPlayerCount() {
  const count = await contract.getPlayersCount();
  setPlayerCount(count.toString());
}


  // Get Balance
  async function fetchBalance() {
    const bal = await contract.getBalance();
    setBalance(ethers.utils.formatEther(bal));
  }

  // Pick Winner (manager only)
  async function pickWinner() {
    try {
      const tx = await contract.pickWinner();
      await tx.wait();
      alert("Winner picked!");
    } catch (err) {
      alert("Only manager can pick winner.");
    }
  }

  // Get Winner
  async function getWinner() {
    const win = await contract.winner();
    setWinner(win);
  }

  return (
    <div className="app-container">
      <h1>🎲 LotttoChain</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected: {account}</p>
          <button onClick={participate}>Participate (1 ETH)</button>
          <button onClick={fetchBalance}>Check Contract Balance</button>
          <button onClick={pickWinner}>Pick Winner</button>
          <button onClick={getWinner}>Get Winner</button>
          

          <p>Contract Balance: {balance} ETH</p>
          <p>Players Participated: {playerCount}</p>
          <p>Winner: {winner}</p>
        </div>
      )}
    </div>
  );
}

export default App;
