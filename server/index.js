const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();
const port = 5000;

app.use(cors());

app.use(middleware.decodeToken);

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});