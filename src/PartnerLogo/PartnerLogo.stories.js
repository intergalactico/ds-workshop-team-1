import React from 'react'
import { storiesOf } from '@storybook/react'

import PartnerLogo from '.'
import avatar from '../../assets/avatar.jpg'

storiesOf('PartnerLogo', module)
  .add('index', () => (
    <PartnerLogo logo={ avatar}/>
  ))
