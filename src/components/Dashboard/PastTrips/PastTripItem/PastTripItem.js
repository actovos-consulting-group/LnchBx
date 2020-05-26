import React from 'react';
import styled, { css } from 'styled-components';
import { Block } from '@actovos-consulting-group/ui-core';

const StyledImg = styled.img`
  width: 100px;
  margin-right: 10px;
`;

const TripContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.cardBorderBottom};

    &:hover {
      background-color: ${theme.colors.hover};
    }
  `,
);

const PastTripItem = () => (
  <TripContainer>
    <StyledImg src="https://i.imgur.com/WPcy3B6.jpg" />
    <Block display="inline-block">
      <h3>Trip name</h3>
      <h4>Restuarant name</h4>
    </Block>
  </TripContainer>
);

export default PastTripItem;
