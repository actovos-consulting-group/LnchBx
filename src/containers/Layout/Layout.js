import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import { Grid, Block, Modal } from '@actovos-consulting-group/ui-core';
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList';
import Footer from '../../components/Footer/Footer';
import PastTripItems from '../../components/Dashboard/PastTrips/PastTripItems';
import MainContent from '../MainContent/MainContent';
import TripModal from '../../components/TripModal/TripModal';

class Layout extends Component {
  state = {
    showModal: false
  }


  toggleModalHandler = () => {

    this.setState((prevState) =>{
      console.log('prevstate',prevState.showModal);
      return {showModal: !prevState.showModal}
    });
    
  }

  
  render() {
    
    return (
      <Fragment>
        <TripModal show={this.state.showModal}/>
        <Header toggle={this.toggleModalHandler}/>
        <Block marginTop="20px">
          <Grid.Row>
            <Grid.Column size={3}>
              <FriendsList />
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
      </Fragment>
    );
  }
}

export default Layout;
