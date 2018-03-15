import React from 'react'

import * as s from './styles.js'
import { string } from 'prop-types'

const PartnerLogo = (props) => {
  const { logo } = props;
  return (
    <s.PartnerLogo>
      <img src={logo} width="200" />
    </s.PartnerLogo>
  )
}

PartnerLogo.propTypes = {
  logo: string.isRequired,
};


export default PartnerLogo
