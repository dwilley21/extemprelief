import React from 'react';
import './App.css';
import styled from 'styled-components';

import HomeScreen from './Main/HomeScreen';
import HomeNav from './UI/HomeNav';



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