import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Grid, Block, Loadable } from '@actovos-consulting-group/ui-core';
import intersection from 'lodash/intersection';
import Header from '../../components/Header/Header';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';
import MainContent from '../MainContent/MainContent';
import TripModal from '../../components/TripModal/TripModal';
import { API, restaurantQueries } from '../../constants';
import { AuthContext } from '../../App';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [friends, setFriends] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const { userData } = useContext(AuthContext);

  const getUserInfo = () => {
    axios.get(`${API.host}/api/me/${userData.id}`).then(({ data }) => {
      setUserInfo(data[0]);
    });
  };

  const getFriends = () => {
    axios.get(`${API.host}/api/friends/${userData.id}`).then(({ data }) => {
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
      // console.log(categories);
      return [...arr, categories];
    }, []);

    const sameCategories = intersection(...categoryArrays);

    const selectedCat =
      sameCategories[Math.floor(Math.random() * sameCategories.length)];

    //TODO: should this go on the server so the API keys arent exposed?
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
