import React from 'react';
import styled from 'styled-components';
import PastTripItem from './PastTripItem/PastTripItem';

const PastTripContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
`;

const PastTripItems = () => (
  <PastTripContainer>
    <PastTripItem />
    <PastTripItem />
    <PastTripItem />
    <PastTripItem />
  </PastTripContainer>
);

export default PastTripItems;
