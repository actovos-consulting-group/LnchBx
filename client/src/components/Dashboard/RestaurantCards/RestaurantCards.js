import React from 'react';
import { Grid } from '@actovos-consulting-group/ui-core';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const RestaurantCards = ({ restaurants }) => {
  // const [selectedRestaurant, setSelectedRestaurant] = useState('');

  return (
    <Grid.Row>
      {restaurants?.map(r => (
        <RestaurantCard info={r} />
      ))}
    </Grid.Row>
  );
};

export default RestaurantCards;
