import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Clickable } from '@actovos-consulting-group/ui-core';
import {
  FaMinusCircle,
  FaPlusCircle,
} from '@actovos-consulting-group/ui-core/esm/Icons/fa';

const DefaultImg = styled.img`
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.cardBorderBottom};
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StyledFriend = styled(Flex)(
  ({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.hover};
    }
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.cardBorderBottom};
    justify-content: space-between;
    align-items: center;
  `,
);

const StyledPlusIcon = styled(FaPlusCircle)(
  ({ theme }) => css`
    color: ${theme.colors.teal};
    position: relative;
    right: 1em;
    font-size: 1.5em;
  `,
);

const StyledMinusIcon = styled(FaMinusCircle)(
  ({ theme }) => css`
    color: ${theme.colors.yellow};
    position: relative;
    right: 1em;
    font-size: 1.5em;
  `,
);

const FriendsListItem = ({ id, name, image, type = null, toggle = null }) => {
  let iconDisplay;
  if (type === 'newTrip') {
    iconDisplay = (
      <Clickable onClick={() => toggle(id)}>
        <StyledPlusIcon />
      </Clickable>
    );
  }
  if (type === 'tripFriends') {
    iconDisplay = (
      <Clickable onClick={() => toggle(id)}>
        <StyledMinusIcon />
      </Clickable>
    );
  }

  return (
    <StyledFriend key={id} data-id={id}>
      <DefaultImg src={image} />
      <p>{name}</p>
      {iconDisplay}
    </StyledFriend>
  );
};

export default FriendsListItem;
