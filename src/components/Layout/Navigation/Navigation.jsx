import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faTimes, faBars } from '@fortawesome/fontawesome-free-solid'
import { ar_white, ar_blue, nav_width, ar_darkBlue, ar_darkGrey, primary_font } from '../../../variables.jsx'

class MobileMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSubstate: false
        }
    }

    toggleSubMenu() {
        if (this.state.menuSubstate === true) {
            this.setState({
                menuSubstate: false
            });
        }
        else {
            this.setState({
                menuSubstate: true
            });
        }
    }
    render() {
        return(
            <MobileMenuContainer style={this.props.isOpen ? {display: "block"} : {display: "none"}}>
                <div>
                    <div className="navbarBrandMobile">
                        <Link to="/" className="navbarLogoMobile">
                            <img src={this.props.siteLogo} alt={this.props.siteLogoCaption}/>
                        </Link>
                    </div>
                    <div className="navExitMobile" onClick={this.props.isClosed}>
                        <Link to="/"><FontAwesomeIcon icon={faTimes}/></Link>
                    </div>
                    <div className="navbarNavigationMobile">
                        <ul className="navbarMenu" id="navMenu">
                            <li className="navbarItem"><Link to="/">
                                Home
                            </Link></li>
                            <li className="navbarItem navbarItemDropDownMobile" onClick={() => this.toggleSubMenu()} >
                                <Link to="/">What We Offer</Link>
                                <ul className="navbarSubItemContainer" style={this.state.menuSubstate ? {display: "block"} : {display: "none"}}>
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
                    <div className="navbarSocial">
                        <a href="/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
                    </div>
                </div>
            </MobileMenuContainer>
        )
    }
}

class TopNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuVisState: false
        }
    }
    
    toggleMenu(whatIsIt) {
        this.setState({
            menuVisState: whatIsIt
        })
    }
  render() {
      const siteLogo = this.props.siteLogo;
    //   const { siteLogo } = this.props.siteLogo.featured_media.source_url;
      const siteLogoCaption = this.props.siteLogoCaption;
    return (
      <Navbar>
            <div className="navbarDesktop">
                <div className="navbarBrand">
                    <Link to="/" className="navbarLogo">
                        <img src={siteLogo} alt={siteLogoCaption}/>
                    </Link>
                </div>
                <div className="navbarBurger" onClick={() => this.toggleMenu(true)}>
                    <Link to="/">Menu <FontAwesomeIcon icon={faBars}/></Link>
                </div>
                <div className="navbarNavigation">
                    <div className="navbarSocial">
                        <a href="/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
                        <a href="/"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
                    </div>
                    <ul className="navbarMenu" id="navMenu">
                        <li className="navbarItem"><Link to="/">
                            Home
                        </Link></li>
                        <li className="navbarItem navbarItemDropDown" id="dropdown-whatweoffer">
                            What We Offer
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
            <MobileMenu
                isOpen={this.state.menuVisState}
                isClosed={ () => this.toggleMenu(false)}
                siteLogo={siteLogo}
                siteLogoCaption={siteLogoCaption}
            />
      </Navbar>
    )
  }
}

const MobileMenuContainer = styled.div`
    background-color: rgba(1,1,1,0.75);
    width: 100vw;
    min-height: 100vh;
    padding-right: 15vw;
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    > div {
        display: block;
        width: 100%;
        min-height: 100vh;
        position: relative;
        background-color: ${ar_white};
        .navbarBrandMobile {
            width: 100%;
            height: auto;
            padding: 48px;
            a {
                display: block;
                width: 75%;
                margin: 0;
                padding: 0;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;

                }
            }
        }
        .navExitMobile {
            position: absolute;
            top: 24px;
            right: 24px;
            z-index: 999;
            a {
                font-size: 1.5rem;
                display: inline-flex;
                align-content: center;
                justify-content: center;
                text-align: center;
                svg {
                    align-self: center;
                    justify-self: center;
                    margin-left: 8px;
                }
            }
        }
        .navbarNavigationMobile {
            width: 100%;
            height: auto;
            padding: 0 0 0 48px;
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: 1fr;
            .navbarMenu { /* ul */
                display: grid;
                text-decoration: none;
                font-weight: 600;
                .navbarItem { /* li */
                    text-decoration: none;
                    color: #222;
                    margin: 16px 0;
                    a {
                        font-size: 2rem;
                        font-family: ${primary_font};
                        font-weight: 700;
                        text-transform: uppercase;
                        margin: 0;
                        padding: 0;
                    }
                    .navbarSubItemContainer {
                        font-size: 2rem;
                        li:nth-child(1) {
                            padding-top: 16px;
                        }
                        li:last-child {
                            padding-bottom: 0;
                        }
                        li {
                            padding: 8px 16px;
                            a {
                                font-size: 1.5rem;
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
                    font-size: 1.25rem;
                    padding: 0 16px;
                    font-family: ${primary_font};
                    font-weight: 700;
                    text-transform: uppercase;
                    &:hover {
                        #dropdown-items-whatweoffer {
                            display: block;
                            position: absolute;
                        }
                    }
                }
            }            
        }
        .navbarSocial {
            width: 100%;
            height: auto;
            display: block;
            padding: 0 0 0 48px;
            position: absolute;
            bottom: 24px;
            left: 0;
            a {
                align-self: end;
                text-decoration: none;
                color: ${ar_blue};
                margin-right: 8px;
                font-size: 1.75rem;
                &:hover {
                    color: ${ar_darkGrey};
                }
            }
        }
    }
`

const Navbar = styled.div`
    width: 100%;
    /* height: 75px; */
    display: grid;
    align-content: center;
    background-color: ${ar_white};
    margin: 0;
    padding: 0;
    z-index: 200;
    .navbarDesktop {
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
                height: 100%; /* adjust logo height here*/
                align-self: center;
                align-content: center;
                padding: 20% 0;
                @media (min-width: 1079px) {
                    height: 75%;
                    padding: 0;
                }
                img {
                    max-width: 100%;
                    max-height: 100%;
                    margin: 0;
                }
            }
        }
        .navbarBurger {
            /* display: none; */
            width: 100%;
            height: 100%;
            display: grid;
            align-content: center;
            justify-content: flex-end;
            @media (min-width: 1079px) {
                display: none;
            }
            a {
                font-size: 1.5rem;
                display: inline-flex;
                align-content: center;
                justify-content: center;
                text-align: center;
                svg {
                    align-self: center;
                    justify-self: center;
                    margin-left: 8px;
                }
            }
        }
        .navbarNavigation {
            display: none;
            grid-template-columns: 100%;
            grid-template-rows: .85fr 1fr;
            @media (min-width: 1079px) {
                display: grid;
            }
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
            .navbarMenu { /* ul */
                display: inline-flex;
                text-decoration: none;
                font-weight: 600;
                justify-self: flex-end;
                align-self: flex-start;
                justify-content: flex-end;
                align-content: flex-end;
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
                    font-size: 1.25rem;
                    padding: 0 16px;
                    font-family: ${primary_font};
                    font-weight: 700;
                    text-transform: uppercase;
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
