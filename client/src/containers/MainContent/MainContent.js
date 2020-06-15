import React from 'react';
import styled from 'styled-components';
import { Block } from '@actovos-consulting-group/ui-core';
import RestaurantCards from '../../components/Dashboard/RestaurantCards/RestaurantCards';

const StyledBlock = styled(Block)`
  height: 100vh;
  overflow: scroll;
`;

const MainContent = ({ restaurants, isTrip, storeSelectedRestaurant }) => {
  return (
    <StyledBlock>
      <RestaurantCards
        restaurants={restaurants}
        isTrip={isTrip}
        storeSelectedRestaurant={storeSelectedRestaurant}
      />
    </StyledBlock>
  );
};

export default MainContent;
