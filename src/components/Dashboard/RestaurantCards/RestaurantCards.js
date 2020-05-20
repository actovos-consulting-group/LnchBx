import React from 'react';
import {Block, Card, Grid} from '@actovos-consulting-group/ui-core';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const RestaurantCards = () => (
    <Grid.Row>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> 
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </Grid.Row>
);

export default RestaurantCards;