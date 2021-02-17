import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import { isNull } from 'lodash';

const FriendListContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
`;

const FriendListHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;

// TODO: make the getFriends call here instead of Layout

const FriendsList = ({ items = [], header, type, toggle = () => null }) => {
  const listItems = items.map(item => {
    if (!item.image) {
      //get an image
      // assign item.image
      const getImage = axios
        .get('https://100k-faces.glitch.me/random-image-url')
        .then(data => {
          return data.data.url;
        })
        .catch(error => console.log(error));

      item.image = getImage;
    }

    return (
      <FriendsListItem key={item.id} {...item} type={type} toggle={toggle} />
    );
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
