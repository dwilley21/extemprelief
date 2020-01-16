import React from 'react';
import Cards from '../UI/Cards';

import styled from 'styled-components';

const Section = styled.div`
  margin: 20px; 
  padding: 20px; 
  width: fit-content;
`
const FlexIt = styled.div`
 display: flex; 
 flex-direction: row;
 justify-content: center; 
`


function Services() {
  return (
    <>
   
    <FlexIt>
      <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
          <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
          <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
    </FlexIt>
    <FlexIt>
          <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
          <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
          <Cards
      title="Title"
      price="9.99"
      description="This is the shit"
      />
    </FlexIt>
    <FlexIt>
        <Cards
    title="Title"
    price="9.99"
    description="This is the shit"
    />
        <Cards
    title="Title"
    price="9.99"
    description="This is the shit"
    />
        <Cards
    title="Title"
    price="9.99"
    description="This is the shit"
    />
    </FlexIt>
    </>
  );
}
export default Services; 
