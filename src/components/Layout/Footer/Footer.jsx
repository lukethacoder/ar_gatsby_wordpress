import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../../Accessories/UserLinks/UserLinks";
import "./Footer.css";
// import { config } from '../../../../data/SiteConfig'
import config from '../../../../data/SiteConfig'

class Footer extends Component {
  render() {
    const { config } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
            <UserLinks config={config} labeled />
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
    </footer>
    );
  }
}

export default Footer;
