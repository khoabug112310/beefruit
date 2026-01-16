import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/products', label: 'Sản phẩm' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/news', label: 'Tin tức' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Liên hệ' },
    { path: '/recruitment', label: 'Tuyển dụng' },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="BeeFruit Logo" className="logo-image" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="language-btn"
              title="Tiếng Việt"
            >
              🇻🇳
            </button>
            
            <button 
              className="search-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch />
            </button>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="search-input"
            />
            <button className="search-submit">
              <FaSearch />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
