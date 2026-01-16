import { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filters = [
    { id: 'all', name: 'Tất cả' },
    { id: 'products', name: 'Sản phẩm' },
    { id: 'factory', name: 'Nhà máy' },
    { id: 'events', name: 'Sự kiện' },
    { id: 'activities', name: 'Hoạt động' },
  ]

  const galleryItems = [
    { id: 1, category: 'products', title: 'Sầu riêng xuất khẩu', emoji: '🥭' },
    { id: 2, category: 'products', title: 'Xoài tươi', emoji: '🥭' },
    { id: 3, category: 'factory', title: 'Nhà máy đóng gói', emoji: '🏭' },
    { id: 4, category: 'products', title: 'Bưởi da xanh', emoji: '🍊' },
    { id: 5, category: 'events', title: 'Hội chợ xuất khẩu', emoji: '🎪' },
    { id: 6, category: 'factory', title: 'Dây chuyền sản xuất', emoji: '⚙️' },
    { id: 7, category: 'activities', title: 'Tham quan vườn', emoji: '🌳' },
    { id: 8, category: 'products', title: 'Nhãn lồng', emoji: '🫐' },
    { id: 9, category: 'events', title: 'Ký kết hợp tác', emoji: '🤝' },
    { id: 10, category: 'factory', title: 'Kho lạnh bảo quản', emoji: '❄️' },
    { id: 11, category: 'activities', title: 'Đội ngũ nhân viên', emoji: '👥' },
    { id: 12, category: 'products', title: 'Thanh long', emoji: '🐉' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Thư Viện Hình Ảnh</h1>
          <p>Hình ảnh về sản phẩm, nhà máy và hoạt động của BeeFruit</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-main">
        <div className="container">
          {/* Filter */}
          <div className="gallery-filter">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  <span className="gallery-emoji">{item.emoji}</span>
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <span className="view-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-image">
              <span className="lightbox-emoji">{selectedImage.emoji}</span>
            </div>
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-title">
            <h2>Video giới thiệu</h2>
            <p>Tìm hiểu thêm về BeeFruit qua video</p>
          </div>
          <div className="video-grid">
            <div className="video-item">
              <div className="video-placeholder">
                <span>▶️</span>
                <p>Giới thiệu công ty BeeFruit</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <span>▶️</span>
                <p>Quy trình đóng gói xuất khẩu</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <span>▶️</span>
                <p>Tham quan nhà máy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
