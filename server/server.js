const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use for all middlewares
app.use(bodyParser.json());

//===ENDPOINTS===

//===ENDPOINTS===

const port = 3005;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})