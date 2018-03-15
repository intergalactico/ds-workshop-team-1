import React from 'react'

import * as s from './styles.js'

const Heading = (props) => {
  return (
    <div>
      <s.Heading>{props.children}</s.Heading>
    </div>
  )
}

export default Heading
