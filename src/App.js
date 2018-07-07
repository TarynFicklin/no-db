import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city:      'provo',
      state:     'ut',
      cardsArr:  [],
    };

    this.updateCardsArr = this.updateCardsArr.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/cards').then(results => this.setState({cardsArr: results.data}))
  }

  getCity(val)  {this.setState({city:  val})}
  getState(val) {this.setState({state: val})}

  updateCardsArr (val) {
    this.setState({cardsArr: val})
  }

  add() {
    axios.post('/api/cards', {
      city: this.state.city,
      state: this.state.state
    }).then(results => this.setState({cardsArr: results.data}))
  }

  change() {
    axios.put('')
  }

  render() {
    const { cardsArr } = this.state;
    return (
      <div>
        <div className="input-area">
          <input onChange={(e)=>this.getCity(e.target.value)} placeholder="City"/>
          <input onChange={(e)=>this.getState(e.target.value)} placeholder="State"/>

          <button onClick={()=>this.add()} className="add-button">+</button>
        </div>

        {cardsArr.map((e, i) => {
          return (
            <Card 
            key={i}
            id={e.id}
            city={e.city}
            state={e.state}
            updateCardsArr={this.updateCardsArr}
            />
          )}
        )}

      </div>
    );
  }
}

export default App;
