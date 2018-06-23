import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey, primary_font } from '../../../variables.jsx'


import Helmet from 'react-helmet'

export default class ProjectsFeature extends Component {
    render() {
        return (
            <ProjectsFeatureContainer>
                <section className="section">
                    PROJECTS FEATURE
                </section>
            </ProjectsFeatureContainer>
        )
    }
}

const ProjectsFeatureContainer = styled.div`
    width: 100%;
    height: 750px;
    background-color: ${ar_darkBlue};
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