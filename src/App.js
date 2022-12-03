<<<<<<< HEAD
import React from 'react';

=======
import Name from './Name';
import setName from './setName';
>>>>>>> d40ce6d58762d42ae33709c64056ce87454402a0
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
