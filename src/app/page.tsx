import Header from "./components/micro-frontends/Header"
import HeroSection from "./components/micro-frontends/HeroSection"
import ProductsSection from "./components/micro-frontends/ProductsSection"
import NewsletterSection from "./components/micro-frontends/NewsletterSection"
import Footer from "./components/micro-frontends/Footer"
import { ToastContainer } from "react-toastify"

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <ToastContainer/>
        <ProductsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

