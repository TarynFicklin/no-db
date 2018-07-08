import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';
import AddButton from './components/AddButton';
import CitySelector from './components/CitySelector';
import StateSelector from './components/StateSelector';

import './Weather.css';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      city     : 'provo',
      state    : 'ut',
      cardsArr : [],
    };

    this.add            = this.add.bind(this);
    this.getCity        = this.getCity.bind(this);
    this.getState       = this.getState.bind(this);
    this.updateCardsArr = this.updateCardsArr.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/cards').then(results => this.setState({cardsArr: results.data}))
  }

  getCity        (val) {this.setState({city     : val})}
  getState       (val) {this.setState({state    : val})}
  updateCardsArr (val) {this.setState({cardsArr : val})}
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
          <CitySelector  getCity  = { this.getCity } />
          <StateSelector getState = { this.getState } />
          <AddButton     add      = { this.add } />
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
