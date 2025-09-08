import styles from './news.module.css'

export const metadata = {
  title: 'News - Chess Analyzer',
  description: 'Tin tức và cập nhật mới nhất về cờ vua',
}

export default function NewsPage() {
  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            📰 News
          </h1>
          <p className={styles.description}>
            Tin tức và cập nhật mới nhất từ thế giới cờ vua
          </p>
        </div>
        
        <div className={styles.contentCard}>
          <h3 className={styles.cardTitle}>
            Tính năng đang phát triển
          </h3>
          <p className={styles.cardDescription}>
            News sẽ cung cấp tin tức cập nhật về các giải đấu và sự kiện cờ vua
          </p>
        </div>
      </div>
    </div>
  )
}
