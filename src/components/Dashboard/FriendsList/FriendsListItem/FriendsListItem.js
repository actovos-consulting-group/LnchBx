import React from 'react';
import styled, {css} from 'styled-components';
import {FaUserFriends as FriendIcon } from '@actovos-consulting-group/ui-core/esm/Icons/fa';
import MyTheme from '../../../../theme';


const DefaultImg = styled(FriendIcon)(
    () => css`
      border-radius: 50%;
      border: 1px solid;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    `,
  );

const SyledFriend = styled.div`
width: 100%;
padding: 10px;
display: flex;
align-items: left;
border-bottom: 1px solid ${MyTheme.colors.black} `


const FriendsListItem = () => (
    <SyledFriend>
        <DefaultImg/>
        <h4>First Last Name</h4>
    </SyledFriend>
);

export default FriendsListItem;