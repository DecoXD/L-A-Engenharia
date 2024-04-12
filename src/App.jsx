import Header from "./components/Header"
import { About, Hero, Services } from "./sections"
import Busines from "./sections/Busines"
import Testimonials from "./sections/Testimonials"

function App() {
  
  return (
   <div className="">
    <Header/>
    <section className="">
      <Hero/>
    </section>
    
    <section className="">
      <Services/>
    </section>
    <section className="pt-32">
      <About/>
    </section>
  
    <section className="pt-32">
      <Busines/>
    </section>

    <section className="pt-32">
      <Testimonials/>
    </section>
  
   </div>
  )
}

export default App
