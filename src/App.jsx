import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import CustomCursor from "./components/CustomCursor";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./components/blog/BlogDetails";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;