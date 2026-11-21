import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Headphones  from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Checkout from "./pages/Checkout";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}