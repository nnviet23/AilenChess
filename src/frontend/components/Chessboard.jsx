'use client'

import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());
  const [gamePosition, setGamePosition] = useState(game.fen());

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
      setGamePosition(gameCopy.fen());
      return true;
    }
    return false;
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === false) return false;
    return true;
  }

  const analyzePosition = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fen: gamePosition }),
      });
      
      const data = await response.json();
      alert(`Nước đi tốt nhất: ${data.bestMove}`);
    } catch (error) {
      console.error('Error analyzing position:', error);
      alert('Lỗi khi phân tích vị trí cờ');
    }
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1f2937' }}>
        ♚ Bàn cờ tương tác
      </h2>
      <Chessboard
        position={gamePosition}
        onPieceDrop={onDrop}
        boardWidth={500}
        customBoardStyle={{
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
        }}
      />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
          <strong>FEN:</strong> <code style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>{gamePosition}</code>
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={() => {
              const newGame = new Chess();
              setGame(newGame);
              setGamePosition(newGame.fen());
            }}
            className="btn btn-secondary"
          >
            🔄 Reset Game
          </button>
          <button 
            onClick={analyzePosition}
            className="btn btn-primary"
          >
            🔍 Phân tích
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChessboardComponent;
