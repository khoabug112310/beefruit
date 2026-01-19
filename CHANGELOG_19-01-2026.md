# Changelog - 19/01/2026

## Tổng quan
Cập nhật website BeeFruit với các tính năng mới: đa ngôn ngữ, chatbot, nút Zalo và nút back-to-top.

---

## 1. Thay đổi hình ảnh sản phẩm (Home.jsx)

### Mô tả
Thay thế emoji bằng hình ảnh thật từ thư mục `public/`

### Files thay đổi
- `src/pages/Home.jsx`
- `src/pages/Home.css`

### Chi tiết
```jsx
// Trước
{ id: 1, name: 'Cam', image: '🥭', description: '...' }

// Sau
{ id: 1, name: 'Cam', image: '/Cam - quýt/cam1.jpeg', description: '...' }
```

---

## 2. Hero Banner Slider

### Mô tả
Tạo slider hình ảnh chạy từ phải sang trái cho hero banner

### Files thay đổi
- `src/pages/Home.jsx` - Thêm mảng `heroBanners` và render slider
- `src/pages/Home.css` - Thêm CSS animation

### Hình ảnh sử dụng
- `/Hero-Banner/hinh1.jpg`
- `/Hero-Banner/hinh2.jpg`
- `/Hero-Banner/hinh3.jpg`
- `/Hero-Banner/hinh4.jpg`
- `/Hero-Banner/hinh5.jpg`

### Animation CSS
```css
@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100vw * 5));
  }
}

.hero-slider-track {
  animation: slideLeft 50s linear infinite; /* 10s mỗi hình */
}
```

---

## 3. Tính năng Đa ngôn ngữ (i18n)

### Mô tả
Thêm hỗ trợ tiếng Việt và tiếng Anh cho website

### Package cài đặt
```bash
npm install react-i18next i18next
```

### Files tạo mới
- `src/i18n/index.js` - Cấu hình i18next
- `src/i18n/vi.json` - Bản dịch tiếng Việt
- `src/i18n/en.json` - Bản dịch tiếng Anh

### Files cập nhật
- `src/main.jsx` - Import i18n
- `src/components/Header.jsx` - Thêm language dropdown
- `src/components/Header.css` - CSS cho language dropdown
- `src/pages/Home.jsx` - Sử dụng `useTranslation()`

### Cách sử dụng
```jsx
import { useTranslation } from 'react-i18next'

const { t, i18n } = useTranslation()

// Sử dụng
<h1>{t('home.hero.title')}</h1>

// Đổi ngôn ngữ
i18n.changeLanguage('en')
```

### Language Dropdown CSS
```css
.language-dropdown { position: relative; }
.language-menu { 
  position: absolute;
  top: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
```

---

## 4. Floating Buttons (Chatbot, Zalo, Back-to-top)

### Mô tả
Thêm 3 nút floating ở góc phải dưới màn hình

### Files tạo mới
- `src/components/FloatingButtons.jsx`
- `src/components/FloatingButtons.css`

### Files cập nhật
- `src/components/Layout.jsx` - Import và render FloatingButtons

### Tính năng chi tiết

#### 4.1 Chatbot
- Cửa sổ chat với tin nhắn chào mừng
- Bot trả lời tự động theo từ khóa (giá, sản phẩm, liên hệ, giao hàng)
- Hiệu ứng typing (3 chấm nhảy)
- **Tự động mở sau 10 giây** (chỉ 1 lần trong session)
- Hỗ trợ đa ngôn ngữ

```jsx
// Tự động mở sau 10 giây
useEffect(() => {
  const alreadyOpened = sessionStorage.getItem('chatbot_auto_opened')
  if (!alreadyOpened && !hasAutoOpened) {
    const timer = setTimeout(() => {
      setIsChatOpen(true)
      sessionStorage.setItem('chatbot_auto_opened', 'true')
    }, 10000)
    return () => clearTimeout(timer)
  }
}, [hasAutoOpened])
```

#### 4.2 Nút Zalo
- Click mở link Zalo group: `https://zalo.me/g/jvtwbg990`
- Sử dụng hình ảnh `/logozalo.png`
- Hiệu ứng pulse (vòng tròn lan tỏa)

```css
/* Pulse Animation */
.zalo-btn::before,
.zalo-btn::after {
  content: '';
  position: absolute;
  border: 3px solid #0068ff;
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
}
```

#### 4.3 Nút Back-to-top
- Chỉ hiện khi scroll xuống > 300px
- Click cuộn mượt lên đầu trang

```jsx
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
```

---

## 5. CSS Animations Giải thích

### 5.1 slideUp (Chatbot window)
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
→ Fade in + trượt từ dưới lên

### 5.2 typing (3 chấm nhảy)
```css
@keyframes typing {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
}
```
→ Các chấm nhảy lên xuống tuần tự (delay 0s, 0.2s, 0.4s)

### 5.3 pulse-ring (Zalo)
```css
@keyframes pulse-ring {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
}
```
→ Vòng tròn phóng to và mờ dần

---

## 6. Cấu trúc thư mục sau cập nhật

```
src/
├── i18n/
│   ├── index.js          # Cấu hình i18next
│   ├── vi.json           # Tiếng Việt
│   └── en.json           # Tiếng Anh
├── components/
│   ├── FloatingButtons.jsx
│   ├── FloatingButtons.css
│   ├── Header.jsx        # Cập nhật
│   ├── Header.css        # Cập nhật
│   └── Layout.jsx        # Cập nhật
├── pages/
│   ├── Home.jsx          # Cập nhật
│   └── Home.css          # Cập nhật
└── main.jsx              # Cập nhật

public/
├── Hero-Banner/
│   ├── hinh1.jpg - hinh5.jpg
├── Cam - quýt/
├── Táo/
├── Nho/
├── Cherry/
├── Kiwi/
├── logozalo.png
└── logo.png
```

---

## 7. Commit

```bash
git add .
git commit -m "Update 19.1 Trang chu"
git push
```

---

## Ghi chú
- Thời gian mỗi hình hero banner: **10 giây**
- Chatbot tự động mở sau: **10 giây**
- Ngôn ngữ được lưu trong: `localStorage`
- Trạng thái chatbot auto-open lưu trong: `sessionStorage`
