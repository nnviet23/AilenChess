'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: '🏠 Trang chủ' },
    { href: '/analyze', label: '🔍 Phân tích' },
    { href: '/about', label: 'ℹ️ Giới thiệu' }
  ]

  const isActive = (href) => pathname === href

  return (
    <nav style={{ 
      backgroundColor: '#1f2937', 
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: 'white',
          textDecoration: 'none'
        }}>
          ♚ Chess Analyzer
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: isActive(item.href) ? '#3b82f6' : 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                backgroundColor: isActive(item.href) ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                border: isActive(item.href) ? '1px solid #3b82f6' : '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.href)) {
                  e.target.style.backgroundColor = 'transparent'
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
