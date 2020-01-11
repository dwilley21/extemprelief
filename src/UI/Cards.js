import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` 
  padding: 50px;
`

const Title =styled.h2`
  color: black; 
  font-weight: 300; 
  @media (max-wdth: 500px){
    font-size: 1rem;
  }
`

const Price = styled.div`
  color: black; 
  font-weight: 300;
  margin: 6px 0; 
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
}) =>(
  <Wrapper>
    <Title>{title}</Title>
    <Price>{price}</Price>
    <Description>{description}</Description>
    <BuyButton>Buy</BuyButton>
  </Wrapper>
)

export default Cards;