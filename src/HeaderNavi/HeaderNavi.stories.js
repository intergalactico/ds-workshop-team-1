import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderNavi from '.'

storiesOf('HeaderNavi', module)
  .add('index', () => (
    <HeaderNavi />
  ))
