/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText, HeroInfo, Header, HeaderLogo, HeaderNavi, HeaderNaviLink, Paragraph, ParagraphLink, PageBlock, Form, FormDescription, TextInput, Heading } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
      <PageBlock>
        <HeroInfo>
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
        </HeroInfo>
      </PageBlock>
      <PageBlock>
        <Heading>A two-day conference with one day of keynotes and one day of workshops</Heading>
        <Paragraph>
          DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
        </Paragraph>
        <Paragraph>
          An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
        </Paragraph>
        <Paragraph>
          Sounds good? Make sure you familiarize yourself with our <ParagraphLink url="https://dsconference.com/code-of-conduct/">code of conduct.</ParagraphLink>
        </Paragraph>
      </PageBlock>
      <PageBlock>
        <Heading>Keynotes, talks and workshops from the fore-front of Design Systems.</Heading>
        <Paragraph>DSCONF has 4 long, and 6 shorter speeches during the conference day. We are aiming to bring abundance of tangible information to attendees with real cases and learnings. The second day of DSCONF is dedicated to workshops. There is a total number of 5 workshops, and you can purchase them separately. The workshops are either half-day or full-day.</Paragraph>
      </PageBlock>
    </div>
    // <div>
    //   <div>
    //     <Icon name='star' color='#000' isInverted size='0.785rem' />
    //     <Icon name='star' color='#888888' isInverted />
    //     <Icon name='github' color='#1b8ceb'isInverted size='1.5rem' />
    //     <Icon name='gift' color='#00d1b2' isInverted size='2.0rem' />
    //     <Icon name='bug' color='#e91e63' isInverted size='3rem' />
    //   </div>
    //   <div>
    //     <Section>
    //       <SectionHeader>Hello!</SectionHeader>
    //       <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionText>
    //     </Section>
    //   </div>
    // </div>
  )
}

export default Home
