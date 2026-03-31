import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks } from './components'
import CursorCanvas from "./components/canvas/Cursor"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <CursorCanvas /> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Tech />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App