const express = require('express');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
	console.log("Getting All Minions");
	res.status(200).json({minions:[]});
});

module.exports = minionsRouter;
