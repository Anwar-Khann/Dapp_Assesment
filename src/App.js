import React from 'react';
import './App.css';
import Balance from './Balance';
import Name from './Name';
import ResetName from './ResetName';
import SetScan from './SetScan';

function App() {
  return (
    <div className="App">
      <SetScan></SetScan>
      <Name></Name>
      <Balance></Balance>
      <ResetName></ResetName>
    </div>
  );
}

export default App;
