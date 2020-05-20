import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@actovos-consulting-group/ui-core';
import { FaUserFriends as FriendIcon } from '@actovos-consulting-group/ui-core/esm/Icons/fa';

const DefaultImg = styled.img`
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.cardBorderBottom};
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StyledListItem = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.cardBorderBottom};

    :hover {
      background-color: ${theme.colors.hover};
    }
  `,
);

const ListItem = ({ id, name, image }) => {
  return (
    <StyledListItem key={id}>
      <DefaultImg src={image} />
      <p>{name}</p>
    </StyledListItem>
  );
};

export default ListItem;
