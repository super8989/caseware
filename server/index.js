const express = require('express');
const PORT = 5000;
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// middleware
app.use(cors());
app.use(express.json()); // allows access to req.body
app.use(morgan('dev'));

app.get('/', async (req, res) => {
	try {
		res.json('hello');
	} catch (error) {
		console.error(err.message);
	}
});

app.post('/', async (req, res) => {
	try {
		const { cardInfo } = req.body;
		console.log(cardInfo);

		res.status(201).json('received');
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
