const express = require('express');
const { deleteAll, getAll, create } = require('./helperFuncs');
const meetingsRouter = express.Router();

// GET /
meetingsRouter.get('/', (req, res, next) => {
	getAll(res);
});

// POST /
meetingsRouter.post('/', (req, res, next) => {
	const { time, date, day, note } = req.body;
	create(res, { time, date, day, note });
});

// DELETE/:ideaId
meetingsRouter.delete('/', (req, res, next) => {
	deleteAll(res);
});


module.exports = meetingsRouter;
