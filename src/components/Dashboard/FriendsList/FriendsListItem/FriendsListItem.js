import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Button } from '@actovos-consulting-group/ui-core';
import {
  FaMinusCircle,
  FaPlusCircle,
} from '@actovos-consulting-group/ui-core/esm/Icons/fa';
import Icon from '@actovos-consulting-group/ui-core/dist/Components/Icon';

const DefaultImg = styled.img`
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.cardBorderBottom};
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StyledFriend = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.cardBorderBottom};
    justify-content: space-between;
    align-items: center

    :hover {
      background-color: ${theme.colors.hover};
    }
  `,
);

const StyledPlusIcon = styled(FaPlusCircle)(
  ({ theme }) => css`
    color: ${theme.colors.teal};
    position: relative;
    top: 1em;
    right: 1em;
  `,
);

const StyledMinusIcon = styled(FaMinusCircle)(
  ({ theme }) => css`
    color: ${theme.colors.yellow};
    position: relative;
    top: 1em;
    right: 1em;
  `,
);

const FriendsListItem = ({ id, name, image, type = null, toggle = null }) => {
  let iconDisplay;
  if (type === 'newTrip') {
    iconDisplay = <StyledPlusIcon onClick={() => toggle(id)} />;
  }
  if (type === 'tripFriends') {
    iconDisplay = <StyledMinusIcon onClick={() => toggle(id)} />;
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
