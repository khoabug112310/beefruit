import { useState } from 'react'
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaGraduationCap, FaUsers, FaPaperPlane } from 'react-icons/fa'
import './Recruitment.css'

const Recruitment = () => {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Nhân viên Kinh doanh Xuất khẩu',
      department: 'Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      experience: '2-3 năm',
      salary: 'Thỏa thuận',
      deadline: '31/01/2026',
      description: 'Phát triển thị trường xuất khẩu, tìm kiếm khách hàng mới, duy trì quan hệ với đối tác quốc tế.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Kinh tế, Ngoại thương hoặc liên quan',
        'Tiếng Anh thành thạo (IELTS 6.5+ hoặc tương đương)',
        'Có kinh nghiệm xuất nhập khẩu là lợi thế',
        'Kỹ năng giao tiếp và đàm phán tốt',
      ],
      benefits: [
        'Lương cạnh tranh + thưởng hấp dẫn',
        'Bảo hiểm đầy đủ theo quy định',
        'Cơ hội đi công tác nước ngoài',
        'Môi trường làm việc chuyên nghiệp',
      ],
    },
    {
      id: 2,
      title: 'Kỹ sư QC/QA',
      department: 'Chất lượng',
      location: 'Bến Tre',
      type: 'Toàn thời gian',
      experience: '1-2 năm',
      salary: '12-18 triệu',
      deadline: '28/02/2026',
      description: 'Kiểm soát chất lượng sản phẩm, đảm bảo quy trình sản xuất đạt tiêu chuẩn FSSC 22000.',
      requirements: [
        'Tốt nghiệp Đại học ngành Công nghệ Thực phẩm hoặc liên quan',
        'Hiểu biết về HACCP, FSSC 22000',
        'Có kinh nghiệm trong ngành thực phẩm',
        'Cẩn thận, tỉ mỉ và có trách nhiệm',
      ],
      benefits: [
        'Lương tháng 13',
        'Phụ cấp ăn trưa, đi lại',
        'Đào tạo nâng cao nghiệp vụ',
        'Cơ hội thăng tiến',
      ],
    },
    {
      id: 3,
      title: 'Nhân viên Marketing',
      department: 'Marketing',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      experience: '1-3 năm',
      salary: '10-15 triệu',
      deadline: '15/02/2026',
      description: 'Xây dựng chiến lược marketing, quản lý kênh truyền thông, tổ chức sự kiện.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Marketing, Truyền thông',
        'Thành thạo các công cụ marketing digital',
        'Khả năng sáng tạo nội dung',
        'Tiếng Anh giao tiếp tốt',
      ],
      benefits: [
        'Lương cạnh tranh + KPI',
        'Môi trường sáng tạo, năng động',
        'Team building định kỳ',
        'Bảo hiểm sức khỏe',
      ],
    },
    {
      id: 4,
      title: 'Công nhân Đóng gói',
      department: 'Sản xuất',
      location: 'Bến Tre / Đăk Lăk',
      type: 'Toàn thời gian',
      experience: 'Không yêu cầu',
      salary: '8-12 triệu',
      deadline: 'Tuyển dụng liên tục',
      description: 'Đóng gói sản phẩm trái cây theo tiêu chuẩn xuất khẩu.',
      requirements: [
        'Tốt nghiệp THPT trở lên',
        'Sức khỏe tốt, chịu khó',
        'Có thể làm ca kíp',
        'Ưu tiên có kinh nghiệm',
      ],
      benefits: [
        'Lương + phụ cấp ca đêm',
        'Bảo hiểm đầy đủ',
        'Được đào tạo',
        'Xe đưa đón',
      ],
    },
  ]

  const benefits = [
    { icon: <FaBriefcase />, title: 'Môi trường chuyên nghiệp', desc: 'Làm việc trong môi trường hiện đại, chuyên nghiệp' },
    { icon: <FaGraduationCap />, title: 'Đào tạo phát triển', desc: 'Cơ hội được đào tạo và phát triển năng lực' },
    { icon: <FaUsers />, title: 'Đội ngũ năng động', desc: 'Làm việc cùng đội ngũ trẻ trung, nhiệt huyết' },
    { icon: <FaPaperPlane />, title: 'Cơ hội thăng tiến', desc: 'Lộ trình thăng tiến rõ ràng' },
  ]

  return (
    <div className="recruitment-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Tuyển Dụng</h1>
          <p>Gia nhập đội ngũ BeeFruit - Cùng đưa trái cây Việt vươn xa</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join">
        <div className="container">
          <div className="section-title">
            <h2>Tại sao chọn BeeFruit?</h2>
            <p>Những lý do để bạn trở thành thành viên của gia đình BeeFruit</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listings">
        <div className="container">
          <div className="section-title">
            <h2>Vị trí đang tuyển</h2>
            <p>Khám phá các cơ hội nghề nghiệp tại BeeFruit</p>
          </div>
          <div className="jobs-grid">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className={`job-card ${selectedJob?.id === job.id ? 'active' : ''}`}
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-department">{job.department}</span>
                </div>
                <div className="job-meta">
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span><FaClock /> {job.type}</span>
                  <span><FaBriefcase /> {job.experience}</span>
                </div>
                <p className="job-salary">Mức lương: {job.salary}</p>
                <p className="job-deadline">Hạn nộp: {job.deadline}</p>
                
                {selectedJob?.id === job.id && (
                  <div className="job-details">
                    <div className="detail-section">
                      <h4>Mô tả công việc</h4>
                      <p>{job.description}</p>
                    </div>
                    <div className="detail-section">
                      <h4>Yêu cầu</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Quyền lợi</h4>
                      <ul>
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn btn-primary">Ứng tuyển ngay</button>
                  </div>
                )}
                
                <span className="view-more">
                  {selectedJob?.id === job.id ? 'Thu gọn' : 'Xem chi tiết'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="apply-section">
        <div className="container">
          <div className="apply-content">
            <h2>Sẵn sàng gia nhập BeeFruit?</h2>
            <p>Gửi CV của bạn về email tuyển dụng hoặc liên hệ với chúng tôi</p>
            <div className="apply-info">
              <div className="apply-item">
                <strong>Email:</strong>
                <span>hr@beefruit.vn</span>
              </div>
              <div className="apply-item">
                <strong>Hotline:</strong>
                <span>008 6278 8887</span>
              </div>
            </div>
            <a href="mailto:hr@beefruit.vn" className="btn btn-primary">Gửi CV ngay</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recruitment
