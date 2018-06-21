import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { siteTitle } from '../../../../data/SiteConfig'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey } from '../../../variables.jsx'

class TopNavigation extends Component {
  render() {
      console.log(this.props.siteLogo);
      const siteLogo = this.props.siteLogo;
    //   const { siteLogo } = this.props.siteLogo.featured_media.source_url;
      const siteLogoCaption = "cheese";
    return (
      <Navbar>
            <div>
                <div className="navbarBrand">
                    <Link to="/" className="navbarItem">
                        {console.log( siteLogo)}
                        {console.log( "siteLogoCaption" )}
                        <img src={siteLogo} alt={"siteLogoCaption"}/>
                    </Link>
                </div>
                <div>
                    <div className="navbarSocial">
                        <a href="/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
                    </div>
                    <div className="navbarMenu" id="navMenu">
                        <Link className="navbarItem" to="/">
                            Home
                        </Link>
                        <Link className="navbarItem" to="/studios">
                            Studios
                        </Link>
                        <Link className="navbarItem" to="/homes">
                            Homes
                        </Link>
                        <Link className="navbarItem" to="/process">
                            Process
                        </Link>
                        <Link className="navbarItem" to="/gallery">
                            Gallery
                        </Link>
                        <Link className="navbarItem" to="/about">
                            Who We Are
                        </Link>
                        <Link className="navbarItem" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </div>
                
            </div>
      </Navbar>
    )
  }
}

const Navbar = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    /* position: absolute; */
    background-color: ${ar_white};
    margin: 0;
    padding: 0;
    padding-top: 45px;
    z-index: 200;
    > div {
        width: ${nav_width};
        height: auto;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 75%;
        grid-template-rows: 100%;
        color: #222;
        text-decoration: none;
        border-radius: 0;
        margin: 10px auto 10px auto;
        .navbarBrand {
            height: 100%;
            display: flex;
            width: auto;
            justify-self: stretch;
            align-self: center;
            justify-content: flex-start;
            align-content: center;
            padding: 0;
            margin: 0;
            img {
                display: block;
                max-width: 75%;
                max-height: 100%;
                padding: 2% 0;
            }
        }
        > div {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: .85fr 1fr;
            .navbarSocial {
                justify-self: flex-end;
                align-self: flex-end;
                justify-content: flex-start;
                align-content: flex-start;
                padding-bottom: 15px;
                a {
                    align-self: end;
                    text-decoration: none;
                    color: ${ar_blue};
                    margin-left: 10px;
                    font-size: 1.5rem;
                    &:hover {
                        color: ${ar_darkGrey};
                    }
                }
            }
            .navbarMenu {
                display: inline-block;
                text-decoration: none;
                font-weight: 600;
                justify-self: flex-end;
                align-self: flex-start;
                justify-content: flex-end;
                align-content: flex-end;
                .navbarItem {
                    text-decoration: none;
                    color: #222;
                    margin-left: 30px;
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export default TopNavigation
