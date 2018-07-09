//node modules
import React, { Component } from 'react';
import axios from 'axios';

//background images
import drizzle      from '../resources/drizzle.png'
import foggy        from '../resources/foggy.png'
import hot          from '../resources/hot.png'
import meteorite    from '../resources/meteorite.png'
import mostlyClear  from '../resources/mostly-clear.png'
import mostlyCloudy from '../resources/mostly-cloudy.png'
import partlyCloudy from '../resources/partly-cloudy.png'
import raining      from '../resources/raining.png'
import sky          from '../resources/sky.png'
import snowy        from '../resources/snowy.png'
import stormy       from '../resources/stormy.png'
import sunny        from '../resources/sunny.png'
import windy        from '../resources/windy.png'

//dependencies
import './Card.css';
import CardStructure from './CardStructure';

class Card extends Component {
  constructor() {
    super();

		//card's default values
    this.state = {
      temp       : '72',
      condition  : 'meteorites',
      editCity   : 'provo',
      editState  : 'ut',
      code       : '3200',
      background : 'sky'
    };

    //binding functions to pass down to CardStructure
    this.deleteCard  = this.deleteCard.bind(this);
    this.editCard    = this.editCard.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCity  = this.updateCity.bind(this);
  }

  componentDidMount() {

    this.conditionBackground();

	//getting data from Yahoo Weather API
    axios
    .get(`https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.props.city}, ${this.props.state}")&format=json`)
    .then((results) => {
      this.setState({
      temp:       results.data.query.results.channel.item.condition.temp,
      condition:  results.data.query.results.channel.item.condition.text,
      code:       results.data.query.results.channel.item.condition.code
      })
    this.conditionBackground();
    })

  }

  //deletes the current weather card
  deleteCard() {
    axios
      .delete(`/api/cards/${this.props.id}`)
      .then((results) => this.props.updateCardsArr(results.data))
  }

  //edits the current card
  editCard() {
		let city = this.state.editCity;
    let state = this.state.editState;

    this.conditionBackground();
		
	//gets the information from Yahoo Weather API to update the current card's background
    axios
      .get(`https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}, ${state}")&format=json`)
      .then((results) => { 
          this.setState({
          temp:       results.data.query.results.channel.item.condition.temp,
          condition:  results.data.query.results.channel.item.condition.text,
          code:       results.data.query.results.channel.item.condition.code
          })
          this.conditionBackground();
      })

	//updates the information of the current card
    axios
      .put(`/api/cards/${this.props.id}`,
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

  //captures the user's input
  updateCity  (val) { this.setState({editCity:  val}) }
  updateState (val) { this.setState({editState: val}) }

  //finds what weather condition the card has and updates the background accordingly
  conditionBackground() {
    let { code } = this.state;

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
          this.setState({background: mostlyCloudy});
          break;
      case '28':
          this.setState({background: sky});
          break;
      case '29':
          this.setState({background: partlyCloudy});
          break;
      case '30':
          this.setState({background: sky});
          break;
      case '31':
          this.setState({background: sunny});
          break;
      case '32':
          this.setState({background: hot});
          break;
      case '33':
          this.setState({background: mostlyClear});
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
    let { city, state, id } = this.props;
    let { temp, condition, background } = this.state;

    return (
    <div>
      <CardStructure 
        //props
        id          = { id }
        city        = { city }
        state       = { state }

        //state
        temp        = { temp }
        condition   = { condition }
        background  = { background }

        //functions
        editCard    = { this.editCard }
        deleteCard  = { this.deleteCard }
        updateCity  = { this.updateCity }
        updateState = { this.updateState }
      />
    </div>
    );
  }
}

export default Card;