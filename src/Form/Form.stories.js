import React from 'react'
import { storiesOf } from '@storybook/react'

import Form from '.'
import FormDescription from '../FormDescription'
import TextInput from '../TextInput'
import Button from '../Button'
import SubHeading from '../SubHeading'

storiesOf('Form', module)
  .add('index', () => (
    <div style={{background: 'black'}}>
      <Form>
        <SubHeading>Stay up to date</SubHeading>
        <FormDescription>We will use the information you provided to share with you the information on when the tickets launch, and critical updates about the event.</FormDescription>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
        <Button style={{width: '100%'}}>Subscribe</Button>
      </Form>
    </div>
  ))
