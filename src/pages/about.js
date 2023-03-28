import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2> I'm baby coloring book poke taxidermy
            </h2>
            <p>Taxidermy sdlfkjdsfkl sdflkjs sdlkfj sdlkfj sdlfkj sf lksdjfsd lkfjsdflkj sdflkjsd flksdjf lkdsf ljksd.</p>
            <p>Taiyaki tumblr adslfkj lskjfsldkfj ldskjf sdlkfj sdfl kjsdfslkd jfsd lj.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage 
          src="../assets/images/about.jpeg" 
          alt="Person Pouring Salt in Bowl" 
          className="about-img"
          placeholder="blurred"
          /> 
        </section>
      </main>
    </Layout>
  )
}



export default About
