import React from 'react';
import styled, {div, css} from 'styled-components';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import MyTheme from '../../../theme';

const FriendListContainer = styled.div`
border: 1px solid ${MyTheme.colors.black};
width: 100%;
`

const FriendListHeader = styled.div`
text-align: center;
border-bottom: 1px solid ${MyTheme.colors.black};`


const FriendsList = () => (
    <FriendListContainer>
        <FriendListHeader><h3>Friends</h3></FriendListHeader>
        <FriendsListItem/>
        <FriendsListItem/>
        <FriendsListItem/>
        <FriendsListItem/>
        <FriendsListItem/>
        <FriendsListItem/>
        <FriendsListItem/>

    </FriendListContainer>
);

export default FriendsList;