import React from 'react'

import * as s from './styles.js'

import logo from "../../assets/dsconf-logo.png";

const HeaderLogo = (props) => {
  return (
    <s.HeaderLogo>
      <img src={logo} width="200" style={{width: '2rem', display: 'inline-block', float: 'left'}}/>
      <span style={{ lineHeight: '3rem', marginLeft: '1rem'}}>DSCONF</span>
    </s.HeaderLogo>
  )
}

export default HeaderLogo
