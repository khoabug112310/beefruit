import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import './News.css'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'BeeFruit mở rộng thị trường xuất khẩu sang Châu Âu',
      excerpt: 'Công ty BeeFruit vừa ký kết hợp đồng xuất khẩu trái cây sang các nước Châu Âu, mở ra cơ hội mới cho nông sản Việt Nam.',
      date: '10/01/2026',
      author: 'Admin',
      category: 'Kinh doanh',
      emoji: '🌍',
    },
    {
      id: 2,
      title: 'Sầu riêng Việt Nam chinh phục thị trường Mỹ',
      excerpt: 'Lô sầu riêng đầu tiên của BeeFruit đã được xuất khẩu thành công sang thị trường Mỹ, đánh dấu bước tiến quan trọng.',
      date: '08/01/2026',
      author: 'Admin',
      category: 'Xuất khẩu',
      emoji: '🥭',
    },
    {
      id: 3,
      title: 'Khánh thành nhà máy mới tại Thủ Đức',
      excerpt: 'Nhà máy BeeFruit Thủ Đức chính thức đi vào hoạt động, nâng cao năng lực sản xuất và chế biến trái cây.',
      date: '05/01/2026',
      author: 'Admin',
      category: 'Sự kiện',
      emoji: '🏭',
    },
    {
      id: 4,
      title: 'BeeFruit đạt chứng nhận FSSC 22000 phiên bản mới',
      excerpt: 'Chứng nhận FSSC 22000 phiên bản mới khẳng định cam kết về an toàn thực phẩm của BeeFruit.',
      date: '28/12/2025',
      author: 'Admin',
      category: 'Chất lượng',
      emoji: '🏆',
    },
    {
      id: 5,
      title: 'Tham gia Hội chợ Nông sản Quốc tế 2025',
      excerpt: 'BeeFruit mang các sản phẩm trái cây chất lượng cao đến Hội chợ Nông sản Quốc tế, thu hút nhiều đối tác.',
      date: '20/12/2025',
      author: 'Admin',
      category: 'Sự kiện',
      emoji: '🎪',
    },
    {
      id: 6,
      title: 'Hợp tác với nông dân vùng trồng sầu riêng Tây Nguyên',
      excerpt: 'Chương trình hợp tác giúp nâng cao chất lượng sầu riêng và đảm bảo nguồn cung ổn định cho xuất khẩu.',
      date: '15/12/2025',
      author: 'Admin',
      category: 'Hợp tác',
      emoji: '🤝',
    },
  ]

  const categories = ['Tất cả', 'Kinh doanh', 'Xuất khẩu', 'Sự kiện', 'Chất lượng', 'Hợp tác']

  return (
    <div className="news-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Tin Tức</h1>
          <p>Cập nhật thông tin mới nhất từ BeeFruit</p>
        </div>
      </section>

      {/* News Section */}
      <section className="news-main">
        <div className="container">
          <div className="news-layout">
            {/* News List */}
            <div className="news-list">
              {news.map(item => (
                <article key={item.id} className="news-card">
                  <div className="news-image">
                    <span className="news-emoji">{item.emoji}</span>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span><FaCalendar /> {item.date}</span>
                      <span><FaUser /> {item.author}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <Link to="#" className="read-more">
                      Đọc thêm <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="news-sidebar">
              {/* Categories */}
              <div className="sidebar-widget">
                <h3>Danh mục</h3>
                <ul className="category-list">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link to="#">{cat}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent News */}
              <div className="sidebar-widget">
                <h3>Tin tức mới nhất</h3>
                <ul className="recent-news">
                  {news.slice(0, 4).map(item => (
                    <li key={item.id}>
                      <Link to="#">
                        <span className="recent-emoji">{item.emoji}</span>
                        <div>
                          <h4>{item.title}</h4>
                          <span className="recent-date">{item.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="sidebar-widget newsletter">
                <h3>Đăng ký nhận tin</h3>
                <p>Nhận thông tin mới nhất từ BeeFruit</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Email của bạn" />
                  <button type="submit" className="btn btn-primary">Đăng ký</button>
                </form>
              </div>
            </aside>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">→</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
