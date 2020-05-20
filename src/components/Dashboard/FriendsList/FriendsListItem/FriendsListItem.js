import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@actovos-consulting-group/ui-core';
import { FaUserFriends as FriendIcon } from '@actovos-consulting-group/ui-core/esm/Icons/fa';

const DefaultImg = styled(FriendIcon)`
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.black};
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StyledFriend = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.black};
  `,
);

const FriendsListItem = () => (
  <StyledFriend>
    <DefaultImg />
    <h4>First Last Name</h4>
  </StyledFriend>
);

export default FriendsListItem;
