import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer/Footer'
import styles from './dashboard.module.css'

export const metadata = {
  title: 'Dashboard - Chess Analyzer',
  description: 'Dashboard for Chess Analyzer application',
}

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardWrapper}>
      <TopBar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
