import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin: 20px; 
  padding: 20px; 
  background-color: black; 
`
const Header = styled.h1`
  color: white; 
  font-weight: 700; 
`

const BlueMe = styled.span `
  color: dodgerblue; 
`
function HomeScreen() {
  return (
    <>
    <Section>
      <Header><BlueMe>Extemp</BlueMe>Relief</Header>
    </Section>
    </>
  );
}
export default HomeScreen;