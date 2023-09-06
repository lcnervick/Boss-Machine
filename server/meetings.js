const express = require('express');
const { deleteAll, getAll } = require('./helperFuncs');
const { createMeeting, addToDatabase } = require('./db');
const meetingsRouter = express.Router();

// GET /
meetingsRouter.get('/', (req, res, next) => {
	getAll(res);
});

// POST /
meetingsRouter.post('/', (req, res, next) => {
	const { name, type } = res.element;
	// console.log(`Creating New ${name}...`);
	try {
		const newMeeting = createMeeting();
		addToDatabase('meetings', newMeeting);
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
