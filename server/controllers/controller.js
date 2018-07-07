let cardsArr = [];

let id = 0;

module.exports = {
	read: ( req, res ) => {
		//returning to the user
		// res.status(200).send("Current Cards: \n" + JSON.stringify(cardsArr));
		res.status(200).send(cardsArr)
	},
	 
	create: ( req, res ) => {
		//incrimenting the id
		id++;

		//destructing the body
		let { city, state, temp, condition } = req.body;

		//the card to be created
		cardsArr.push(
			{
				id        : id,
				city      : city,
				state     : state,
				temp      : temp,
				condition : condition
			});

		//returning to the user
		// res.status(200).send("New Card Created. \n" + JSON.stringify(cardsArr))
		res.status(200).send(cardsArr);
	},
	 
	update: ( req, res ) => {
		//making shortcuts
		const { city, state, temp, condition } = req.body;
		const updateID = req.params.id;

		//finding the index
		const cardIndex = cardsArr.findIndex(val => val.id == updateID);
		let val = cardsArr[cardIndex];

		//what the card is replaced with
		cardsArr[cardIndex] = {
				id        : val.id,
				city      : city      || val.city,
				state     : state     || val.state,
				temp      : temp      || val.temp,
				condition : condition || val.condition
		}

		//returning to the user
		// res.status(200).send("Updated Card. \n" + JSON.stringify(cardsArr));
		res.status(200).send(cardsArr);
	},
	 
	delete: ( req, res ) => {
		//making a shortcut to the id
		const deleteID = req.params.id;

		//finding the card index
		cardIndex=cardsArr.findIndex(val => val.id == deleteID);

		//removing the card from the array
		cardsArr.splice(cardIndex,1);

		//returning to the user
		// res.status(200).send("Deleted Card. \n" + JSON.stringify(cardsArr));
		res.status(200).send(cardsArr);
	}
}