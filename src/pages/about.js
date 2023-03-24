import React from 'react'
import Layout from '../components/Layout'

import styled from 'styled-components'

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <h2 className="text">This is the about page!</h2>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default About
