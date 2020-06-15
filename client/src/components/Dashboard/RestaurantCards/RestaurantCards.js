import React from 'react';
import { Grid } from '@actovos-consulting-group/ui-core';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const RestaurantCards = ({ restaurants, isTrip, storeSelectedRestaurant }) => {
  return (
    <Grid.Row>
      {restaurants?.map(r => (
        <RestaurantCard
          info={r}
          isTrip={isTrip}
          key={r.id}
          storeSelectedRestaurant={storeSelectedRestaurant}
        />
      ))}
    </Grid.Row>
  );
};

export default RestaurantCards;
