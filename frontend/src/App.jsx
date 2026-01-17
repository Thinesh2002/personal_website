import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/base/Header/index.jsx";
import Footer from "./components/base/Footer/index.jsx";
import About from "./pages/About/index.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
     <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    <Footer />
    </>
  );
}
