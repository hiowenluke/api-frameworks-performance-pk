
const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
	res.send(req.query);
});

app.listen(3333);
