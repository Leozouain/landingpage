import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Logos from "./components/Logos";

function App() {
  return (
    <div className="r">
      <Navbar />
      <Hero />|
      <Logos />
      <Features />
      <Testimonial />
      <Faq />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
