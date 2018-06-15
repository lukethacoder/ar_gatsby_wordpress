import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Helmet from 'react-helmet'

export default class GalleryGrid extends Component {
    render() {
        return (
            <GalleryGridContainer>
                <section className="section">
                    {console.log(this.props.gridItems)}
                    {this.props.gridItems.map(post => (
                        <img src={post.node.acf.image.source_url} key={post.node.acf.image.id} alt={post.node.acf.image_caption}/>
                    ))}
                </section>
            </GalleryGridContainer>
        )
    }
}

const GalleryGridContainer = styled.div`
    width: 100%;
    background-color: green;
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        img {
            width: 100%;
        }
    }
`