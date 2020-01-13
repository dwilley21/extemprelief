import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
`

const Header = styled.h1`
  font-size: 1.5em; 
  font-weight: bold; 

`
const AboutText = styled.p`
  display: flex;
  justify-content: flex-start;  

`
function About() {
  return (
    <>
    <Section>
      <Header>About us</Header>
      <AboutText>Lorem ipsum dolor amet intelligentsia distillery venmo dreamcatcher pour-over chia before they sold out poke cardigan PBR&B listicle pinterest. Palo santo occupy keytar, schlitz offal put a bird on it fanny pack master cleanse cliche scenester fam. Vice fanny pack taxidermy literally raw denim cronut brooklyn pug neutra banh mi hexagon retro. Vice blog drinking vinegar, man braid DIY meditation iPhone godard fam hell of everyday carry hoodie echo park mixtape tofu. Gochujang franzen bushwick tilde iceland pinterest pug 90's YOLO woke post-ironic DIY wayfarers. +1 fam deep v, tacos master cleanse pork belly slow-carb try-hard tumeric mustache gluten-free pour-over.

  Edison bulb cray fingerstache chartreuse before they sold out beard, palo santo roof party intelligentsia 8-bit vexillologist. Celiac actually squid microdosing mumblecore forage. Gentrify blog kitsch freegan beard. Activated charcoal lo-fi beard williamsburg locavore pork belly.

  Tofu pickled brunch, green juice williamsburg lyft tote bag forage. 8-bit DIY vape twee ugh mixtape flannel, hell of health goth hot chicken aesthetic. Cloud bread irony mlkshk subway tile pabst single-origin coffee. Stumptown portland viral tofu vice taxidermy.
    </AboutText>
    </Section>
    </>
    
  );
}
export default About;