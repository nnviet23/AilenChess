import styles from './archive.module.css'

export const metadata = {
  title: 'Archive - Chess Analyzer',
  description: 'Lưu trữ các ván cờ đã phân tích',
}

export default function ArchivePage() {
  return (
    <div className={styles.archivePage}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          📁 Archive
        </h1>
        <p className={styles.description}>
          Lưu trữ và quản lý các ván cờ đã phân tích
        </p>
      </div>
      
      <div className={styles.contentCard}>
        <h3 className={styles.cardTitle}>
          Tính năng đang phát triển
        </h3>
        <p className={styles.cardDescription}>
          Archive sẽ cho phép bạn lưu trữ và xem lại các ván cờ đã phân tích
        </p>
      </div>
    </div>
  )
}
