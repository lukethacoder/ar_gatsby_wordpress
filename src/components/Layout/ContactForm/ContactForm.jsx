import React, {Component} from 'react'
import styled from 'styled-components'
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey, primary_font } from '../../../variables'
import ContactRawCode from './ContactRawCode'

export default class ContactForm extends Component {
    render() {
        return (
            <ContactFormContainer>
                <section className="section">
                    <h1>Contact Form Here</h1>
                    <ContactRawCode/>
                </section>
            </ContactFormContainer>
        )
    }
}

const ContactFormContainer = styled.div`
    width: 100%;
    height: 750px;
    /* background-color: ${ar_darkBlue}; */
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: auto;
        img {
            width: 100%;
        }
    }
`