import React from 'react';
import styled from 'styled-components';
import PastTripItem from './PastTripItem/PastTripItem';

const PastTripContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const PastTripHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;

const PastTripItems = ({ pastTrips }) => {
  const listItems = pastTrips.map(item => (
    <PastTripItem key={item.id} info={item} />
  ));

  return (
    <PastTripContainer>
      <PastTripHeader>
        <h3>Past Trips</h3>
      </PastTripHeader>
      {listItems}
    </PastTripContainer>
  );
};

export default PastTripItems;
