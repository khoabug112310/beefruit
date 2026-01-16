import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Recruitment from './pages/Recruitment'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
