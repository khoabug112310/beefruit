# BeeFruit Website - Nhật ký công việc

## Ngày: 16-17/01/2026

### 1. Khởi tạo và chạy dự án
- Cài đặt dependencies với `npm install`
- Khởi động development server với `npm run dev`
- Website chạy tại: http://localhost:3000/

---

### 2. Đổi tên thương hiệu
**Từ:** Chánh Thu  
**Sang:** BeeFruit

#### Các file đã cập nhật:
- `index.html` - Title, meta description, keywords
- `src/components/Header.jsx` - Logo và tên công ty
- `src/components/Footer.jsx` - Logo, description, copyright
- `src/pages/Home.jsx` - Hero section, about section, tin tức
- `src/pages/About.jsx` - Header, giới thiệu, lịch sử, thị trường
- `src/pages/Products.jsx` - Email liên hệ
- `src/pages/Gallery.jsx` - Header, video section
- `src/pages/News.jsx` - Tiêu đề tin tức, nội dung, newsletter
- `src/pages/Blog.jsx` - Author, featured post, sidebar
- `src/pages/Recruitment.jsx` - Header, why join, job listings, apply section
- `src/pages/Contact.jsx` - Thông tin liên hệ

---

### 3. Cập nhật logo công ty
- Thay thế emoji logo bằng file ảnh `/logo.png`
- Cập nhật CSS cho logo image trong Header và Footer
- Files CSS đã sửa:
  - `src/components/Header.css` - Thêm `.logo-image` class
  - `src/components/Footer.css` - Thêm `.footer-logo .logo-image` class

---

### 4. Cập nhật thông tin công ty

#### Tên công ty mới:
**Công ty cổ phần thực phẩm Thủ Đức House TDHF-BEEFRUIT**

#### Địa chỉ mới:
**Chợ nông sản, 141 QL1A, Tam Bình, Thủ Đức, Thành phố Hồ Chí Minh**

#### Email mới:
- sales@beefruit.vn
- contact@beefruit.vn
- hr@beefruit.vn

#### Website:
- www.beefruit.vn

---

### 5. Nhúng Google Maps
- Thêm iframe Google Maps vào trang Liên hệ (`Contact.jsx`)
- Cập nhật CSS cho map container (`Contact.css`)
- Link Google Maps: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.210955234622!2d106.7265515!3d10.871553499999997...

---

### 6. Tạo file .gitignore
Loại bỏ các thư mục/file không cần thiết:
- `node_modules/`
- `dist/`
- `.env`
- Logs
- Editor files
- OS files

---

### 7. Push lên GitHub
- Repository: https://github.com/khoabug112310/beefruit.git
- Branch: main
- Commit: "Initial commit - BeeFruit website"
- 33 files đã được push

---

## Cấu trúc dự án

```
chanh-thu-website/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── CHANGELOG.md
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── logobeefruit.webp
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── Footer.css
    │   ├── Footer.jsx
    │   ├── Header.css
    │   ├── Header.jsx
    │   ├── Layout.css
    │   └── Layout.jsx
    └── pages/
        ├── About.css
        ├── About.jsx
        ├── Blog.css
        ├── Blog.jsx
        ├── Contact.css
        ├── Contact.jsx
        ├── Gallery.css
        ├── Gallery.jsx
        ├── Home.css
        ├── Home.jsx
        ├── News.css
        ├── News.jsx
        ├── Products.css
        ├── Products.jsx
        ├── Recruitment.css
        └── Recruitment.jsx
```

---

## Công nghệ sử dụng
- **React** 18.2.0
- **React Router DOM** 6.21.0
- **React Icons** 5.0.1
- **Vite** 5.0.8

---

## Hướng dẫn chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

---

## Ghi chú
- Tất cả từ khóa "Chánh Thu" đã được thay thế bằng "BeeFruit"
- Tất cả email @chanhthu.com đã được đổi thành @beefruit.vn
- Logo đã được cập nhật từ emoji sang file ảnh thực
- Google Maps đã được nhúng với vị trí chính xác của công ty
