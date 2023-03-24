import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as homeStyles from '../examples/home.module.css'
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={homeStyles.page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Hello people!</h1>
        <Link to="/about">about</Link>
        <p className={homeStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum, quos quis quo debitis adipisci tempore soluta modi temporibus libero. Praesentium, explicabo cupiditate assumenda distinctio incidunt labore? Debitis, optio voluptatibus?</p>
      </div>
    
    </Layout>
  )
}
