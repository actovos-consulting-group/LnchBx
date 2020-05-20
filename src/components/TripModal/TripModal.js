import React from 'react';
import { Modal, Flex, ModalHeader, ModalContent, Block } from '@actovos-consulting-group/ui-core';
import FriendsList from '../Dashboard/FriendsList/FriendsList';



const TripModal = ({show}) => (
    <Modal show={show} >
        <ModalHeader><h3 style={{textAlign:'center'}}>Create a new lunch trip with friends!</h3></ModalHeader>
        <ModalContent>
            <Flex px={40}>
                <Block mr={6} minWidth={300} maxWidth={500}>
                    <FriendsList />
                </Block>
                <Block minWidth={300} maxWidth={500}>
                  <FriendsList />
                </Block>
            </Flex>
        </ModalContent>
    
    </Modal>
);

export default TripModal;