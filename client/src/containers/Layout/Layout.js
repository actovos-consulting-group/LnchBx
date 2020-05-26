import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Block, Modal } from '@actovos-consulting-group/ui-core';
import Header from '../../components/Header/Header';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';
import MainContent from '../MainContent/MainContent';
import TripModal from '../../components/TripModal/TripModal';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axios.get('http://localhost:3004/friends').then(({ data }) => {
      setFriends(data);
    });
  };

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {showModal && (
        <TripModal
          friends={friends}
          show={showModal}
          toggleModal={toggleModalHandler}
        />
      )}
      <Header toggle={toggleModalHandler} />
      <Block marginTop="20px">
        <Grid.Row>
          <Grid.Column size={3}>
            <FriendsList header="Friends" items={friends} />
          </Grid.Column>
          <Grid.Column size={6}>
            <MainContent />
          </Grid.Column>
          <Grid.Column size={3}>
            <PastTripItems />
          </Grid.Column>
        </Grid.Row>
      </Block>

      <Footer />
    </>
  );
};

export default Layout;
