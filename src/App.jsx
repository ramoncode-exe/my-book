import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Benefits from "./components/benefits/Benefits.jsx";
import About from "./components/about/About.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Footer from "./components/footer/Footer.jsx";

function App(){
  return(
    <div>
      <Header />
      <Home />
      <Benefits />
      <About />
      <Testimonials />
      <Footer />
    </div> 
  );
}

export default App;
