import React from 'react';
import styled from 'styled-components';
import PastTripItem from './PastTripItem/PastTripItem';

const PastTripContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
`;

const PastTripHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;

const PastTripItems = () => (
  <PastTripContainer>
    <PastTripHeader>
      <h3>Past Trips</h3>
    </PastTripHeader>
    <PastTripItem />
    <PastTripItem />
    <PastTripItem />
    <PastTripItem />
  </PastTripContainer>
);

export default PastTripItems;
