import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GalleryGrid from '../components/Layout/GalleryGrid/GalleryGrid'

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
                <GalleryGrid gridItems={this.props.data.allWordpressPost.edges}/>
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