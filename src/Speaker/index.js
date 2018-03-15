import React from 'react';
import { string, object } from 'prop-types';

import * as s from './styles.js';
import * as ts from '../Typography/styles.js';
import TeamMember from '../TeamMember';

const Speaker = (props) => {

  const { name, title, social, avatar, text } = props;
  return (
    <s.Speaker>
      <TeamMember 
        name={name}
        title={title}
        social={social}
        avatar={avatar}
        >
      </TeamMember>
      <ts.P>{ text }</ts.P>
    </s.Speaker>
  )
}

Speaker.propTypes = {
  text: string
};

export default Speaker
