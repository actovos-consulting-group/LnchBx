import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100px;
    margin-right: 10px;
    display: inline-block;
`;

const TripContainer = styled.div`
width: 100%;
padding: 10px`;

const PastTripItem = () => (
    <TripContainer>
        <StyledImg src='https://i.imgur.com/WPcy3B6.jpg'/>
        <div style={{display: 'inline-block'}}>
            <h3>Trip name</h3>
            <h4>Restuarant name</h4>
        </div>
    </TripContainer>
);

export default PastTripItem;