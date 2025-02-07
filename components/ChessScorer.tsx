'use client';

import { useState } from 'react';

type ChessPiece = {
  name: string;
  value: number;
  symbol: string;
};

const pieces: ChessPiece[] = [
  { name: 'Pawn', value: 1, symbol: '♟' },
  { name: 'Knight', value: 3, symbol: '♞' },
  { name: 'Bishop', value: 3, symbol: '♝' },
  { name: 'Rook', value: 5, symbol: '♜' },
  { name: 'Queen', value: 9, symbol: '♛' },
];

export default function ChessScorer() {
  const [scores, setScores] = useState({ white: 0, black: 0 });
  const [capturedPieces, setCapturedPieces] = useState({
    white: [] as ChessPiece[],
    black: [] as ChessPiece[]
  });

  const addToScore = (player: 'white' | 'black', piece: ChessPiece) => {
    setScores(prev => ({
      ...prev,
      [player]: prev[player] + piece.value
    }));
    setCapturedPieces(prev => ({
      ...prev,
      [player]: [...prev[player], piece]
    }));
  };

  const resetGame = () => {
    setScores({ white: 0, black: 0 });
    setCapturedPieces({ white: [], black: [] });
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-2">
        {/* White Player */}
        <div className="border rounded-lg p-4">
          <h3 className="text-xl mb-3">White Pieces</h3>
          <div className="flex flex-wrap justify-between md:justify-start md:gap-2">
            {pieces.map((piece) => (
              <button
                key={`white-${piece.name}`}
                onClick={() => addToScore('white', piece)}
                className="p-2 border rounded bg-black hover:bg-gray-700"
              >
                <div className="text-3xl md:text-4xl text-white leading-none">{piece.symbol}</div>
                <div className="text-white text-sm md:text-2xl">{piece.name}</div>
              </button>
            ))}
          </div>
          <div className="mt-4 text-xl">Score: {scores.white}</div>
          <div className="mt-2">
            <h4 className="font-semibold">Captured Pieces:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {capturedPieces.white.map((piece, index) => (
                <span key={index} className="text-6xl" title={piece.name}>
                  {piece.symbol}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Black Player */}
        <div className="border rounded-lg p-4">
          <h3 className="text-xl mb-3">Black Pieces</h3>
          <div className="flex flex-wrap justify-between md:justify-start md:gap-2">
            {pieces.map((piece) => (
              <button
                key={`black-${piece.name}`}
                onClick={() => addToScore('black', piece)}
                className="p-2 border rounded hover:bg-gray-100 bg-white"
              >
                <div className="text-3xl md:text-4xl text-black leading-none">{piece.symbol}</div>
                <div className="text-black text-sm  md:text-2xl">{piece.name}</div>
              </button>
            ))}
          </div>
          <div className="mt-4 text-xl">Score: {scores.black}</div>
          <div className="mt-2">
            <h4 className="font-semibold">Captured Pieces:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {capturedPieces.black.map((piece, index) => (
                <span key={index} className="text-6xl" title={piece.name}>
                  {piece.symbol}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
