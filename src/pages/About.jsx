import { FaHistory, FaGlobeAmericas, FaIndustry, FaAward, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const capabilities = [
    'Nhà đóng gói đạt chứng nhận ATTP theo tiêu chuẩn FSSC 22000',
    'Mã nhà đóng gói đủ điều kiện xuất khẩu sang Mỹ, Nhật, Úc, Châu Âu, Trung Quốc, Hàn Quốc',
    'Công nghệ bảo quản và vận chuyển tiên tiến',
    'Đội ngũ chuyên gia kiểm soát chất lượng',
    'Hệ thống truy xuất nguồn gốc đầy đủ',
  ]

  const factories = [
    {
      name: 'Trụ sở chính - TDHF-BEEFRUIT',
      address: 'Chợ nông sản, 141 QL1A, Tam Bình, Thủ Đức, Thành phố Hồ Chí Minh',
      icon: '🏢',
    },
  ]

  const exportMarkets = [
    'Mỹ', 'Nhật Bản', 'Hàn Quốc', 'Trung Quốc', 'Úc', 'New Zealand',
    'Đức', 'Pháp', 'Anh', 'Hà Lan', 'Singapore', 'Malaysia',
    'Thái Lan', 'Indonesia', 'UAE', 'Ả Rập Saudi', 'Canada', 'Nga',
  ]

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Về Chúng Tôi</h1>
          <p>BeeFruit - Công ty Thực phẩm Thủ Đức House</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Giới thiệu chung</h2>
              <p>
                BeeFruit có <strong>hơn 25 năm kinh nghiệm</strong> trong lĩnh vực 
                xuất khẩu trái cây tươi và đông lạnh.
              </p>
              <p>
                Với phương châm "Xây dựng niềm tin để trái cây Việt vươn xa", chúng tôi không 
                ngừng nỗ lực nâng cao chất lượng sản phẩm, mở rộng thị trường xuất khẩu, góp 
                phần đưa nông sản Việt Nam vươn tầm thế giới.
              </p>
              <p>
                Hiện nay, BeeFruit sở hữu các nhà máy hiện đại tại Bến Tre, Khánh Hòa và 
                Đăk Lăk, với tổng diện tích hơn 120.000m² và khả năng cung cấp hơn 
                <strong> 200.000 tấn trái cây</strong> các loại mỗi năm.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-box">
                <span>🍃</span>
                <p>Hơn 25 năm kinh nghiệm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
        <div className="container">
          <div className="section-title">
            <h2>Lịch sử phát triển</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaHistory />
              </div>
              <div className="timeline-content">
                <h3>Năm 2000</h3>
                <p>Thành lập Công ty BeeFruit tại TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaIndustry />
              </div>
              <div className="timeline-content">
                <h3>Năm 2010</h3>
                <p>Mở rộng nhà máy đóng gói, nâng cao công suất sản xuất</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaGlobeAmericas />
              </div>
              <div className="timeline-content">
                <h3>Năm 2015</h3>
                <p>Xuất khẩu thành công sang thị trường Mỹ, Nhật Bản, Châu Âu</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaAward />
              </div>
              <div className="timeline-content">
                <h3>Năm 2020</h3>
                <p>Đạt chứng nhận FSSC 22000, mở rộng nhà máy tại Đăk Lăk</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaGlobeAmericas />
              </div>
              <div className="timeline-content">
                <h3>Năm 2025</h3>
                <p>Xuất khẩu đến hơn 20 quốc gia, sản lượng đạt 200.000 tấn/năm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-title">
            <h2>Năng lực sản xuất</h2>
            <p>Cơ sở vật chất hiện đại, đạt tiêu chuẩn quốc tế</p>
          </div>
          <div className="capabilities-grid">
            <div className="capabilities-list">
              {capabilities.map((item, index) => (
                <div key={index} className="capability-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="capabilities-stats">
              <div className="stat-box">
                <span className="stat-number">120.000</span>
                <span className="stat-label">m² Nhà máy</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">200.000+</span>
                <span className="stat-label">tấn/năm</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">3</span>
                <span className="stat-label">Nhà máy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factories */}
      <section className="factories-section">
        <div className="container">
          <div className="section-title">
            <h2>Hệ thống nhà máy</h2>
          </div>
          <div className="factories-grid">
            {factories.map((factory, index) => (
              <div key={index} className="factory-card">
                <div className="factory-icon">{factory.icon}</div>
                <h3>{factory.name}</h3>
                <p>
                  <FaMapMarkerAlt className="location-icon" />
                  {factory.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="markets-section">
        <div className="container">
          <div className="section-title">
            <h2>Thị trường xuất khẩu</h2>
            <p>Sản phẩm của BeeFruit đã có mặt tại hơn 20 quốc gia trên thế giới</p>
          </div>
          <div className="world-map">
            <div className="map-placeholder">
              <span>🌍</span>
              <p>Bản đồ thị trường xuất khẩu</p>
            </div>
          </div>
          <div className="markets-list">
            {exportMarkets.map((market, index) => (
              <span key={index} className="market-badge">{market}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-title">
            <h2>Chứng nhận chất lượng</h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h3>HACCP</h3>
              <p>Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h3>FSSC 22000</h3>
              <p>Chứng nhận an toàn thực phẩm quốc tế</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h3>Halal</h3>
              <p>Chứng nhận thực phẩm Halal cho thị trường Hồi giáo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
