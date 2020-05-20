import React from 'react';
import {
  Modal,
  Flex,
  ModalHeader,
  ModalContent,
  Block,
} from '@actovos-consulting-group/ui-core';
import FriendsList from '../Dashboard/FriendsList/FriendsList';

const TripModal = ({ show, friends }) => (
  <Modal show={show}>
    <ModalHeader>
      <h3 style={{ textAlign: 'center' }}>
        Create a new lunch trip with friends!
      </h3>
    </ModalHeader>
    <ModalContent>
      <Flex px={40}>
        <Block mr={6} minWidth={300} maxWidth={500}>
          <FriendsList header="Your Friends" items={friends} type="newTrip" />
        </Block>
        <Block minWidth={300} maxWidth={500}>
          <FriendsList header="Trip Friends" />
        </Block>
      </Flex>
    </ModalContent>
  </Modal>
);

export default TripModal;
