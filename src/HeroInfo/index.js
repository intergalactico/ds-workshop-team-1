import React from 'react'

import * as s from './styles.js'

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';

import logo from "../../assets/dsconf-logo.png";

const HeroInfo = (props) => {
  return (
    <s.HeroInfo>
      <div>{props.children}</div>

      <Paragraph centerContent={true}>
        <img src={logo} width="200" />
        <Heading>A DESIGN SYSTEMS CONFERENCE</Heading>
        <p>MARCH 14th - 15th, 2018</p>
        <p>IN HELSINKI, FINLAND</p>
        <p>Conference tickets are now sold out. There are some seats left in worksshops.</p>
        <div style={{marginTop: '3rem'}}><Button>WORKSHOP TICKETS</Button></div>
      </Paragraph>
    </s.HeroInfo>
  )
}

export default HeroInfo
