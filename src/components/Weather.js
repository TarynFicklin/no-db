//node modules
import React, { Component } from 'react';
import axios from 'axios';

//dependencies
import Card          from './cards/Card';
import AddButton     from './inputs/AddButton';
import CitySelector  from './inputs/CitySelector';
import StateSelector from './inputs/StateSelector';
import './Weather.css';

class Weather extends Component {
  constructor() {
    super();

    //the default value for the cards when created
    this.state = {
      city     : 'provo',
      state    : 'ut',
      cardsArr : [],
    };

    //binds the methods to pass down to Card.js
    this.add            = this.add.bind(this);
    this.getCity        = this.getCity.bind(this);
    this.getState       = this.getState.bind(this);
    this.updateCardsArr = this.updateCardsArr.bind(this);
  }
  
  componentDidMount() {
    //gets data from local server
    axios.get('/api/cards').then(results => this.setState({cardsArr: results.data}))
  }

  //captures the user's input for adding a new card
  getCity        (val) {this.setState({city     : val})}
  getState       (val) {this.setState({state    : val})}
  updateCardsArr (val) {this.setState({cardsArr : val})}

  //creates a new card
  add() {
    axios
      .post('/api/cards', {
        city  : this.state.city,
        state : this.state.state
      })
      .then(results => this.setState({cardsArr: results.data}))
  }

  render() {
    const { cardsArr } = this.state;
    
    return (
      <div>
        <div className="input-bar">
          <CitySelector getCity = { this.getCity } />
          <StateSelector getState = { this.getState } />
          <AddButton add = { this.add } />
        </div>

        <div className="card-field">
          {cardsArr.map((e, i) => {
            return (
              <Card
                key   = { i }
                id    = { e.id }
                city  = { e.city }
                state = { e.state }
                updateCardsArr = { this.updateCardsArr }
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Weather;