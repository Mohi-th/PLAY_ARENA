import { ArrowRight } from "lucide-react"
import BannerSection from "./components/BannerSection"
import EventsSection from "./components/EventsSection"
import MobileMenu from "./components/MobileMenu"
import Navbar from "./components/Navbar"
import NavbarDropDowns from "./components/NavbarDropDowns"
import PlayComponent from "./components/NavbarPlayComponent"
import EventCarousel from "./components/EventCarousel"
import BookSlot from "./components/BookSlot"
import MemberShip from "./components/MemberShip"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="w-screen overflow-auto h-screen">
      <Navbar/>
      <BannerSection/>
      <EventsSection/>
      <EventCarousel/>
      <BookSlot/>
      <MemberShip/>
      <Footer/>
    </div>
    
  )
}

export default App
