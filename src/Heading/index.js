import React from 'react'

import * as s from './styles.js'

const Heading = (props) => {
  return (
    <div style={{background: 'black'}}>
      <s.Heading>{props.children}</s.Heading>
    </div>
  )
}

export default Heading
