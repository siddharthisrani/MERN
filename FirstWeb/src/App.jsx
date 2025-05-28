import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Products from "./database/Product.js"
import CardbyData from "./components/CardbyData.jsx"
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
     <>
     
     <Navbar/>
     <Hero/>
     
      <div className="flex flex-wrap justify-center py-10 bg-gray-100">
        {Products.map(product => (
          <CardbyData key={product.id} product={product} />
        ))}
      </div>

      <Section/>
      <Footer/>
     
     </>
  )
}

export default App