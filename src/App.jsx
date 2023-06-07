import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsSection from "./pages/ProductsSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsSection />} />
          <Route path="/:productid" element={<ProductDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
