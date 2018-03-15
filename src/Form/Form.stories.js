import React from 'react'
import { storiesOf } from '@storybook/react'

import Form from '.'

storiesOf('Form', module)
  .add('index', () => (
    <Form />
  ))
