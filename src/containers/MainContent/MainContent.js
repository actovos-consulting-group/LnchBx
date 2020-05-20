import React, {Component} from 'react';
import { Block } from '@actovos-consulting-group/ui-core';
import RestaurantCards from '../../components/Dashboard/RestaurantCards/RestaurantCards';
import styled from 'styled-components';

const StyledBlock = styled(Block)`
    height: 100vh;
    overflow: scroll;
`;

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <StyledBlock>
                <RestaurantCards />
            </StyledBlock>
        );
    }
}

export default MainContent;