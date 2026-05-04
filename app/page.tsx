import Availability from "./components/Availabilty";
import HeroSection from "./components/Hero";
 import Slider from "./components/Slider";
 
import CalendarHome from "./components/CalendarHome";
 
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import About from "./components/About";
 import Testimonials from "./components/Testmonials";
import Services from "./components/Services";
import Specialists from "./components/Specialists";
 
export default function Home() {
  return (
     <div>
      
      <HeroSection />
      <Slider />
      <Availability />
      <Services />
      <Testimonials/>
      <CalendarHome />
      <Specialists/>
      <Plans/>
      <FAQ/>
      <Contact/>
      <About/>
    
     </div>
  );
}
