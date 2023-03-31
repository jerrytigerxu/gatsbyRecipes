import React from 'react'
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'

const tagTemplate = ({data, pageContext}) => {
  const recipes = data.allContentfulRecipe.nodes 

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}


export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }


`

export default tagTemplate
