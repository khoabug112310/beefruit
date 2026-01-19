import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const currentLanguage = i18n.language

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    setIsLangOpen(false)
  }

  const menuItems = [
    { path: '/', label: t('header.home') },
    { path: '/about', label: t('header.about') },
    { path: '/products', label: t('header.products') },
    { path: '/gallery', label: t('header.gallery') },
    { path: '/news', label: t('header.news') },
    { path: '/blog', label: t('header.blog') },
    { path: '/contact', label: t('header.contact') },
    { path: '/recruitment', label: t('header.recruitment') },
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
            <div className="language-dropdown">
              <button 
                className="language-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                title={currentLanguage === 'vi' ? 'Tiếng Việt' : 'English'}
              >
                <FaGlobe />
                <span className="lang-code">{currentLanguage.toUpperCase()}</span>
              </button>
              
              {isLangOpen && (
                <div className="language-menu">
                  <button 
                    className={`lang-option ${currentLanguage === 'vi' ? 'active' : ''}`}
                    onClick={() => changeLanguage('vi')}
                  >
                    🇻🇳 Tiếng Việt
                  </button>
                  <button 
                    className={`lang-option ${currentLanguage === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
            
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
              placeholder={t('header.search')}
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
