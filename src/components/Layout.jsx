import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Layout
