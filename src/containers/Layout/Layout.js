import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import { Grid } from '@actovos-consulting-group/ui-core';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Grid.Row>
            <Grid.Column size={3}>
              <FriendsList />
            </Grid.Column>
            <Grid.Column size={6}>
              <div>Main Content</div>
            </Grid.Column>
            <Grid.Column size={3}>
              <PastTripItems />
            </Grid.Column>
          </Grid.Row>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
