import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
