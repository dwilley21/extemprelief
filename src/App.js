import React from 'react';
import './App.css';

import HomeScreen from './Main/HomeScreen';
import About from './Main/About';
import Checkout from './Forms/Checkout';
import ContactForm from './Forms/ContactForm';
import HomeNav from './UI/HomeNav';
import Order from './Main/Order';


function App() {
  return (
    <div className="App">
    <HomeScreen/>
    <HomeNav />
    <About />
    <ContactForm />
    <Order />
    <Checkout />
    </div>
  );
}
export default App;