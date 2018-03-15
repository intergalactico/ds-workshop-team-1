import React from 'react'
import { storiesOf } from '@storybook/react'

import PageBlock from '.'
import Paragraph from '../Paragraph'
import ParagraphLink from '../ParagraphLink'
import Heading from '../Heading'
import Button from '../Button';

storiesOf('PageBlock', module)
.add('index', () => (
  <PageBlock>
    <p>PageBlock content</p>
  </PageBlock>
))
.add('Full', () => (
  <PageBlock>
    <Heading>Heading</Heading>
    <Paragraph>
      lorem ipsum with <ParagraphLink url="google.com">link</ParagraphLink>
    </Paragraph>
    <Paragraph>
      lorem ipsum with <ParagraphLink url="google.com">longer link</ParagraphLink> and much more text text text text... and much more text text text text... and much more text text text text... and much more text text text text... and much more text text text text... and much more text text text text... and much more text text text text...
    </Paragraph>
    <Paragraph centerContent={true}>
      <Button>Push me</Button>
      </Paragraph>
    <Paragraph centerContent={true}>
      <Button>Push me</Button>
      </Paragraph>
    <Paragraph centerContent={true}>
      <Button>Push me</Button>
      <Button>Push me</Button>
      <Button>Push me</Button>
    </Paragraph>
    <Paragraph centerContent={true}>
      <Button>Push me</Button>
    </Paragraph>
  </PageBlock>
))
