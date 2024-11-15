import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import Product from './pages/Productpage';


function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<Product />} />
          
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
