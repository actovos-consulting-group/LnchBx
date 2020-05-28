import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Block,
  Modal,
  Loadable,
} from '@actovos-consulting-group/ui-core';
import intersection from 'lodash/intersection';
import Header from '../../components/Header/Header';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';
import MainContent from '../MainContent/MainContent';
import TripModal from '../../components/TripModal/TripModal';
import { API, FOURSQUARE, restaurantQueries } from '../../constants';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [friends, setFriends] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const getUserInfo = () => {
    axios.get(`${API.host}/me`).then(({ data }) => {
      setUserInfo(data[0]);
    });
  };

  const getFriends = () => {
    //TODO: need to set up routing and sso to get userID
    axios.get(`${API.host}/friends/1`).then(({ data }) => {
      setFriends(data);
    });
  };

  const getAllRestaurants = () => {
    axios.get(restaurantQueries.getAllRestaurants).then(data => {
      setAllRestaurants(data.data.response.venues);
      setLoadingState(false);
    });
  };

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  const getSelectedRestaurant = tripData => {
    setLoadingState(true);

    const allTripPeeps = [...tripData.friends, userInfo];

    const categoryArrays = allTripPeeps.reduce((arr, friend) => {
      const categories = friend.categories.map(cat => {
        return cat.api_id;
      });
      return [...arr, categories];
    }, []);

    const sameCategories = intersection(...categoryArrays);

    const selectedCat =
      sameCategories[Math.floor(Math.random() * sameCategories.length)];

    axios
      .get(
        `${restaurantQueries.getSelectedRestaurant}&categoryId=${selectedCat}&sortByPopularity=1&limit=3&openNow=1`,
      )
      .then(data => {
        const venues = data.data.response.groups[0].items.map(venue => {
          return venue.venue;
        });
        setAllRestaurants(venues);
        setLoadingState(false);
      });
  };

  useEffect(() => {
    getUserInfo();
    getFriends();
    getAllRestaurants();
  }, []);

  return (
    <>
      {showModal && (
        <TripModal
          friends={friends}
          show={showModal}
          toggleModal={toggleModalHandler}
          getSelectedRestaurant={getSelectedRestaurant}
        />
      )}
      <Header toggle={toggleModalHandler} />
      <Block marginTop="20px">
        <Grid.Row>
          <Grid.Column size={3}>
            <FriendsList header="Friends" items={friends} />
          </Grid.Column>
          <Grid.Column size={6}>
            <Loadable loading={loadingState}>
              <MainContent restaurants={allRestaurants} />
            </Loadable>
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
