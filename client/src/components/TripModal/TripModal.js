import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Modal,
  Flex,
  ModalHeader,
  ModalContent,
  Block,
  ModalFooter,
  Button,
  Input,
} from '@actovos-consulting-group/ui-core';
import StorageHelper from '../../helpers/Storage';
import FriendsList from '../Dashboard/FriendsList/FriendsList';

const TripModal = ({ show, friends, toggleModal, getSelectedRestaurant }) => {
  const [tripFriends, setTripFriends] = useState([]);
  const [friendOptions, setFriendOptions] = useState(friends);
  const [inputValue, setInputValue] = useState('');

  const addFriendToggle = id => {
    const friend = friendOptions.filter(f => {
      return f.id === id;
    })[0];

    const newFriendOptions = friendOptions.filter(f => f.id !== friend.id);

    setFriendOptions(newFriendOptions);

    setTripFriends([friend, ...tripFriends]);
  };

  const removeFriendToggle = id => {
    const clickedFriend = tripFriends.filter(f => f.id === id)[0];

    const removeFriend = tripFriends.filter(f => f.id !== clickedFriend.id);

    setTripFriends(removeFriend);

    setFriendOptions([clickedFriend, ...friendOptions]);
  };

  const createNewTrip = () => {
    const tripName = inputValue;
    const data = {
      name: tripName,
      friends: tripFriends,
    };

    const trips = StorageHelper.get('trips');

    if (trips) {
      const allTrips = [...trips, data];

      StorageHelper.set('trips', allTrips);
    } else {
      StorageHelper.set('trips', [data]);
    }

    toggleModal();
    getSelectedRestaurant(data);

    // pass TRUE back up to Loadable
    // grab categories of all people in trip
    // create array of category ID's that are present in each array
    // randomly grab 1 ID
    // call API with that ID
    // present 3 recommendations of where to eat
  };

  return (
    <Modal show={show} onClose={toggleModal}>
      <ModalHeader>
        <h3 style={{ textAlign: 'center' }}>
          Create a new lunch trip with friends!
        </h3>
      </ModalHeader>
      <ModalContent style={{ height: 550 }}>
        <Block px={40}>
          <Input
            label="Name this Trip"
            name="trip name"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </Block>
        <Flex p={40}>
          <Block mr={6} minWidth={300} maxWidth={500}>
            <FriendsList
              header="Your Friends"
              items={friendOptions}
              type="newTrip"
              toggle={addFriendToggle}
            />
          </Block>
          <Block minWidth={300} maxWidth={500}>
            <FriendsList
              header="Trip Friends"
              items={tripFriends}
              type="tripFriends"
              toggle={removeFriendToggle}
            />
          </Block>
        </Flex>
      </ModalContent>
      <ModalFooter>
        <Block px={40}>
          <Button style={{ width: '100%' }} onClick={createNewTrip}>
            Go to lunch
          </Button>
        </Block>
      </ModalFooter>
    </Modal>
  );
};

export default TripModal;
