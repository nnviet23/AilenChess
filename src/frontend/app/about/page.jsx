import TopBar from '../../components/TopBar'
import styles from './page.module.css'

export const metadata = {
  title: 'Giới thiệu - Chess Analyzer',
  description: 'Tìm hiểu về Chess Analyzer và tính năng phân tích cờ vua',
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <div className={styles.aboutPage}>
      <div className="text-center">
        <h1 className={styles.title}>
          ℹ️ Giới thiệu về Chess Analyzer
        </h1>
        <p className={styles.description}>
          Chess Analyzer là công cụ phân tích cờ vua hiện đại, giúp người chơi cải thiện kỹ năng 
          và hiểu sâu hơn về trò chơi cờ vua thông qua công nghệ AI tiên tiến.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🎯 Mục tiêu</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
          Chúng tôi mong muốn tạo ra một nền tảng học tập cờ vua toàn diện, nơi người chơi 
          ở mọi trình độ có thể phân tích ván cờ, học hỏi từ các nước đi và nâng cao kỹ năng 
          một cách hiệu quả.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>⚡ Tính năng chính</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Phân tích nước đi theo thời gian thực</li>
          <li className={styles.listItem}>Gợi ý nước đi tối ưu từ AI engine</li>
          <li className={styles.listItem}>Đánh giá vị trí cờ chính xác</li>
          <li className={styles.listItem}>Phân tích biến thể và hậu quả</li>
          <li className={styles.listItem}>Giao diện thân thiện, dễ sử dụng</li>
          <li className={styles.listItem}>Hỗ trợ học tập cá nhân hóa</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🛠️ Công nghệ</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '1rem' }}>
          Chess Analyzer được xây dựng với các công nghệ hiện đại:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Next.js App Router cho frontend</li>
          <li className={styles.listItem}>Node.js + Express cho backend API</li>
          <li className={styles.listItem}>Chess.js cho logic cờ vua</li>
          <li className={styles.listItem}>React Chessboard cho giao diện</li>
          <li className={styles.listItem}>AI Engine để phân tích nước đi</li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <p style={{ 
          color: '#6b7280', 
          fontStyle: 'italic',
          background: '#f9fafb',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>
          🚀 Dự án đang trong quá trình phát triển. Nhiều tính năng thú vị sẽ được cập nhật sớm!
        </p>
      </div>
    </div>
    </>
  )
}
