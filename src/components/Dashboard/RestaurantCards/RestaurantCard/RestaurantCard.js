import React from 'react';
import {Block, Card, Grid} from '@actovos-consulting-group/ui-core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    :hover {
        background-color: ${p => p.theme.colors.hover}
    }
`;

const StyledImg = styled.img`
    max-width: 100%;
`;

const StyledBlock = styled(Block)`
    h4 {
        margin-bottom: 0;
    }
    p.info {
        display:flex;
        justify-content: space-between;
        font-size: 11px;
    }
`;

const RestaurantCard = () => (
<Grid.Column size={4}>
    <StyledCard >
        <Block >
            <StyledImg src="https://i.imgur.com/WPcy3B6.jpg" />
            <StyledBlock>
                <h4>Metro Wine Bar & Bistro</h4>
                <p className="info">
                    <span>Category: Mexican</span> <span>Rating: 7/10</span>
                </p>
                <p>180 Orchard St, Oklahoma City OK 73108</p>
            </StyledBlock>
        </Block>
    </StyledCard>
</Grid.Column>
);

export default RestaurantCard;