import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Speaker from '.';

import avatar from '../../assets/avatar.jpg';

storiesOf('Speaker', module)
  .add('index', withInfo(`
    The Speaker component renders a card of a TeamMember. It contains
    their avatar, name, title, and links to social networks. Sometimes the additionnal text
    `)(() => (
      <Speaker
        name="Person #1"
        title="CEO of everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
        text={'Hello there this is a long test text that we wanna try '}
      />
  )))
  .add('no text',
    withInfo()(() => (
      <Speaker
        name="Person #1"
        title="CEO of everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
      />
  )));
