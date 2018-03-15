import React from 'react'

import * as s from './styles.js'

const HeaderNaviLink = (props) => {
  return (
    <s.HeaderNaviLink href={props.url}>{props.children}</s.HeaderNaviLink>
  )
}

export default HeaderNaviLink
