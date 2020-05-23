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

//Maybe make the getFriends call here instead of Layout

const FriendsList = ({
  items = [],
  header,
  type = null,
  toggle = () => null,
}) => {
  //if type != "sidebar" list item should not have button

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
