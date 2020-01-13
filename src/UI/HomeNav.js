import React from 'react';
import styled from 'styled-components';
import HomeScreen from '../Main/HomeScreen';
import Services from '../Main/Services';
import Order from '../Main/Order';
import About from '../Main/About';
import ContactForm from '../Forms/ContactForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const FlexIt = styled.div `
 display: flex; 
 flex-direction: row;
 justify-content: center;
`
const Tags = styled.div `
  padding: 40px; 
  text-decoration: none;
  &:hover{
   font-size: 1.25em;
  }
`

function HomeNav() {
  return (
    <>
    <Router>
        <nav>
          <FlexIt>
            {/* <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/">Home</Link>
            </Tags> */}
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/About">About</Link>
            </Tags>
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/Order">Order</Link>
            </Tags>
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/Services">Services</Link>
            </Tags>
            <Tags>
              <Link style={{ textDecoration: 'none', color: 'black'}} to="/Contact">Contact</Link>
            </Tags>          
          </FlexIt>
          <Route exact path='/' component={HomeScreen}/>
              <Route exact path='/Services' component={Services}/>
              <Route exact path='/Order' component={Order}/>
              <Route exact path='/Contact' component={ContactForm}/>
              <Route exact path='/About' component={About}/>
        </nav>
        </Router>
    </>
  );
}
export default HomeNav;