import React from 'react'
import Layout from '../components/Layout'

import * as aboutStyles from '../examples/about.module.css'
import styled from 'styled-components'


const About = () => {
  return (
    <Layout>
      <h2 className={aboutStyles.page}>This is the about page!</h2>
    </Layout>
  )
}

const Wrapper = styled.section`
  .page {
    color: red;
  }

  .page h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default About
