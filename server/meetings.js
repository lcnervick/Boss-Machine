const express = require('express');
const { deleteAll, getAll, create } = require('./helperFuncs');
const { createMeeting } = require('./db');
const meetingsRouter = express.Router();

// GET /
meetingsRouter.get('/', (req, res, next) => {
	getAll(res);
});

// POST /
meetingsRouter.post('/', (req, res, next) => {
	const { name, type } = res.element;
	console.log(`Creating New ${name}...`);
	try {
		const newMeeting = createMeeting();
		res.status(201).json(newMeeting);
	} catch(err) {
		res.status(400).send(err);
	}
});

// DELETE/:ideaId
meetingsRouter.delete('/', (req, res, next) => {
	deleteAll(res);
});


module.exports = meetingsRouter;
