import React from 'react'
import Link from 'gatsby-link'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid'

import styled from 'styled-components'
import { ar_blue, ar_grey, ar_darkBlue, nav_width } from '../../../variables.jsx'

const TopInfo = () => {
    return (
        <TopInfoContainer className="topInfo">
            <div>
                <a className="topNavItem" href="/">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    26-28 Gulson Street, Goulburn NSW 2580
                </a>
                <a className="topNavItem" href="/studios">
                    <FontAwesomeIcon icon={faPhone}/>
                    +61401 234 567
                </a>
                <a className="topNavItem" href="/homes">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    hello@australianroundhouses.com.au
                </a>
            </div>
        </TopInfoContainer>            
    );
};

export default TopInfo;


const TopInfoContainer = styled.div`
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 250;
    background-color: ${ar_darkBlue};
    > div {
        width: ${nav_width};
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;
        margin: 0 auto;
        align-content: center;
        a:nth-of-type(1) {
            justify-self: flex-start;
        }
        a:nth-of-type(2) {
            justify-self: center;
        }
        a:nth-of-type(3) {
            justify-self: flex-end;
        }
        a {
            height: auto;
            color: ${ar_grey};
            text-align: center;
            text-decoration: none;
            padding: 15px 0;
            font-size: 12px;
            font-weight: 600;
            align-self: center;
            background: none;
            svg {
                color: ${ar_blue};
                margin-right: 10px;
            }
        }
    }
`