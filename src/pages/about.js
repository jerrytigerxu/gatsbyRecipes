import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({ data:{allContentfulRecipe: {nodes:recipes}} }) => {
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default About
