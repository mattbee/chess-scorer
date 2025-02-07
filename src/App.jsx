import React, { useState } from 'react';
import './App.css';
import ChessScoreBoard from './components/ChessScoreBoard';

function App() {
  return (
    <div className="App">
      <h1>Chess Score Calculator</h1>
      <ChessScoreBoard />
    </div>
  );
}

export default App;
