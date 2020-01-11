import React from 'react';
import './App.css';
import styled from 'styled-components';

import HomeScreen from './Main/HomeScreen';
import About from './Main/About';
import Checkout from './Forms/Checkout';
import ContactForm from './Forms/ContactForm';
import HomeNav from './UI/HomeNav';
import Order from './Main/Order';
import Services from './Main/Services';



const Wrapper = styled.div`
       margin: 10px; 
`

function App() {
  return (
    <Wrapper className="App">

      <HomeScreen/>

    <HomeNav />
 
     
    </Wrapper>
  );
}
export default App;