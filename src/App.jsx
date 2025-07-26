import React, { useState } from 'react';
import Navbar from './components/Navbar_1';
import Main from './components/Mainpg';
import Collections from './components/Collections';
import NewArrivals from './components/NewArrivals';
import SellFurniture from './components/SellFurniture';
import B2BSolutions from './components/B2BSolutions';
import BulkQuoteForm from './components/BulkQuoteForm';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Cards from './components/Cards';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>  
      <Navbar />
      <Main />   
      <Collections />
      <NewArrivals />
      <SellFurniture />
      <B2BSolutions />
      <BulkQuoteForm />
      <Testimonials />   
      <Header />      
      <Cards />      
      <Newsletter />
      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
