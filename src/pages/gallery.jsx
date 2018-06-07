import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Helmet from 'react-helmet'
// import GalleryGrid from "../../components/GalleryGrid";

export default class GalleryPage extends Component {
    render() {
        // const {data} = this.props;
        // const {edges: posts} = data.allMarkdownRemark;
        return (
            <div>
                <Helmet>
                    <title>Gallery</title>
                </Helmet>
                <section className="hero is-primary is-bold">
                    <h1>Gallery</h1>
                </section>
                <section className="section">
                    {/* <GalleryGrid posts={posts}/>
                    {console.log("posts: " + posts)} */}
                    {/* <img src={data.allMarkdownRemark.edges.node.frontmatter.cover}/> */}
                </section>
            </div>
        )
    }
}

// GalleryPage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array,
//         }),
//     }),
// };

export const galleryPageQuery = graphql`
query GalleryPage {
    allWordpressPost(filter: {categories: {name: {eq: "Gallery"}}}) {
        edges {
            node {
                title
                id
                categories {
                    name
                }
                acf {
                    image {
                        id
                    }
                    image_caption
                }
            }
        }
    }
}
`;