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

function HomeNav() {
  return (
    <>
    <Router>
        <nav>
          <ul>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/About">About</Link>
            </div>
            <div>
              <Link to="/Order">Order</Link>
            </div>
            <div>
              <Link to="/Services">Services</Link>
            </div>
            <div>
              <Link to="/Contact">Contact</Link>

              <Route exact path='/' component={HomeScreen}/>
              <Route exact path='/Services' component={Services}/>
              <Route exact path='/Order' component={Order}/>
              <Route exact path='/Contact' component={ContactForm}/>
              <Route exact path='/About' component={About}/>




            </div>
          </ul>
        </nav>
        </Router>
    </>
  );
}
export default HomeNav;