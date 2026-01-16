import { useState } from 'react'
import './Products.css'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const products = [
    { id: 1, name: 'Sầu riêng cấp đông nguyên trái – DuriVy', category: 'frozen', image: '🥭', description: 'Sầu riêng cấp đông nguyên trái thương hiệu DuriVy' },
    { id: 2, name: 'DuriQueen – Sầu riêng cấp đông', category: 'frozen', image: '🥭', description: 'Sầu riêng cấp đông nguyên trái cao cấp' },
    { id: 3, name: 'Sầu Riêng', category: 'fresh', image: '🥭', description: 'Sầu riêng tươi Việt Nam chất lượng xuất khẩu' },
    { id: 4, name: 'Xoài', category: 'fresh', image: '🥭', description: 'Xoài tươi ngọt thơm đặc sản Việt Nam' },
    { id: 5, name: 'Bưởi Da Xanh', category: 'fresh', image: '🍊', description: 'Bưởi da xanh Bến Tre nổi tiếng' },
    { id: 6, name: 'Thanh Long', category: 'fresh', image: '🐉', description: 'Thanh long ruột đỏ/trắng tươi ngon' },
    { id: 7, name: 'Nhãn', category: 'fresh', image: '🫐', description: 'Nhãn lồng xuất khẩu chất lượng cao' },
    { id: 8, name: 'Dừa Tươi', category: 'fresh', image: '🥥', description: 'Dừa tươi Bến Tre ngọt mát' },
    { id: 9, name: 'Măng Cụt', category: 'fresh', image: '🍇', description: 'Măng cụt - Nữ hoàng trái cây nhiệt đới' },
    { id: 10, name: 'Ổi', category: 'fresh', image: '🍐', description: 'Ổi xanh giòn ngọt' },
    { id: 11, name: 'Chôm Chôm', category: 'fresh', image: '🍒', description: 'Chôm chôm tươi ngọt' },
    { id: 12, name: 'Ớt', category: 'fresh', image: '🌶️', description: 'Ớt tươi xuất khẩu' },
    { id: 13, name: 'Mận (Roi)', category: 'fresh', image: '🍑', description: 'Mận roi tươi ngon' },
    { id: 14, name: 'Mít', category: 'fresh', image: '🍈', description: 'Mít tươi thơm ngọt' },
    { id: 15, name: 'Dừa Khô', category: 'dried', image: '🥥', description: 'Dừa khô chế biến' },
  ]

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'fresh', name: 'Trái cây tươi' },
    { id: 'frozen', name: 'Trái cây đông lạnh' },
    { id: 'dried', name: 'Trái cây khô' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Sản Phẩm</h1>
          <p>Trái cây tươi và đông lạnh chất lượng xuất khẩu</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-main">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <div className="product-overlay">
                    <button className="view-btn">Xem chi tiết</button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="product-features">
        <div className="container">
          <div className="section-title">
            <h2>Cam kết chất lượng</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <h3>100% Tự nhiên</h3>
              <p>Trái cây được trồng theo quy trình tự nhiên, không sử dụng hóa chất độc hại</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">❄️</div>
              <h3>Bảo quản lạnh</h3>
              <p>Hệ thống bảo quản lạnh hiện đại, giữ nguyên độ tươi ngon</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📦</div>
              <h3>Đóng gói chuẩn</h3>
              <p>Đóng gói theo tiêu chuẩn xuất khẩu quốc tế</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>Truy xuất nguồn gốc</h3>
              <p>100% sản phẩm có thể truy xuất nguồn gốc</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Bạn quan tâm đến sản phẩm của chúng tôi?</h2>
            <p>Liên hệ ngay để được tư vấn và báo giá chi tiết</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Liên hệ báo giá</a>
              <a href="mailto:sales@beefruit.vn" className="btn btn-secondary">sales@beefruit.vn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
