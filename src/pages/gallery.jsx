import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Helmet from 'react-helmet'
// import GalleryGrid from "../../components/GalleryGrid";

export default class GalleryPage extends Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allWordpressPost;
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
                    {this.props.data.allWordpressPost.edges.map(post => (
                        <img src={post.node.acf.image.source_url} alt={post.node.acf.image_caption}/>
                    ))}
                    {/* {console.log(this.props.data.allWordpressPost.edges[1].node.acf.image.source_url)} */}
                    {/* <img src={this.props.data.allWordpressPost.edges[0].node.acf.image.source_url}/> */}
                </section>
            </div>
        )
    }
}

GalleryPage.propTypes = {
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

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
                        source_url
                    }
                    image_caption
                }
            }
        }
    }
}
`;