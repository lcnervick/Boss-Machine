const express = require('express');
const { getAll, getOne, create, update, deleteOne } = require('./helperFuncs');
const ideasRouter = express.Router();

// GET /
ideasRouter.get('/', (req, res, next) => {
	getAll(res);
});

// GET /:ideaId
ideasRouter.get('/:ideaId', (req, res, next) => {
	getOne(res);
});

// POST /
ideasRouter.post('/', (req, res, next) => {
	const { name, description, numWeeks, weeklyRevenue } = req.body;
	create(res, { name, description, numWeeks, weeklyRevenue });
});

// PUT /:ideaId
ideasRouter.put('/:ideaId', (req, res, next) => {
	const { id, name, description, numWeeks, weeklyRevenue } = req.body;
	update(res, { id, name, description, numWeeks, weeklyRevenue });
});

// DELETE/:ideaId
ideasRouter.delete('/:ideaId', (req, res, next) => {
	deleteOne(res);
});

module.exports = ideasRouter;
