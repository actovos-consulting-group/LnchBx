import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Grid, Block, Modal } from '@actovos-consulting-group/ui-core';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';
import MainContent from '../MainContent/MainContent';
import TripModal from '../../components/TripModal/TripModal';
import axios from 'axios';

class Layout extends Component {
  state = {
    showModal: false,
    friends: [],
  };

  getFriends = () => {
    axios.get('http://localhost:3004/friends').then(({ data }) => {
      this.setState({ friends: data });
    });
  };

  toggleModalHandler = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <>
        {this.state.showModal && (
          <TripModal
            friends={this.state.friends}
            show={this.state.showModal}
            toggleModal={this.toggleModalHandler}
          />
        )}
        <Header toggle={this.toggleModalHandler} />
        <Block marginTop="20px">
          <Grid.Row>
            <Grid.Column size={3}>
              <FriendsList header="Friends" items={this.state.friends} />
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
  }
}

export default Layout;
