import TopBar from '../components/TopBar'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <div style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '1rem' }}>
            🏆 Chess Analyzer
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
            Xin chào! Đây là bước đầu của web phân tích cờ vua với Next.js App Router 🚀
          </p>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            Hệ thống phân tích giúp bạn:
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem', 
            marginTop: '2rem' 
          }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}>
              <h3 style={{ color: '#f0c040', marginBottom: '0.5rem', fontSize: '1.25rem' }}>🔍 Phân tích nước đi</h3>
              <p style={{ color: '#666' }}>Đánh giá và gợi ý nước đi tốt nhất cho từng tình huống</p>
            </div>
            
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}>
              <h3 style={{ color: '#f0c040', marginBottom: '0.5rem', fontSize: '1.25rem' }}>📈 Cải thiện kỹ năng</h3>
              <p style={{ color: '#666' }}>Học hỏi từ các ván cờ và nâng cao trình độ chơi cờ</p>
            </div>
            
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
            }}>
              <h3 style={{ color: '#f0c040', marginBottom: '0.5rem', fontSize: '1.25rem' }}>⚡ Phản hồi tức thì</h3>
              <p style={{ color: '#666' }}>Nhận được phân tích và đánh giá ngay lập tức</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}