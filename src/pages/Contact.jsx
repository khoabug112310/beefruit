import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    })
  }

  const offices = [
    {
      name: 'Trụ sở chính - TDHF-BEEFRUIT',
      address: 'Chợ nông sản, 141 QL1A, Tam Bình, Thủ Đức, Thành phố Hồ Chí Minh',
      phone: '008 6278 8887',
      icon: '🏢',
    },
  ]

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Liên Hệ</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Hotline</h3>
              <p>008 6278 8887</p>
              <p>0889 269 777</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>sales@beefruit.vn</p>
              <p>contact@beefruit.vn</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Địa chỉ</h3>
              <p>Chợ nông sản, 141 QL1A</p>
              <p>Tam Bình, Thủ Đức, TP.HCM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <p>Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <label>Công ty</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tên công ty"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Tiêu đề</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tiêu đề tin nhắn"
                  />
                </div>

                <div className="form-group">
                  <label>Nội dung *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Nhập nội dung tin nhắn"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
              </form>
            </div>

            {/* Map */}
            <div className="contact-map-wrapper">
              <h2>Bản đồ</h2>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.210955234622!2d106.7265515!3d10.871553499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752700324e6cff%3A0x1e0b9339737db278!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gdGjhu7FjIHBo4bqpbSBUaOG7pyDEkOG7qWMgSG91c2UgVERIRi1CRUVGUlVJVA!5e0!3m2!1svi!2s!4v1768580741046!5m2!1svi!2s" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BeeFruit Location"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3>Kết nối với chúng tôi</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                    <FaTiktok /> TikTok
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                    <FaYoutube /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="offices-section">
        <div className="container">
          <div className="section-title">
            <h2>Địa chỉ văn phòng & nhà máy</h2>
          </div>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-icon">{office.icon}</div>
                <h3>{office.name}</h3>
                <p className="office-address">
                  <FaMapMarkerAlt className="icon" />
                  {office.address}
                </p>
                {office.phone && (
                  <p className="office-phone">
                    <FaPhone className="icon" />
                    {office.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
