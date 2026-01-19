import { Link } from 'react-router-dom'
import { FaCheckCircle, FaGlobeAmericas, FaIndustry, FaAward, FaClock, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()

  const heroBanners = [
    '/Hero-Banner/hinh1.jpg',
    '/Hero-Banner/hinh2.jpg',
    '/Hero-Banner/hinh3.jpg',
    '/Hero-Banner/hinh4.jpg',
    '/Hero-Banner/hinh5.jpg',
  ]

  const products = [
    { id: 1, key: 'orange', image: '/Cam - quýt/cam1.jpeg' },
    { id: 2, key: 'apple', image: '/Táo/z7438178316312_03d8b9ab39076388805b664cd96de801.jpg' },
    { id: 3, key: 'grape', image: '/Nho/IMG_1490.jpeg' },
    { id: 4, key: 'cherry', image: '/Cherry/IMG_1107.jpeg' },
    { id: 5, key: 'mandarin', image: '/Cam - quýt/quyt2.jpg' },
    { id: 6, key: 'kiwi', image: '/Kiwi/z7430806126264_e6b6c2b78d7197d16eac7da585476528.jpg' },
  ]

  const stats = [
    { icon: <FaIndustry />, key: 'coldStorage' },
    { icon: <FaLeaf />, key: 'capacity' },
    { icon: <FaClock />, key: 'experience' },
    { icon: <FaGlobeAmericas />, key: 'countries' },
  ]

  const values = [
    { icon: <FaLeaf />, key: 'fresh' },
    { icon: <FaShieldAlt />, key: 'process' },
    { icon: <FaAward />, key: 'certification' },
  ]

  const news = [
    { id: 1, title: 'BeeFruit mở rộng thị trường xuất khẩu sang Châu Âu', date: '10/01/2026' },
    { id: 2, title: 'Sầu riêng Việt Nam chinh phục thị trường Mỹ', date: '08/01/2026' },
    { id: 3, title: 'Khánh thành nhà máy mới tại Đăk Lăk', date: '05/01/2026' },
  ]

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-slider">
          <div className="hero-slider-track">
            {/* Duplicate images for seamless loop */}
            {[...heroBanners, ...heroBanners].map((img, index) => (
              <div key={index} className="hero-slide">
                <img src={img} alt={`Banner ${(index % heroBanners.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">{t('home.hero.title')}</h1>
          <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">{t('home.hero.viewProducts')}</Link>
            <Link to="/contact" className="btn btn-secondary">{t('home.hero.contactNow')}</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('home.about.title')}</h2>
              <p>{t('home.about.description1')}</p>
              <p>{t('home.about.description2')}</p>
              <Link to="/about" className="btn btn-primary">{t('home.about.learnMore')}</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🍃</span>
                <p>{t('home.about.imagePlaceholder')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('home.values.title')}</h2>
            <p>{t('home.values.subtitle')}</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{t(`home.values.${value.key}.title`)}</h3>
                <p>{t(`home.values.${value.key}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="certifications">
            <span className="cert-badge">HACCP</span>
            <span className="cert-badge">FSSC 22000</span>
            <span className="cert-badge">Halal</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('home.products.title')}</h2>
            <p>{t('home.products.subtitle')}</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={t(`home.products.items.${product.key}.name`)} />
                </div>
                <div className="product-info">
                  <h3>{t(`home.products.items.${product.key}.name`)}</h3>
                  <p>{t(`home.products.items.${product.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn btn-primary">{t('home.products.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {t(`home.stats.${stat.key}.number`)}
                  <span className="stat-unit">{t(`home.stats.${stat.key}.unit`)}</span>
                </div>
                <div className="stat-label">{t(`home.stats.${stat.key}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-title">
            <h2>{t('home.news.title')}</h2>
            <p>{t('home.news.subtitle')}</p>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <span>📰</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <Link to="/news" className="news-link">{t('home.news.readMore')}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <Link to="/contact" className="btn btn-primary">{t('home.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
