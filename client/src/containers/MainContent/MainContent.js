import React from 'react';
import styled from 'styled-components';
import { Block } from '@actovos-consulting-group/ui-core';
import RestaurantCards from '../../components/Dashboard/RestaurantCards/RestaurantCards';

const StyledBlock = styled(Block)`
  height: 100vh;
  overflow: scroll;
`;

const MainContent = ({ restaurants }) => {
  return (
    <StyledBlock>
      <RestaurantCards restaurants={restaurants} />
    </StyledBlock>
  );
};

export default MainContent;
