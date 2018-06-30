import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing/PostListing'
import ProjectsFeature from '../components/Layout/ProjectsFeature/ProjectsFeature'
import ContactForm from '../components/Layout/ContactForm/ContactForm'
import SEO from '../components/Accessories/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    console.log(this.props.data);
    const postEdges = this.props.data.allWordpressPost.edges
    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <MainContentContainer>
          <ProjectsFeature />
          <ContactForm />
          {/* <PostListing postEdges={postEdges} /> */}
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const MainContentContainer = styled.main`
  width: 100%;
  margin: 48px auto 0 auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          date
          slug
          title
          modified
          excerpt
          id
          categories {
            name
          }
          content
          acf {
            kit_type
          }
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`

// DEFAULT GRAPHQL QUERY -
// export const pageQuery = graphql`
//   query IndexQuery {
//     allWordpressPost {
//       edges {
//         node {
//           featured_media {
//             source_url
//           }
//           date
//           slug
//           title
//           modified
//           excerpt
//           id
//           acf {
//             project
//             date
//           }
//           categories {
//             name
//           }
//           tags {
//             name
//           }
//           content
//         }
//       }
//     }
//     allWordpressPage {
//       edges {
//         node {
//           slug
//           title
//           id
//         }
//       }
//     }
//   }
// `