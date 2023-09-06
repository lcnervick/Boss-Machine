const express = require('express');
const { getAll, getOne, create, update, deleteOne } = require('./helperFuncs');
const minionsRouter = express.Router();

// GET /
minionsRouter.get('/', (req, res, next) => {
	getAll(res);
});

// GET /:minionId
minionsRouter.get('/:minionId', (req, res, next) => {
	getOne(res);
});

// POST /
minionsRouter.post('/', (req, res, next) => {
	const { name, title, salary, weaknesses } = req.body;
	create(res, { name, title, salary, weaknesses });
});

// PUT /:minionId
minionsRouter.put('/:minionId', (req, res, next) => {
	const { id, name, title, salary, weaknesses } = req.body;
	update(res, { id, name, title, salary, weaknesses });
});

// DELETE /:minionId
minionsRouter.delete('/:minionId', (req, res, next) => {
	deleteOne(res);
});

module.exports = minionsRouter;
