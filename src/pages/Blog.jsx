import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaTag, FaArrowRight } from 'react-icons/fa'
import './Blog.css'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Lợi ích sức khỏe tuyệt vời từ trái sầu riêng',
      excerpt: 'Sầu riêng không chỉ là "vua của các loại trái cây" về hương vị mà còn mang lại nhiều lợi ích sức khỏe đáng ngạc nhiên...',
      date: '12/01/2026',
      author: 'BeeFruit',
      tags: ['Sầu riêng', 'Sức khỏe'],
      emoji: '🥭',
      readTime: '5 phút đọc',
    },
    {
      id: 2,
      title: 'Cách chọn bưởi da xanh ngon nhất',
      excerpt: 'Bưởi da xanh Bến Tre nổi tiếng với vị ngọt thanh, múi dày và không hạt. Dưới đây là những mẹo chọn bưởi ngon nhất...',
      date: '09/01/2026',
      author: 'BeeFruit',
      tags: ['Bưởi', 'Mẹo hay'],
      emoji: '🍊',
      readTime: '4 phút đọc',
    },
    {
      id: 3,
      title: 'Xu hướng xuất khẩu trái cây Việt Nam 2026',
      excerpt: 'Năm 2026 đánh dấu bước tiến vượt bậc của trái cây Việt Nam trên thị trường quốc tế với nhiều thị trường mới...',
      date: '05/01/2026',
      author: 'BeeFruit',
      tags: ['Xuất khẩu', 'Thị trường'],
      emoji: '📈',
      readTime: '8 phút đọc',
    },
    {
      id: 4,
      title: 'Công nghệ bảo quản trái cây tươi lâu hơn',
      excerpt: 'Ứng dụng công nghệ hiện đại trong bảo quản giúp trái cây giữ được độ tươi ngon trong quá trình vận chuyển xuất khẩu...',
      date: '01/01/2026',
      author: 'BeeFruit',
      tags: ['Công nghệ', 'Bảo quản'],
      emoji: '❄️',
      readTime: '6 phút đọc',
    },
    {
      id: 5,
      title: 'Những món ăn ngon từ xoài Việt Nam',
      excerpt: 'Xoài là loại trái cây đa năng có thể chế biến thành nhiều món ăn hấp dẫn. Khám phá các công thức nấu ăn với xoài...',
      date: '28/12/2025',
      author: 'BeeFruit',
      tags: ['Xoài', 'Công thức'],
      emoji: '🥭',
      readTime: '7 phút đọc',
    },
    {
      id: 6,
      title: 'Tiêu chuẩn FSSC 22000 - Đảm bảo an toàn thực phẩm',
      excerpt: 'Tìm hiểu về tiêu chuẩn FSSC 22000 và tầm quan trọng của chứng nhận này trong ngành xuất khẩu nông sản...',
      date: '22/12/2025',
      author: 'BeeFruit',
      tags: ['Chất lượng', 'Tiêu chuẩn'],
      emoji: '🏆',
      readTime: '5 phút đọc',
    },
  ]

  const popularTags = ['Sầu riêng', 'Xoài', 'Bưởi', 'Xuất khẩu', 'Chất lượng', 'Công nghệ', 'Sức khỏe', 'Thị trường']

  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Kiến thức và chia sẻ về trái cây Việt Nam</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image">
              <span className="featured-emoji">🥭</span>
            </div>
            <div className="featured-content">
              <span className="featured-badge">Bài viết nổi bật</span>
              <h2>Sầu riêng Việt Nam - Hành trình chinh phục thị trường thế giới</h2>
              <p>
                Từ một loại trái cây đặc sản địa phương, sầu riêng Việt Nam đã vươn mình trở thành 
                sản phẩm xuất khẩu chủ lực. Câu chuyện về hành trình chinh phục các thị trường khó 
                tính như Mỹ, Nhật Bản, Châu Âu...
              </p>
              <div className="featured-meta">
                <span><FaCalendar /> 13/01/2026</span>
                <span><FaUser /> BeeFruit</span>
                <span>10 phút đọc</span>
              </div>
              <Link to="#" className="btn btn-primary">Đọc bài viết</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-main">
        <div className="container">
          <div className="blog-layout">
            {/* Blog List */}
            <div className="blog-grid">
              {blogs.map(blog => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image">
                    <span className="blog-emoji">{blog.emoji}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-tags">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="blog-footer">
                      <span className="blog-date">{blog.date}</span>
                      <span className="blog-read-time">{blog.readTime}</span>
                    </div>
                    <Link to="#" className="read-more">
                      Đọc tiếp <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* About */}
              <div className="sidebar-widget about-widget">
                <div className="about-icon">🍃</div>
                <h3>Về Blog</h3>
                <p>
                  Blog BeeFruit chia sẻ kiến thức về trái cây Việt Nam, xu hướng thị trường 
                  và các bài viết hữu ích về nông sản.
                </p>
              </div>

              {/* Popular Tags */}
              <div className="sidebar-widget">
                <h3>Chủ đề phổ biến</h3>
                <div className="tag-cloud">
                  {popularTags.map((tag, index) => (
                    <Link key={index} to="#" className="tag-item">{tag}</Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="sidebar-widget cta-widget">
                <h3>Liên hệ hợp tác</h3>
                <p>Bạn quan tâm đến sản phẩm của chúng tôi?</p>
                <Link to="/contact" className="btn btn-primary">Liên hệ ngay</Link>
              </div>
            </aside>
          </div>

          {/* Load More */}
          <div className="load-more">
            <button className="btn btn-secondary">Xem thêm bài viết</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
