import React from "react";
import WalletList from "./WalletList";
import "./styles.css";
import AddEditExpenses from "./AddEditExpenses";

export default function App() {
  return (
    <div className="App">
      <h2>Wallet Tracker</h2>
      <WalletList />
      <AddEditExpenses />
    </div>
  );
}
