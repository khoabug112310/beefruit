import { Link } from 'react-router-dom'
import { FaCheckCircle, FaGlobeAmericas, FaIndustry, FaAward, FaClock, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const heroBanners = [
    '/Hero-Banner/hinh1.jpg',
    '/Hero-Banner/hinh2.jpg',
    '/Hero-Banner/hinh3.jpg',
    '/Hero-Banner/hinh4.jpg',
    '/Hero-Banner/hinh5.jpg',
  ]

  const products = [
    { id: 1, name: 'Cam', image: '/Cam - quýt/cam1.jpeg', description: 'Cam tươi loại 1 nhập khẩu' },
    { id: 2, name: 'Táo', image: '/Táo/z7438178316312_03d8b9ab39076388805b664cd96de801.jpg', description: 'Táo nhập khẩu chất lượng cao' },
    { id: 3, name: 'Nho', image: '/Nho/IMG_1490.jpeg', description: 'Nho tươi ngon giòn ngọt' },
    { id: 4, name: 'Cherry', image: '/Cherry/IMG_1107.jpeg', description: 'Cherry nhập khẩu tươi ngon' },
    { id: 5, name: 'Quýt', image: '/Cam - quýt/quyt2.jpg', description: 'Quýt nhập khẩu ngọt thanh' },
    { id: 6, name: 'Kiwi', image: '/Kiwi/z7430806126264_e6b6c2b78d7197d16eac7da585476528.jpg', description: 'Kiwi xanh nhập khẩu' },
  ]

  const stats = [
    { icon: <FaIndustry />, number: '-20', unit: 'độ C', label: 'Hệ thống kho lạnh' },
    { icon: <FaLeaf />, number: '3000', unit: 'tấn/năm', label: 'Sản lượng nhập khẩu' },
    { icon: <FaClock />, number: '+5', unit: 'năm', label: 'Kinh nghiệm' },
    { icon: <FaGlobeAmericas />, number: '+20', unit: 'quốc gia', label: 'Nhập khẩu' },
  ]

  const values = [
    { icon: <FaLeaf />, title: 'Tươi sạch & Đảm bảo', desc: 'Trái cây được chọn lọc kỹ lưỡng, đảm bảo tươi ngon' },
    { icon: <FaShieldAlt />, title: 'Quy trình nghiêm ngặt', desc: 'Tuân thủ các tiêu chuẩn quốc tế về an toàn thực phẩm' },
    { icon: <FaAward />, title: 'Chứng nhận quốc tế', desc: 'HACCP, FSSC 22000, Halal' },
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
          <h1 className="hero-title">Xây dựng niềm tin trái cây - Nhập khẩu chính ngạch chất lượng nhất</h1>
          <p className="hero-subtitle">
            BeeFruit - Công ty Thực phẩm Thuduc House - 
            Hơn 25 năm kinh nghiệm nhập khẩu/vận chuyển trái cây Quốc tế
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Xem sản phẩm</Link>
            <Link to="/contact" className="btn btn-secondary">Liên hệ ngay</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Chất lượng là nền tảng</h2>
              <p>
                Với phương châm "Xây dựng niềm tin để trái cây Việt vươn xa", BeeFruit 
                cam kết mang đến những sản phẩm trái cây tươi ngon nhất, đạt tiêu chuẩn 
                quốc tế, góp phần đưa nông sản Việt Nam vươn tầm thế giới.
              </p>
              <p>
                Chúng tôi không ngừng nỗ lực cải tiến quy trình sản xuất, nâng cao chất 
                lượng sản phẩm để đáp ứng yêu cầu khắt khe của các thị trường khó tính 
                như Mỹ, Nhật Bản, Úc, Châu Âu...
              </p>
              <Link to="/about" className="btn btn-primary">Tìm hiểu thêm</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🍃</span>
                <p>Trái cây Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Giá trị & Sứ mệnh</h2>
            <p>Trái cây nhập khẩu chính ngạch "Uy tín - Chất lượng - Giá tốt"</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
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
            <h2>Sản phẩm nổi bật</h2>
            <p>Trái cây tươi và đông lạnh chất lượng xuất khẩu</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn btn-primary">Xem tất cả sản phẩm</Link>
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
                  {stat.number}<span className="stat-unit">{stat.unit}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-title">
            <h2>Tin tức mới nhất</h2>
            <p>Cập nhật thông tin mới nhất từ BeeFruit</p>
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
                  <Link to="/news" className="news-link">Đọc thêm →</Link>
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
            <h2>Bạn quan tâm đến sản phẩm của chúng tôi?</h2>
            <p>Liên hệ ngay để được tư vấn và báo giá tốt nhất</p>
            <Link to="/contact" className="btn btn-primary">Liên hệ ngay</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
