import React from 'react'

import * as s from './styles.js'
import styled, { css } from 'styled-components'

const PageBlock = (props) => {
  return (
    <s.PageBlock>
      <s.PageBlockContent>
        {props.children}
      </s.PageBlockContent>
    </s.PageBlock>
  )
}

export default PageBlock
