import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroInfo from '.'

storiesOf('HeroInfo', module)
  .add('index', () => (
    <HeroInfo />
  ))
