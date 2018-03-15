import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'
import HeaderNavi from '../HeaderNavi'
import HeaderNaviLink from '../HeaderNaviLink'
import HeaderLogo from '../HeaderLogo'

storiesOf('Header', module)
  .add('index', () => (
    <div>
      <Header>
        <HeaderLogo />
        <HeaderNavi>
          <HeaderNaviLink url="/home">Home</HeaderNaviLink>
          <HeaderNaviLink url="/about">About</HeaderNaviLink>
          <HeaderNaviLink url="/tickets">Ticket info</HeaderNaviLink>
          <HeaderNaviLink url="/Program">Program</HeaderNaviLink>
          <HeaderNaviLink url="/venue_location">Venue and location</HeaderNaviLink>
        </HeaderNavi>
      </Header>
    </div>
  ))
