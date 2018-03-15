import React from 'react'

import * as s from './styles.js'

const ParagraphLink = (props) => {
  return (
    <s.ParagraphLink href={props.url}>{props.children}</s.ParagraphLink>
  )
}

export default ParagraphLink
