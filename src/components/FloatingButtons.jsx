import { useState, useEffect } from 'react'
import { FaArrowUp, FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const { t, i18n } = useTranslation()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)

  // Zalo OA ID - thay bằng ID thật của bạn
  const zaloOAId = '0123456789'

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tự động mở chatbot sau 10 giây
  useEffect(() => {
    // Kiểm tra xem đã từng tự động mở chưa (trong session này)
    const alreadyOpened = sessionStorage.getItem('chatbot_auto_opened')
    
    if (!alreadyOpened && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsChatOpen(true)
        setHasAutoOpened(true)
        sessionStorage.setItem('chatbot_auto_opened', 'true')
      }, 10000) // 10 giây

      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  useEffect(() => {
    // Tin nhắn chào mừng khi mở chatbot
    if (isChatOpen && messages.length === 0) {
      const welcomeMessage = i18n.language === 'vi' 
        ? 'Xin chào! 👋 Tôi là trợ lý ảo của BeeFruit. Tôi có thể giúp gì cho bạn?'
        : 'Hello! 👋 I am BeeFruit\'s virtual assistant. How can I help you?'
      
      setMessages([{ type: 'bot', text: welcomeMessage }])
    }
  }, [isChatOpen, i18n.language])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openZalo = () => {
    window.open(`https://zalo.me/g/jvtwbg990`, '_blank')
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Thêm tin nhắn người dùng
    const userMessage = { type: 'user', text: inputMessage }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Giả lập phản hồi từ bot
    setTimeout(() => {
      const botResponses = i18n.language === 'vi' ? {
        'giá': 'Để biết giá sản phẩm chi tiết, vui lòng liên hệ hotline: 0123.456.789 hoặc để lại thông tin, chúng tôi sẽ gọi lại ngay!',
        'sản phẩm': 'BeeFruit chuyên nhập khẩu các loại trái cây cao cấp như: Táo, Nho, Cherry, Kiwi, Cam, Quýt... Bạn quan tâm sản phẩm nào?',
        'liên hệ': 'Bạn có thể liên hệ chúng tôi qua:\n📞 Hotline: 0123.456.789\n📧 Email: info@beefruit.vn\n📍 Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM',
        'giao hàng': 'Chúng tôi hỗ trợ giao hàng toàn quốc. Đơn hàng trên 500k được miễn phí vận chuyển nội thành TP.HCM.',
        'default': 'Cảm ơn bạn đã liên hệ! Để được hỗ trợ nhanh nhất, vui lòng gọi hotline 0123.456.789 hoặc nhắn tin qua Zalo.'
      } : {
        'price': 'For detailed product pricing, please contact our hotline: 0123.456.789 or leave your information, we will call back immediately!',
        'product': 'BeeFruit specializes in importing premium fruits such as: Apples, Grapes, Cherries, Kiwi, Oranges, Mandarins... Which product are you interested in?',
        'contact': 'You can contact us via:\n📞 Hotline: 0123.456.789\n📧 Email: info@beefruit.vn\n📍 Address: 123 ABC Street, XYZ District, HCMC',
        'delivery': 'We support nationwide delivery. Orders over 500k VND get free shipping within HCMC.',
        'default': 'Thank you for contacting us! For the fastest support, please call hotline 0123.456.789 or message via Zalo.'
      }

      const lowerInput = inputMessage.toLowerCase()
      let response = botResponses.default

      // Tìm từ khóa phù hợp
      for (const [keyword, reply] of Object.entries(botResponses)) {
        if (keyword !== 'default' && lowerInput.includes(keyword)) {
          response = reply
          break
        }
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="floating-buttons">
      {/* Chatbot */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
        {isChatOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <img src="/logo.png" alt="BeeFruit" className="chatbot-avatar" />
                <div>
                  <h4>BeeFruit Support</h4>
                  <span className="online-status">
                    {i18n.language === 'vi' ? '🟢 Trực tuyến' : '🟢 Online'}
                  </span>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsChatOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <span className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              )}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder={i18n.language === 'vi' ? 'Nhập tin nhắn...' : 'Type a message...'}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}

        <button 
          className={`floating-btn chatbot-btn ${isChatOpen ? 'active' : ''}`}
          onClick={() => setIsChatOpen(!isChatOpen)}
          title={i18n.language === 'vi' ? 'Chat với chúng tôi' : 'Chat with us'}
        >
          {isChatOpen ? <FaTimes /> : <FaComments />}
        </button>
      </div>

      {/* Zalo Button */}
      <button 
        className="floating-btn zalo-btn"
        onClick={openZalo}
        title={i18n.language === 'vi' ? 'Nhắn tin Zalo' : 'Message on Zalo'}
      >
        <img src="/logozalo.png" alt="Zalo" className="zalo-icon" />
      </button>

      {/* Scroll to Top Button */}
      <button 
        className={`floating-btn scroll-top-btn ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        title={i18n.language === 'vi' ? 'Lên đầu trang' : 'Back to top'}
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default FloatingButtons
