import React from 'react'

import * as s from './styles.js'
import styled, { css } from 'styled-components'

const PageBlock = (props) => {
  const styles = props.wide ? { paddingLeft: 0, paddingRight: 0 } : null;
  const stylesContent = props.wide ? { maxWidth: 'unset', padding: 0 } : null;
  return (
    <s.PageBlock style={styles}>
      <s.PageBlockContent style={stylesContent}>
        {props.children}
      </s.PageBlockContent>
    </s.PageBlock>
  )
}

export default PageBlock
