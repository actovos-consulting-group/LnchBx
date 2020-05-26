import React from 'react';
import styled from 'styled-components';
import FriendsListItem from './FriendsListItem/FriendsListItem';

const FriendListContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
`;

const FriendListHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;

//TODO: make the getFriends call here instead of Layout

const FriendsList = ({ items = [], header, type, toggle = () => null }) => {
  const listItems = items.map(item => {
    return <FriendsListItem {...item} type={type} toggle={toggle} />;
  });

  return (
    <FriendListContainer>
      <FriendListHeader>
        <h3>{header}</h3>
      </FriendListHeader>
      {listItems}
    </FriendListContainer>
  );
};

export default FriendsList;
