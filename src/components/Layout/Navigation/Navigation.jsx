import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { siteTitle } from '../../../../data/SiteConfig'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faMapMarkerAlt, faPhone, faEnvelope, faBars } from '@fortawesome/fontawesome-free-solid'
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey, primary_font } from '../../../variables.jsx'

class TopNavigation extends Component {
  render() {
      console.log(this.props.siteLogo);
      const siteLogo = this.props.siteLogo;
    //   const { siteLogo } = this.props.siteLogo.featured_media.source_url;
      const siteLogoCaption = this.props.siteLogoCaption;
    return (
      <Navbar>
            <div>
                <div className="navbarBrand">
                    <Link to="/" className="navbarLogo">
                        {console.log( siteLogo)}
                        {console.log( "siteLogoCaption" )}
                        <img src={siteLogo} alt={"siteLogoCaption"}/>
                    </Link>
                </div>
                <div className="navbarNavigation">
                    <div className="navbarSocial">
                        <a href="/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
                    </div>
                    <Link className="navbarBurger" to="/">Menu <FontAwesomeIcon icon={faBars}/></Link>
                    <ul className="navbarMenu" id="navMenu">
                        <li className="navbarItem"><Link to="/">
                            Home
                        </Link></li>
                        <li className="navbarItem navbarItemDropDown" id="dropdown-whatweoffer">
                            <Link to="/">What We Offer</Link>
                            <ul className="navbarSubItemContainer" id="dropdown-items-whatweoffer">
                                <li><Link to="/studios">
                                    Roundhouse Studios
                                </Link></li>
                                <li><Link to="/living">
                                    Roundhouse Living
                                </Link></li>
                                <li><Link to="/">
                                    Custom Projects
                                </Link></li>
                                <li><Link to="/">
                                    Additional Services
                                </Link></li>
                            </ul>
                        </li>
                        <li className="navbarItem"><Link to="/process">
                            Process
                        </Link></li>
                        <li className="navbarItem"><Link to="/gallery">
                            Completed Projects
                        </Link></li>
                        <li className="navbarItem"><Link to="/contact">
                            Contact Us
                        </Link></li>
                        {/* <li><Link to="/contact">
                            About Us
                        </Link></li> */}
                    </ul>
                </div>
                
            </div>
      </Navbar>
    )
  }
}

const Navbar = styled.div`
    width: 100%;
    height: 75px;
    display: grid;
    align-content: center;
    background-color: ${ar_white};
    margin: 0;
    padding: 48px 0 0 0;
    z-index: 200;
    > div {
        width: ${nav_width};
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 75%;
        grid-template-rows: 100%;
        color: #222;
        text-decoration: none;
        border-radius: 0;
        margin: 0 auto;
        .navbarBrand {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
            display: flex;
            .navbarLogo {
                display: grid;
                grid-template-columns: 100%;
                grid-template-rows: 100%;
                width: 100%;
                height: 75%; /* adjust logo height here*/
                align-self: center;
                align-content: center;
                padding: 0;
                img {
                    max-width: 100%;
                    max-height: 100%;
                    margin: 0;
                }
            }
        }
        .navbarNavigation {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: .85fr 1fr;
            .navbarSocial {
                justify-self: flex-end;
                align-self: flex-end;
                justify-content: flex-start;
                align-content: flex-start;
                padding-bottom: 8px;
                a {
                    align-self: end;
                    text-decoration: none;
                    color: ${ar_blue};
                    margin-left: 4px;
                    font-size: 1.5rem;
                    &:hover {
                        color: ${ar_darkGrey};
                    }
                }
            }
            .navbarBurger {
                /* display: none; */
                @media (min-width: 1079px) {
                    display: none;
                }
            }
            .navbarMenu { /* ul */
                display: none;
                text-decoration: none;
                font-weight: 600;
                justify-self: flex-end;
                align-self: flex-start;
                justify-content: flex-end;
                align-content: flex-end;
                @media (min-width: 1079px) {
                    display: inline-flex;
                }
                .navbarItem { /* li */
                    text-decoration: none;
                    color: #222;
                    margin-left: 32px;
                    font-size: 1.2rem;
                    margin: 0;
                    &:last-child {
                        a {
                            padding: 0 0 0 16px;
                        }
                    }
                    a {
                        font-size: 1.25rem;
                        padding: 0 16px;
                        font-family: ${primary_font};
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                    .navbarSubItemContainer {
                        display: none;
                        padding-top: 24px;
                        li {
                            padding: 8px 16px;
                            background-color: ${ar_darkGrey};
                            a {
                                font-size: 1.2rem;
                                color: ${ar_white};
                                margin: 0;
                                padding: 0;
                                font-family: ${primary_font};
                                font-weight: 500;
                                text-transform: uppercase;
                            }
                        }
                    }
                }
                #dropdown-whatweoffer {
                    &:hover {
                        #dropdown-items-whatweoffer {
                            display: block;
                            position: absolute;
                        }
                    }
                }
            }
        }
    }
`;

export default TopNavigation
