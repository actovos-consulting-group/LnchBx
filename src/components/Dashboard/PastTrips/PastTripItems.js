import React from 'react';
import styled, {div, css} from 'styled-components';
import MyTheme from '../../../theme';
import PastTripItem from './PastTripItem/PastTripItem';

const PastTripContainer = styled.div`
border: 1px solid ${MyTheme.colors.black};
width: 100%;
`

const PastTripItems = () => (
    <PastTripContainer>
        <PastTripItem />
        <PastTripItem />
        <PastTripItem />
        <PastTripItem />
    </PastTripContainer>
);

export default PastTripItems;