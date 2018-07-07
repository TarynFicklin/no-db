require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use for all middlewares
app.use(bodyParser.json());

const origin = "/api/cards";
const controllers = require('./controllers/controller.js')

//===ENDPOINTS===
app.get   (`${origin}`,      controllers.read )
app.post  (`${origin}`,      controllers.create)
app.put   (`${origin}/:id`,  controllers.update)
app.delete(`${origin}/:id`,  controllers.delete)
//===ENDPOINTS===

const port = 3005;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})