import React from 'react';
import Header  from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/Addtransaction';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider/>
      <Header/>
      <div classname="container">
      <Balance />
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
