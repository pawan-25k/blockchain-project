# blockchain-project
# 🎲 Lottery DApp

A simple Ethereum-based lottery decentralized application (DApp) built with **Solidity**, **React.js**, **Ethers.js**, and deployed on the **Sepolia testnet**. Participants can join the lottery by paying Ether, and a random winner is picked by the contract manager.

---

## 🚀 Features

- Connect MetaMask wallet
- Participate in the lottery by sending ETH
- View contract balance
- Pick a random winner (manager only)
- Display the winning address

---

## 🛠️ Tech Stack

- **Solidity** – Smart contract logic
- **Remix** – Contract deployment
- **React.js** – Frontend framework
- **Ethers.js** – Ethereum interaction library
- **MetaMask** – Wallet for sending transactions
- **Sepolia Testnet** – Ethereum test network

---

## 📦 Project Structure
src/
├── contract/
│   └── lottery.js            # Contract ABI and deployed Sepolia address
│
├── components/               # (Optional) Reusable UI components
│   └── WalletButton.js       # Button to connect MetaMask wallet
│
├── utils/                    # (Optional) Utility/helper functions
│   └── format.js             # Example: ETH formatter or string shortener
│
├── App.js                    # Main React component for the DApp
