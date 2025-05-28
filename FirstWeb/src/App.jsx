import Navbar from "./Navbar"
import Hero from "./Hero"
import Products from "./Product.js"
import CardbyData from "./CardbyData.jsx"
import Section from './Section.jsx'
import Footer from './Footer.jsx'
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