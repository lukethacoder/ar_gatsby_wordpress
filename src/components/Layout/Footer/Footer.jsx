import React, { Component } from "react";
import Link from "gatsby-link"
import styled from 'styled-components'

class Footer extends Component {
  render() {
    const { config } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <FooterContainer className="footer">
        <div className="container">
            <div className="content has-text-centered">
                {/* <img src={VitalDesigns}/> */}
                <p>
                    {config.licence} 
                </p>
                <p>
                    {copyright}
                </p>
            </div>
        </div>
        <div className="privacyTermsContainer">
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
            <a href={"http://" + process.env.GATSBY_WORDPRESS_IP} target="_blank">WP Admin</a>
        </div>
    </FooterContainer>
    );
  }
}

export default Footer;


const FooterContainer = styled.footer`
    justify-content: center;
    align-content: center;
    padding: 10px 5px 5px;
`