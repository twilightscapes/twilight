
import Layout from '../components/LayoutFull';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'




import Gallery from '../components/Gallery'


const gal1Query = graphql`
  query gal1Query {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(gal1Query)
  return (
    <Layout>
      
      <Gallery
        photos={data.allFile.edges}
      />
    </Layout>
  )
}

export default Gal1Page
