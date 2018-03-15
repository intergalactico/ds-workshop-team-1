import React from 'react'

import * as s from './styles.js'

const TextInput = (props) => {
  return (
    <s.TextInput type="text" placeholder={props.placeholder}/>
  )
}

export default TextInput
