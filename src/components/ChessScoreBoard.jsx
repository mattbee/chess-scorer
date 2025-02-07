import React, { useState } from 'react';
import './ChessScoreBoard.css';

const pieceValues = {
  pawn: 1,
  knight: 3,
  bishop: 3,
  rook: 5,
  queen: 9
};

function ChessScoreBoard() {
  const [whiteCaptured, setWhiteCaptured] = useState({
    pawn: 0,
    knight: 0,
    bishop: 0,
    rook: 0,
    queen: 0
  });

  const [blackCaptured, setBlackCaptured] = useState({
    pawn: 0,
    knight: 0,
    bishop: 0,
    rook: 0,
    queen: 0
  });

  const calculateScore = (captures) => {
    return Object.entries(captures).reduce((total, [piece, count]) => {
      return total + (pieceValues[piece] * count);
    }, 0);
  };

  const handlePieceCapture = (color, piece, increment) => {
    const setState = color === 'white' ? setWhiteCaptured : setBlackCaptured;
    const currentState = color === 'white' ? whiteCaptured : blackCaptured;

    const newCount = Math.max(0, currentState[piece] + increment);
    setState({ ...currentState, [piece]: newCount });
  };

  return (
    <div className="chess-score-board">
      <div className="player-section">
        <h2>White Captured</h2>
        {Object.entries(whiteCaptured).map(([piece, count]) => (
          <div key={`white-${piece}`} className="piece-counter">
            <span>{piece}</span>
            <button onClick={() => handlePieceCapture('white', piece, -1)}>-</button>
            <span>{count}</span>
            <button onClick={() => handlePieceCapture('white', piece, 1)}>+</button>
          </div>
        ))}
        <div className="score">Score: {calculateScore(whiteCaptured)}</div>
      </div>

      <div className="player-section">
        <h2>Black Captured</h2>
        {Object.entries(blackCaptured).map(([piece, count]) => (
          <div key={`black-${piece}`} className="piece-counter">
            <span>{piece}</span>
            <button onClick={() => handlePieceCapture('black', piece, -1)}>-</button>
            <span>{count}</span>
            <button onClick={() => handlePieceCapture('black', piece, 1)}>+</button>
          </div>
        ))}
        <div className="score">Score: {calculateScore(blackCaptured)}</div>
      </div>
    </div>
  );
}

export default ChessScoreBoard;
