import React, {Component} from 'react'
import styled from 'styled-components'
import { ar_white, ar_darkGrey, ar_darkBlue } from '../../variables';

export default class TitleBox extends Component {
    render() {
        console.log(this.props);
        return (
            <TitleBoxContainer>
                <h2>{this.props.name}</h2>
            </TitleBoxContainer>
        )
    }
}

const TitleBoxContainer = styled.div`
    background-color: ${ar_darkBlue};
    justify-content: center;
    align-content: center;
    display: grid;
    min-height: 550px;
    h2 {
        text-align: center;
        color: ${ar_white};
    }
`