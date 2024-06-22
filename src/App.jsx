import Companies from "./Components/Companies/Companies"
import Earnings from "./Components/Earnings/Earnings"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import Status from "./Components/Status/Status"
import Subscribe from "./Components/Subscribe/Subscribe"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing />
      <Earnings />
      <Status />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
