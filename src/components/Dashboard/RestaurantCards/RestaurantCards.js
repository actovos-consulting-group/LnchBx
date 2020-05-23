import React, { useState, useEffect } from 'react';
import { Block, Card, Grid } from '@actovos-consulting-group/ui-core';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import axios from 'axios';
import { FOURSQUARE } from '../../../constants';

const RestaurantCards = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  useEffect(() => {
    axios
      .get(
        `${FOURSQUARE.url}client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&near=Oklahoma City&radius=15000&limit=50&query=restaurant`,
      )
      .then(data => {
        setAllRestaurants(data.data.response.venues);
      });
  }, []);

  console.log(allRestaurants);

  return (
    <Grid.Row>
      {allRestaurants && allRestaurants.map(r => <RestaurantCard info={r} />)}
    </Grid.Row>
  );
};

export default RestaurantCards;
