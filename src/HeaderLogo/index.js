import React from 'react'

import * as s from './styles.js'

// import logo from "../../assets/dsconf-logo-small.png";
import logo from "../../assets/Logo.png";

const HeaderLogo = (props) => {
  return (
    <s.HeaderLogo>
      <img src={logo} width="200" style={{width: '2rem'}}/>
    </s.HeaderLogo>
  )
}

export default HeaderLogo
