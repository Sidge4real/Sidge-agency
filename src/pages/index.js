// Stap 1: Importeer React
import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery } from 'gatsby'
import Header from '../components/header'

// Stap 2: definieer je component
const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  
  return (
    <Layout>
      <Header></Header>
      <h1>Welcome to Sidge Agency!</h1>
      <p>Lorem ipsum</p>
      <StaticImage
    alt="randomized unsplash image!"
    src="https://source.unsplash.com/random/800x600"
  />
    </Layout>
  )
}
// Stap 3: Exporteer je component
export default IndexPage