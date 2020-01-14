import React from 'react';
import styled from 'styled-components';
import Checkout from '../Forms/Checkout';

const Section = styled.div`
  margin: 20px; 
  padding: 20px; 
`

function Order() {
  return (
    <>
    <Section>
    <Checkout />
    </Section>
    </>
  );
}
export default Order;