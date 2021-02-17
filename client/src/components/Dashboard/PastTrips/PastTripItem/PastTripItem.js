import React from 'react';
import styled, { css } from 'styled-components';
import { Block } from '@actovos-consulting-group/ui-core';

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

const PastTripItem = ({ info: { name, restaurant_name, created_at } }) => (
  <TripContainer>
    <Block display="inline-block">
      <h3>
        {restaurant_name}
        <small>
          <em>{created_at}</em>
        </small>
      </h3>
      <h4>{name}</h4>
    </Block>
  </TripContainer>
);

export default PastTripItem;
