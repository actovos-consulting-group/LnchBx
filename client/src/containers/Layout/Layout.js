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
import ConfirmModal from '../../components/Modal/ConfirmModal';
import { API, restaurantQueries } from '../../constants';
import { AuthContext } from '../../App';
import CategoriesModal from '../../components/Modal/CategoriesModal';

const Layout = () => {
  const { userData } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    name: '',
  });
  const [categoriesModal, setCategoriesModal] = useState(false);
  const [friends, setFriends] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isTrip, setIsTrip] = useState(false);
  const [tripInfo, setTripInfo] = useState({});
  const [pastTrips, setPastTrips] = useState([]);

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

  const getAllCategories = () => {
    axios.get(`${API.host}/api/categories`).then(({ data }) => {
      setAllCategories(data);
    });
  };

  const getAllRestaurants = () => {
    axios.get(restaurantQueries.getAllRestaurants).then(data => {
      setAllRestaurants(data.data.response.venues);
      setLoadingState(false);
    });
  };

  const getPastTrips = () => {
    axios.get(`${API.host}/api/trips/${userData.id}`).then(({ data }) => {
      setPastTrips(data);
    });
  };

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  const toggleConfirmModal = () => {
    setConfirmModal({ show: !confirmModal, name: '' });
  };

  const toggleCategoriesModal = () => {
    setCategoriesModal(prevState => !prevState);
  };

  const getSelectedRestaurant = tripData => {
    setLoadingState(true);
    // reset tripFriends for each trip

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

    axios
      .get(
        `${restaurantQueries.getSelectedRestaurant}&categoryId=${selectedCat}&sortByPopularity=1&limit=3&openNow=1`,
      )
      .then(data => {
        const venues = data.data.response.groups[0].items.map(venue => {
          return venue.venue;
        });

        if (venues.length > 0) {
          setAllRestaurants(venues);
          setIsTrip(true);
          setTripInfo(prevState => {
            return {
              ...prevState,
              name: tripData.name,
              friends: tripData.friends,
            };
          });

          setLoadingState(false);
        } else {
          alert('Picky Picky! No restaurants found');
          getAllRestaurants();
        }
      });
  };

  const storeSelectedRestaurant = (id, name) => {
    // take selectect restaurant info
    // TODO: remove categories from tripFriends info

    const tripData = {
      tripName: tripInfo.name,
      restaurant_id: id,
      restaurant_name: name,
      creator_id: userInfo.id,
      friends: tripInfo.friends,
    };

    try {
      axios.post(`${API.host}/api/trips`, tripData).then(({ data }) => {
        // update Past Trips

        getPastTrips();
        setConfirmModal({ show: true, name });
      });
    } catch (error) {
      // TODO: need better handling
      alert(error);
    }

    // update Past Trips
  };

  useEffect(() => {
    getUserInfo();
    getFriends();
    getAllCategories();
    getPastTrips();
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
      {confirmModal.show && (
        <ConfirmModal toggleModal={toggleConfirmModal} info={confirmModal} />
      )}
      {categoriesModal && (
        <CategoriesModal
          toggleCategoryModal={toggleCategoriesModal}
          show={categoriesModal}
          userCats={userInfo.categories}
          allCats={allCategories}
        />
      )}
      <Header
        toggle={toggleModalHandler}
        toggleCategoryModal={toggleCategoriesModal}
      />
      <Block marginTop="20px">
        <Grid.Row>
          <Grid.Column size={3}>
            <FriendsList header="Friends" items={friends} />
          </Grid.Column>
          <Grid.Column size={6}>
            <Loadable loading={loadingState}>
              <MainContent
                restaurants={allRestaurants}
                isTrip={isTrip}
                storeSelectedRestaurant={storeSelectedRestaurant}
              />
            </Loadable>
          </Grid.Column>
          <Grid.Column size={3}>
            <PastTripItems pastTrips={pastTrips} />
          </Grid.Column>
        </Grid.Row>
      </Block>
      <Footer />
    </>
  );
};

export default Layout;
