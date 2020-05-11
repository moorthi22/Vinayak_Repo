import React from "react";
import WalletList from "./WalletList";
import "./styles.css";
import AddEditExpenses from "./AddEditExpenses";

export default function App() {
  return (
    <div className="App">
      <h1>Wallet Tracker</h1>
      <WalletList />
      <AddEditExpenses />
    </div>
  );
}
