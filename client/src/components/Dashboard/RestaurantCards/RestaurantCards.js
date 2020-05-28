import React, { useState, useEffect } from 'react';
import { Block, Card, Grid } from '@actovos-consulting-group/ui-core';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import axios from 'axios';
import { FOURSQUARE } from '../../../constants';

const RestaurantCards = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  return (
    <Grid.Row>
      {restaurants?.map(r => (
        <RestaurantCard info={r} />
      ))}
    </Grid.Row>
  );
};

export default RestaurantCards;
