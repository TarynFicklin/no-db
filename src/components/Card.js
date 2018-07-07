import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';

import drizzle   from '../images/drizzle.png'
import foggy     from '../images/foggy.png'
import hot       from '../images/hot.png'
import meteorite from '../images/meteorite.png'
import raining   from '../images/raining.png'
import sky       from '../images/sky.png'
import snowy     from '../images/snowy.png'
import stormy    from '../images/stormy.png'
import sunny     from '../images/sunny.png'
import windy     from '../images/windy.png'

class Card extends Component {
  constructor() {
    super();

    this.state = {
      temp       : '72',
      condition  : 'meteorite',
      editCity   : 'provo',
      editState  : 'ut',
      code       :  '13',
      background : 'sky'
    };
  }

  componentDidMount() {

    this.conditionBackground();
    // axios.get(`https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.props.city}, ${this.props.state}")&format=json`).then((results) => {
    //   this.setState({
    //   temp:       results.data.query.results.channel.item.condition.temp,
    //   condition:  results.data.query.results.channel.item.condition.text,
    //   code:       results.data.query.results.channel.item.condition.code
    //   })
    //   this.conditionBackground();
    // })

  }

  deleteCard() {
    axios.delete(`/api/cards/${this.props.id}`).then((results) => this.props.updateCardsArr(results.data))
  }

  editCard() {
    let city = this.state.editCity;
    let state = this.state.editState;

    // axios.get(`https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}, ${state}")&format=json`).then((results) => { 
    // this.setState({
    //   temp:       results.data.query.results.channel.item.condition.temp,
    //   condition:  results.data.query.results.channel.item.condition.text,
    //   code:       results.data.query.results.channel.item.condition.code
    //   })
    // })

    axios.put(`/api/cards/${this.props.id}`,
    {
      city: city,
      state: state,
      temp: this.state.temp,
      condition: this.state.condition
    })
  .then((results) => {
    this.conditionBackground();
    return this.props.updateCardsArr(results.data);
  })
  }

  updateCity  (val) {this.setState({editCity:  val})}
  updateState (val) {this.setState({editState: val})}

  conditionBackground() {
    let {code} = this.state;

    switch(code) {
      case '0':
          this.setState({background: stormy});
          break;
      case '1':
          this.setState({background: stormy});
          break;
      case '2':
          this.setState({background: stormy});
          break;
      case '3':
          this.setState({background: stormy});
          break;
      case '4':
          this.setState({background: stormy});
          break;
      case '5':
          this.setState({background: snowy});
          break;
      case '6':
          this.setState({background: snowy});
          break;
      case '7':
          this.setState({background: snowy});
          break;
      case '8':
          this.setState({background: drizzle});
          break;
      case '9':
          this.setState({background: drizzle}); 
          break;
      case '10':
          this.setState({background: raining});
          break;
      case '11':
          this.setState({background: raining});
          break;
      case '12':
          this.setState({background: raining});
          break;
      case '13':
          this.setState({background: snowy});
          break;
      case '14':
          this.setState({background: snowy});
          break;
      case '15':
          this.setState({background: snowy});
          break;
      case '16':
          this.setState({background: snowy});
          break;
      case '17':
          this.setState({background: raining});
          break;
      case '18':
          this.setState({background: snowy});
          break;
      case '19':
          this.setState({background: hot});
          break;
      case '20':
          this.setState({background: foggy});
          break;
      case '21':
          this.setState({background: foggy});
          break;
      case '22':
          this.setState({background: foggy});
          break;
      case '23':
          this.setState({background: windy});
          break;
      case '24':
          this.setState({background: windy});
          break;
      case '25':
          this.setState({background: snowy});
          break;
      case '26':
          this.setState({background: sky});
          break;
      case '27':
          this.setState({background: sky});
          break;
      case '28':
          this.setState({background: sky});
          break;
      case '29':
          this.setState({background: sky});
          break;
      case '30':
          this.setState({background: sky});
          break;
      case '31':
          this.setState({background: sunny});
          break;
      case '32':
          this.setState({background: sunny});
          break;
      case '33':
          this.setState({background: sunny});
          break;
      case '34':
          this.setState({background: sunny});
          break;
      case '35':
          this.setState({background: raining});
          break;
      case '36':
          this.setState({background: hot});
          break;
      case '37':
          this.setState({background: stormy});
          break;
      case '38':
          this.setState({background: stormy});
          break;
      case '39':
          this.setState({background: stormy});
          break;
      case '40':
          this.setState({background: stormy});
          break;
      case '41':
          this.setState({background: snowy});
          break;
      case '42':
          this.setState({background: stormy});
          break;
      case '43':
          this.setState({background: snowy});
          break;
      case '44':
          this.setState({background: sky});
          break;
      case '45':
          this.setState({background: stormy});
          break;
      case '46':
          this.setState({background: snowy});
          break;
      case '47':
          this.setState({background: stormy});
          break;
      default:
          this.setState({background: meteorite});
      }
  }

  render() {
    let { city, state } = this.props;
    let { temp, condition, code } = this.state;

    return (
			<div id="card" style={{backgroundImage: `url(${this.state.background})`}}>
        <div className="wrapper">
          <div className="top-div">
            <div className="temp-div">
              <p className="temp">{temp}°</p>
            </div>

            <div className="info-div">
              <div className="dual-div">
                <div className="location-div">
                  <p className="location">{city}, {state}</p>
                </div>
                <div className="delete-div">
                  <button onClick={() => this.deleteCard()} className="delete-button">X</button>
                </div>
              </div>
              <div className="condition-div">
                <p className="condition">{condition}</p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => this.editCard()} className="edit-button">Edit</button><br/>
        <input onChange={(e) => this.updateCity (e.target.value)} placeholder="City" className="city-input input" />
        <input onChange={(e) => this.updateState(e.target.value)} placeholder="State" className="state-input input"/>
			</div>
    );
  }
}

export default Card;
