import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from '.'

storiesOf('Heading', module)
  .add('index', () => (
    <Heading>Heading</Heading>
  ))
