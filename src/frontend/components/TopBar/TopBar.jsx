'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { 
  FaSearch, 
  FaFolder, 
  FaNewspaper, 
  FaSignInAlt, 
  FaCog,
  FaChessKing 
} from 'react-icons/fa'
import styles from './TopBar.module.css'

export default function TopBar() {
  const pathname = usePathname()

  const menuItems = [
    { 
      href: '/dashboard/analyze', 
      label: 'Analysis', 
      icon: <FaSearch className={styles.menuIcon} /> 
    },
    { 
      href: '/dashboard/archive', 
      label: 'Archive', 
      icon: <FaFolder className={styles.menuIcon} /> 
    },
    { 
      href: '/dashboard/news', 
      label: 'News', 
      icon: <FaNewspaper className={styles.menuIcon} /> 
    }
  ]

  const isActive = (href) => pathname === href

  const handleSignIn = () => {
    // TODO: Implement sign in logic
    alert('Sign In functionality will be implemented soon!')
  }

  const handleSettings = () => {
    // TODO: Implement settings logic
    alert('Settings panel will be implemented soon!')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {/* Alien Logo */}
          <Link href="/" className={styles.alienLogo}>
            <Image 
              src="/alien-head.png" 
              alt="Alien Chess Logo" 
              width={40} 
              height={40}
              className={styles.alienIcon}
            />
          </Link>

          {/* Logo */}
          <Link href="https://www.flaticon.com/free-icons/alien-head" className={styles.logo}>
            <span>AilenChess</span>
          </Link>

          {/* Menu Items */}
          <ul className={styles.menuItems}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.menuItem} ${isActive(item.href) ? styles.active : ''}`}
                  style={{
                    color: isActive(item.href) ? '#f0c040' : 'white',
                    backgroundColor: isActive(item.href) ? 'rgba(240, 192, 64, 0.1)' : 'transparent'
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Sign In Button */}
          <button 
            onClick={handleSignIn}
            className={styles.signInButton}
          >
            <FaSignInAlt />
            <span>Sign In</span>
          </button>

          {/* Settings Button */}
          <button 
            onClick={handleSettings}
            className={styles.settingsButton}
          >
            <FaCog className={styles.settingsIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
}
