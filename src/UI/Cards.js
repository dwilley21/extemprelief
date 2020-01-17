import React from 'react';
import styled from 'styled-components';
import Checkout from '../Forms/Checkout';

const Wrapper = styled.div` 
  margin: 20px; 
  padding: 35px;
  border: 2px solid black; 
`

const Title = styled.h2`
  color: black; 
  font-weight: 300; 
  border-bottom: 2px solid dodgerblue;
  @media (max-wdth: 500px){
    font-size: 1rem;
  }
`

const Price = styled.div`
  color: black; 
  font-weight: 300; 
  margin: 20px; 
  @media (max-wdth: 500px){
    font-size: .8rem;
  }
`

const Description = styled.p`
  color: black; 
  font-weight: 300;
  @media (max-wdth: 500px){
    font-size: .75rem;
  }

`
const BuyButton = styled.button`
  color: black; 
  font-weight: 300; 
  border: 10px solid balck; 
`
const Cards = ({
  title, 
  price, 
  description
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Price>{price}</Price>
    <Checkout>Buy</Checkout>
  </Wrapper>
)

export default Cards;