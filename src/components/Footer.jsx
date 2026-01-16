import { Link } from 'react-router-dom'
import { FaFacebook, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/logo.png" alt="BeeFruit Logo" className="logo-image" />
              </div>
              <p className="footer-desc">
                BeeFruit - Công ty Thực phẩm Thủ Đức House - 
                Xây dựng niềm tin để trái cây Việt vươn xa.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Liên kết nhanh</h4>
              <ul className="footer-links">
                <li><Link to="/about">Về chúng tôi</Link></li>
                <li><Link to="/products">Sản phẩm</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/news">Tin tức</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/recruitment">Tuyển dụng</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Thông tin liên hệ</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>Chợ nông sản, 141 QL1A, Tam Bình, Thủ Đức, TP. Hồ Chí Minh</span>
                </li>
                <li>
                  <FaPhone />
                  <span>008 6278 8887</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>sales@beefruit.vn</span>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Liên hệ nhanh</h4>
              <form className="footer-form">
                <input type="text" placeholder="Họ và tên" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Nội dung" rows="3"></textarea>
                <button type="submit" className="btn btn-primary">Gửi</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 BeeFruit. All rights reserved. | www.beefruit.vn</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
