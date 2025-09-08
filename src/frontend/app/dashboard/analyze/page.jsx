'use client'

import { useState } from 'react'
import { Chess } from 'chess.js'
import ChessBoardWrapper from '../../../components/ChessBoardWrapper/ChessBoardWrapper'
import styles from './analyze.module.css'

export default function AnalyzePage() {
  const [game, setGame] = useState(new Chess())
  const [pgnInput, setPgnInput] = useState('')
  const [analysisResult, setAnalysisResult] = useState('')
  const [whitePlayer, setWhitePlayer] = useState('White')
  const [blackPlayer, setBlackPlayer] = useState('Black')

  // Hàm parse thông tin người chơi từ PGN
  const parsePlayerNames = (pgnText) => {
    const whiteMatch = pgnText.match(/\[White\s+"([^"]+)"\]/)
    const blackMatch = pgnText.match(/\[Black\s+"([^"]+)"\]/)
    
    return {
      white: whiteMatch ? whiteMatch[1] : 'White',
      black: blackMatch ? blackMatch[1] : 'Black'
    }
  }

  // Xử lý phân tích PGN
  const handleAnalyze = () => {
    if (!pgnInput.trim()) {
      setAnalysisResult('Vui lòng nhập PGN để phân tích')
      return
    }

    try {
      const newGame = new Chess()
      newGame.loadPgn(pgnInput)
      
      // Parse tên người chơi từ PGN
      const playerNames = parsePlayerNames(pgnInput)
      setWhitePlayer(playerNames.white)
      setBlackPlayer(playerNames.black)
      
      setGame(newGame)
      setAnalysisResult(`PGN đã được tải thành công! 
      Trận đấu: ${playerNames.white} vs ${playerNames.black}
      Tổng số nước đi: ${newGame.history().length}`)
    } catch (error) {
      setAnalysisResult('PGN không hợp lệ. Vui lòng kiểm tra lại định dạng.')
    }
  }

  // Reset bàn cờ về trạng thái ban đầu
  const handleReset = () => {
    const newGame = new Chess()
    setGame(newGame)
    setPgnInput('')
    setAnalysisResult('')
    setWhitePlayer('White')
    setBlackPlayer('Black')
  }

  return (
    <div className={styles.analyzePage}>
      <div className={styles.container}>
        
        <div className={styles.mainContent}>
          {/* Cột bên trái - Bàn cờ */}
          <div className={styles.leftColumn}>
            <ChessBoardWrapper 
              game={game} 
              setGame={setGame}
              whitePlayer={whitePlayer}
              blackPlayer={blackPlayer}
            />
            <button 
              className={styles.resetButton}
              onClick={handleReset}
            >
              Reset Board
            </button>
          </div>

          {/* Cột bên phải - Panel phân tích */}
          <div className={styles.rightColumn}>
            <div className={styles.analysisPanel}>
              <h2 className={styles.panelTitle}>Game Analysis</h2>
              
              <div className={styles.inputSection}>
                <label className={styles.resultTitle} htmlFor="pgn-input">
                  PASTE PGN:
                </label>
                <textarea
                  id="pgn-input"
                  className={styles.pgnTextarea}
                  value={pgnInput}
                  onChange={(e) => setPgnInput(e.target.value)}
                  placeholder="Paste your PGN here..."
                  rows={8}
                />
              </div>

              <div className={styles.buttonGroup}>
                <button 
                  className={styles.uploadButton}
                  onClick={() => alert('Tính năng upload file sẽ được phát triển')}
                >
                  📁 Upload PGN File
                </button>
                
                <button 
                  className={styles.analyzeButton}
                  onClick={handleAnalyze}
                >
                  🔍 Analyse
                </button>
              </div>

              {analysisResult && (
                <div className={styles.resultSection}>
                  <h3 className={styles.resultTitle}>Kết quả:</h3>
                  <p className={styles.resultText}>{analysisResult}</p>
                </div>
              )}

              <div className={styles.gameStats}>
                <h3 className={styles.statsTitle}>Thông tin trận đấu:</h3>
                <div className={styles.statItem}>
                  <span> Quân trắng:</span>
                  <span>{whitePlayer}</span>
                </div>
                <div className={styles.statItem}>
                  <span> Quân đen:</span>
                  <span>{blackPlayer}</span>
                </div>
                <div className={styles.statItem}>
                  <span>Nước đi hiện tại:</span>
                  <span>{game.history().length}</span>
                </div>
                <div className={styles.statItem}>
                  <span>FEN:</span>
                  <span className={styles.fenText}>{game.fen()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
