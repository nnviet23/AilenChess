'use client'

import { useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import styles from './ChessBoardWrapper.module.css'

export default function ChessBoardWrapper({ game, setGame, whitePlayer = "White", blackPlayer = "Black" }) {
  const [boardPosition, setBoardPosition] = useState(game.fen())

  // Xử lý khi thả quân cờ
  function onPieceDrop(sourceSquare, targetSquare) {
    const gameCopy = new Chess(game.fen())
    
    try {
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q' // Luôn phong hậu khi tốt lên hàng cuối
      })

      // Nếu nước đi hợp lệ
      if (move) {
        setGame(gameCopy)
        setBoardPosition(gameCopy.fen())
        return true
      }
    } catch (error) {
      // Nước đi không hợp lệ
      return false
    }
    
    return false
  }

  return (
    <div className={styles.chessBoardContainer}>
      {/* Tên người chơi quân đen - phía trên bàn cờ */}
      <div className={styles.playerNameTop}>
        <span className={styles.playerName}>
          ⚫ {blackPlayer}
        </span>
      </div>

      <div className={styles.boardWrapper}>
        <Chessboard
          position={boardPosition}
          onPieceDrop={onPieceDrop}
          boardWidth={400}
          arePiecesDraggable={true}
          customBoardStyle={{
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>

      {/* Tên người chơi quân trắng - phía dưới bàn cờ */}
      <div className={styles.playerNameBottom}>
        <span className={styles.playerName}>
          ⚪ {whitePlayer}
        </span>
      </div>
      
      {/* Chỉ hiển thị gameInfo khi có trạng thái đặc biệt */}
      {(game.isCheckmate() || game.isDraw() || game.isCheck()) && (
        <div className={styles.gameInfo}>
          <p className={styles.statusInfo}>
            {game.isCheckmate() && 'Chiếu bí!'}
            {game.isDraw() && 'Hòa!'}
            {game.isCheck() && !game.isCheckmate() && 'Chiếu!'}
          </p>
        </div>
      )}
    </div>
  )
}
