import React from 'react'

import * as s from './styles.js'

const Paragraph = (props) => {
  //const center = props.centerContent ? "center" : "";
  return (
    props.centerContent ? <s.CenteredParagraph >{props.children}</s.CenteredParagraph> : <s.Paragraph >{props.children}</s.Paragraph>
  )
}

export default Paragraph
