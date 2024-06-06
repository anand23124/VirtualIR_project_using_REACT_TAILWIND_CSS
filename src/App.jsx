import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection"
import Testimonials from "./components/Testimonials"
import WorkFlowSection from "./components/WorkFlowSection"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
      <FeatureSection />
      <WorkFlowSection />
      <PricingSection />
      <Testimonials />
      <Footer />
      </div>
    </>
  )
}

export default App